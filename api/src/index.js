import express from "express";
import cors from "cors";

import routes from "./routes.js";

const app = express();

app.use(cors());

app.use(routes);

app.listen(3030, () => console.log("Server is running on port http://localhost:3030...."));
