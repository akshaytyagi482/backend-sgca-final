import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String, // hashed
});

export default mongoose.model('Admin', AdminSchema);
