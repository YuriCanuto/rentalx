import { Router } from "express";

import { CategoryController } from "../modules/categories/controllers/CategoryController";
import { CategoriesRepository } from "../modules/categories/repositories/CategoriesRepository";
import { CategoryService } from "../modules/categories/services/CategoryService";

const categoriesRoutes = Router();

const categoriesRepository = CategoriesRepository.getInstance();
const categoryService = new CategoryService(categoriesRepository);

categoriesRoutes.post("/", (request, response) => {
  const categoryController = new CategoryController(categoryService);

  return categoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  const categories = categoriesRepository.list();

  return response.json(categories);
});

export { categoriesRoutes };
