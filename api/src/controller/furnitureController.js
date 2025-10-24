import { Router } from "express";

import furnitureService from "../services/furnitureService.js";

const furnitureController = Router();

furnitureController.get("/", async (req, res) => {
   const furnitures = await furnitureService.getAll();

   res.json(furnitures || []);
});

furnitureController.post("/", async (req, res) => {
   const furnitureData = req.body;

   const ownerId = req.user.id;

   const furniture = await furnitureService.create(furnitureData, ownerId);

   res.status(201).json(furniture);
});

furnitureController.get("/:furnitureId", async (req, res) => {
   const furnitureId = req.params.furnitureId;

   const furniture = await furnitureService.getOne(furnitureId);

   res.json(furniture);
});

furnitureController.put("/:furnitureId", async (req, res) => {
   const furnitureId = req.params.furnitureId;
   const furnitureData = req.body;

   try {
      const funiture = await furnitureService.update(furnitureId, furnitureData);

      res.json(funiture);
   } catch (err) {
      // Error handling
      // res.status().json({ message: err.message });
   }
});

furnitureController.delete("/:furnitureId", async (req, res) => {
   const furnitureId = req.params.furnitureId;
   const userId = req.user.id;

   try {
      const funiture = await furnitureService.delete(furnitureId, userId);

      res.json(funiture);
   } catch (err) {
      // Error handling
      // res.status().json({ message: err.message });
   }
});

export default furnitureController;
