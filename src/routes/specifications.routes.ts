import { Router } from "express";

import { SpecificationController } from "../modules/specifications/controllers/SpecificationController";
import { SpecificationRepository } from "../modules/specifications/repositories/SpecificationsRepository";
import { SpecificationService } from "../modules/specifications/services/SpecificationService";

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationRepository();
const specificationService = new SpecificationService(specificationsRepository);

specificationsRoutes.post("/", (request, response) => {
  const specificationController = new SpecificationController(
    specificationService
  );

  specificationController.create(request, response);
});

export { specificationsRoutes };
