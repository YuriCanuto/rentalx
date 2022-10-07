import { Router } from "express";

import { SpecificationRepository } from "../modules/specifications/repositories/SpecificationsRepository";
import { SpecificationService } from "../modules/specifications/services/SpecificationService";

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationRepository();

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const specificationService = new SpecificationService(
    specificationsRepository
  );

  specificationService.execute({ name, description });

  return response.status(201).send();
});

export { specificationsRoutes };
