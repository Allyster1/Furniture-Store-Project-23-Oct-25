import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
   email: {
      type: String,
      required: [true, "Email is required!"],
   },
   email: {
      type: String,
      required: [true, "Password is required!"],
   },
});

userSchema.pre("save", async function () {
   this.password = bcrypt.hash(this.password, 12);
});

const User = model("user", userSchema);

export default User;
