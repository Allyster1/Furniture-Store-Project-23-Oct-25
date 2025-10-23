import { Schema, model } from "mongoose";

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

const User = model("user", userSchema);

export default User;
