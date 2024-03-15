import { inject, injectable } from "tsyringe";
import { IListComercialAssistantRepository } from "../repositories/contracts/IListComercialAssistantRepository";
import {
  IListComercialAssistantUseCase,
  IListComercialAssistantUseCaseParams,
  IListComercialAssistantUseCaseResponse,
} from "./contracts/IListComercialAssistantUseCase";

@injectable()
export class ListComercialAssistantUseCase
  implements IListComercialAssistantUseCase
{
  constructor(
    @inject("ListComercialAssistantRepository")
    private listComercialAssistantRepository: IListComercialAssistantRepository
  ) {}
  public async execute(
    params: IListComercialAssistantUseCaseParams
  ): IListComercialAssistantUseCaseResponse {
    const listComercialAssistantRepository =
      await this.listComercialAssistantRepository.list();
    return listComercialAssistantRepository;
  }
}
