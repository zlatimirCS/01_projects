import { Schema, models, mongoose } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    validate: (pass) => {
      if (pass.length < 10) {
        throw new Error("Password must be at least 10 characters");
      }
    },
  },
});

UserSchema.post("validate", function (user) {
  const notHashed = user.password;
  const salt = bcrypt.genSaltSync(10);
  const hashed = bcrypt.hashSync(notHashed, salt);
  user.password = hashed;
});

export const User = models?.User || mongoose.model("User", UserSchema);
