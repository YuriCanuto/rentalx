import { container } from "tsyringe";

import { CategoriesRepository } from "../../modules/categories/repositories/CategoriesRepository";
import { ICategoriesRepository } from "../../modules/categories/repositories/ICategoriesRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);
