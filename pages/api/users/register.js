import authuser from "../../../Auth/userSchema";
import { signToken } from "../../../lib/auth";
import bcrypt from 'bcryptjs';
import dbConnect from "../../../lib/MongoDB";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  await dbConnect()
  const {FirstName,LastName,emailID,Password} = req.body;
 
  try {
    const existingUser = await authuser.findOne({ email : emailID });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new authuser({
        FirstName,
        LastName,
        email:emailID,
        password:bcrypt.hashSync(Password),
    });

    const user = await newUser.save();
    const token = signToken(user);

    
    return res.status(200).json({
      token,
      _id: user._id,
      FirstName: user.FirstName,
      LastName: user.LastName,
      email: user.email,
    });
  } catch (error) {
    console.error("Registration error:",error);
    return res.status(500).json({ message: 'Internal server error' });
    
  }
}