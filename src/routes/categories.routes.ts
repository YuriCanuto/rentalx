import { Router } from "express";
import multer from "multer";

import { CategoryController } from "../modules/categories/controllers/CategoryController";
import { CategoriesRepository } from "../modules/categories/repositories/CategoriesRepository";
import { CategoryService } from "../modules/categories/services/CategoryService";

const categoriesRoutes = Router();
const upload = multer({
  dest: "./tmp",
});

const categoriesRepository = CategoriesRepository.getInstance();
const categoryService = new CategoryService(categoriesRepository);
const categoryController = new CategoryController(categoryService);

categoriesRoutes.post("/", (request, response) => {
  return categoryController.create(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return categoryController.list(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return categoryController.import(request, response);
});

export { categoriesRoutes };
