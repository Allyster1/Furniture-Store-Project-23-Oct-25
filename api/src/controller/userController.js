import { Router } from "express";

const userController = Router();

userController.post("/register", (req, res) => {
   const { email, password } = req.body;
   res.end();
});

export default userController;
