import { Router } from "express";
import userService from "../services/userService.js";
import { getErrorMesage } from "../utils/errorUtils.js";

const userController = Router();

userController.post("/register", async (req, res) => {
   const { email, password } = req.body;

   try {
      const result = await userService.register(email, password);

      res.status(201).json(result);
   } catch (err) {
      res.status(400).json({ message: getErrorMesage(err) });
   }
});

userController.post("/login", async (req, res) => {
   const { email, password } = req.body;

   try {
      const result = await userService.login(email, password);

      res.status(201).json(result);
   } catch (err) {
      res.status(401).json({ message: getErrorMesage(err) });
   }
});

userController.get("/logout", async (req, res) => {
   // TODO: Invalidate token
   console.log(req.user);
   res.status(204).json({ ok: true });
});

export default userController;
