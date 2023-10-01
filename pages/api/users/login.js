import bcrypt from 'bcryptjs';
import dbConnect from '../../../lib/MongoDB';
import authuser from '../../../Auth/userSchema';
import { signToken } from '../../../lib/auth';


export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  await dbConnect()

  const {email ,password} = req.body;

  try {
    const user = await authuser.findOne({email});
    if (user && bcrypt.compare(password,user.password)) {
      const token = signToken(user);
      return res.status(200).json({
        token,
        _id: user._id,
        name: user.FirstName+" "+user.LastName,
        email: user.email,
      });
    } else {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}