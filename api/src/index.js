import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

import routes from "./routes.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";

const app = express();

try {
   await mongoose.connect("mongodb://localhost:27017", {
      dbName: "furniture-sept-2025",
   });
   console.log("Successfully connected to DB");
} catch (err) {
   console.error("Cannot connect to db");
   console.error(err.message);
}

// Add cors
app.use(cors());

// Add JSON parser
app.use(express.json());

// Add auth middleware
app.use(authMiddleware);

// Add routes
app.use(routes);

app.listen(3030, () => console.log("Server is running on port http://localhost:3030...."));
