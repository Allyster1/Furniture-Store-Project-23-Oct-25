import { Schema, Types, model } from "mongoose";

const furnitureSchema = new Schema({
   make: {
      type: String,
      minLength: [4, "Make should be at least 4 characters long"],
      required: [true, "Make is required"],
   },
   model: {
      type: String,
      minLength: [4, "Model should be at least 4 characters long"],
      required: [true, "Model is required"],
   },
   year: {
      type: Number,
      min: [1950, "Year should be lower than 1950"],
      max: [2050, "Year cannot be larger than 2050"],
      required: [true, "Year is required"],
   },
   description: {
      type: String,
      minLength: [10, "Description should be at least 10 characters long"],
      required: [true, "Description is required"],
   },
   price: {
      type: Number,
      min: [0, "Price should be a positive number"],
      required: [true, "Price is required"],
   },
   img: {
      type: String,
      required: [true, "Img is required"],
   },
   material: {
      type: String,
      required: false,
   },
   _ownerId: {
      type: Types.ObjectId,
      ref: "User",
   },
});

const Furniture = model("Furniture", furnitureSchema);

export default Furniture;
