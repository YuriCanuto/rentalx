import { Request, Response } from "express";
import { container } from "tsyringe";

import { CategoryService } from "../services/CategoryService";

class CategoryController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const categoryService = container.resolve(CategoryService);

    await categoryService.create({ name, description });

    return response.status(201).send();
  }

  list(request: Request, response: Response): Response {
    const categoryService = container.resolve(CategoryService);

    const list = categoryService.list();

    return response.json(list);
  }

  import(request: Request, response: Response): Response {
    const { file } = request;

    const categoryService = container.resolve(CategoryService);

    categoryService.import(file);

    return response.status(201).send();
  }
}

export { CategoryController };
