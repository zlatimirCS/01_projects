import mongoose from "mongoose";
import { User } from "../../models/User";

mongoose.connect(process.env.MONGO_URL);

export async function POST(req, res) {
  try {
    const body = await req.json();
    const createdUser = await User.create(body);
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
