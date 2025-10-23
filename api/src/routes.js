import { Router } from "express";

import userController from "./controller/userController.js";
import furnitureController from "./controller/furnitureController.js";

const routes = Router();

routes.use("/users", userController);
routes.use("/data/catalog", furnitureController);

export default routes;
