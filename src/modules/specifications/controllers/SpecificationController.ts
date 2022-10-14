import { Request, Response } from "express";

import { SpecificationService } from "../services/SpecificationService";

class SpecificationController {
  constructor(private specificationService: SpecificationService) {}

  create(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.specificationService.create({ name, description });

    return response.status(201).send();
  }
}

export { SpecificationController };
