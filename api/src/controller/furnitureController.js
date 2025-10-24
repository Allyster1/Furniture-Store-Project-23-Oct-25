import { Router } from "express";
import querystring from "querystring";

import { furnitureService } from "../services/index.js";
import { getErrorMesage } from "../utils/errorUtils.js";

const furnitureController = Router();

furnitureController.get("/", async (req, res) => {
   const query = req.query.where?.replaceAll('"', "");

   let filter = {};
   if (query) {
      filter = querystring.parse(query);
   }

   const furnitures = await furnitureService.getAll(filter);

   res.json(furnitures || []);
});

furnitureController.post("/", async (req, res) => {
   const furnitureData = req.body;
   const ownerId = req.user.id;

   try {
      const furniture = await furnitureService.create(furnitureData, ownerId);

      res.status(201).json(furniture);
   } catch (err) {
      res.status(400).json({ message: getErrorMesage(err) });
   }
});

furnitureController.get("/:furnitureId", async (req, res) => {
   const furnitureId = req.params.furnitureId;

   const furniture = await furnitureService.getOne(furnitureId);

   res.json(furniture);
});

furnitureController.put("/:furnitureId", async (req, res) => {
   const furnitureId = req.params.furnitureId;
   const furnitureData = req.body;

   const funiture = await furnitureService.update(furnitureId, furnitureData);

   res.json(funiture);
});

furnitureController.delete("/:furnitureId", async (req, res) => {
   const furnitureId = req.params.furnitureId;
   const userId = req.user.id;

   try {
      const funiture = await furnitureService.del(furnitureId, userId);

      res.json(funiture);
   } catch (err) {
      res.status(403).json({ message: getErrorMesage(err) });
   }
});

export default furnitureController;
