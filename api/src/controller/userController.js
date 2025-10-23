import { Router } from "express";

const userController = Router();

userController.post("/register", (req, res) => {
   const { email, password } = req.body;
   res.end();
});

userController.post("/login", (req, res) => {
   res.end();
});

userController.get("/logout", (req, res) => {
   res.end();
});

export default userController;
