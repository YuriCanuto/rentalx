import { Router } from "express";
import multer from "multer";

import { CategoryController } from "../modules/categories/controllers/CategoryController";

const categoriesRoutes = Router();
const upload = multer({
  dest: "./tmp",
});

const categoryController = new CategoryController();

categoriesRoutes.post("/", categoryController.create);

categoriesRoutes.get("/", categoryController.list);

categoriesRoutes.post(
  "/import",
  upload.single("file"),
  categoryController.import
);

export { categoriesRoutes };
