import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import routes from "./routes.js";

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

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3030, () => console.log("Server is running on port http://localhost:3030...."));
