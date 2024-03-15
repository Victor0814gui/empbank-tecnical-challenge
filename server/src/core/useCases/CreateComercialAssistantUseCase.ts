import { inject, injectable } from "tsyringe";
import {
  ICreateComercialAssistantUseCaseParams,
  ICreateComercialAssistantUseCaseResponse,
  ICreateComercialAssistantUseCase,
} from "./contracts/ICreateComercialAssistantUseCase";
import { ICreateComercialAssistantRepository } from "../repositories/contracts/ICreateComercialAssistantRepository";

@injectable()
export class CreateComercialAssistantUseCase
  implements ICreateComercialAssistantUseCase
{
  constructor(
    @inject("CreateComercialAssistantRepository")
    private createComercialAssistantRepository: ICreateComercialAssistantRepository
  ) {}
  public async execute(
    params: ICreateComercialAssistantUseCaseParams
  ): ICreateComercialAssistantUseCaseResponse {
    const response = {} as ICreateComercialAssistantUseCaseResponse;
    return response;
  }
}
