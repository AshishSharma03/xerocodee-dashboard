import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const authuser = mongoose.models.authuser || mongoose.model('authuser', userSchema);
export default authuser;