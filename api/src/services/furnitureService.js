import Furniture from "../models/Furniture.js";

export function getAll(filter) {
   return Furniture.find(filter).select({
      description: true,
      price: true,
      img: true,
   });
}

export function getOne(furnitureId) {
   return Furniture.findById(furnitureId);
}

export function create(furnitureData, ownerId) {
   return Furniture.create({
      ...furnitureData,
      _ownerId: ownerId,
   });
}

export function update(furnitureId, furnitureData) {
   return Furniture.findByIdAndUpdate(furnitureId, furnitureData, { runValidators: true });
}

export function del(furnitureId, userId) {
   return Furniture.deleteOne({ _id: furnitureId, _ownerId: userId });
}
