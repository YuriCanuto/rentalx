import { ISpecificationRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class SpecificationService {
  constructor(private specificationsRepository: ISpecificationRepository) {}

  create({ name, description }: IRequest): void {
    if (this.specificationsRepository.findByName(name)) {
      throw new Error("Specification Already Exists!");
    }

    this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { SpecificationService };
