import { Request, Response } from "express";

import { CategoryService } from "../services/CategoryService";

class CategoryController {
  constructor(private categoryService: CategoryService) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.categoryService.execute({ name, description });

    return response.status(201).send();
  }
}

export { CategoryController };
