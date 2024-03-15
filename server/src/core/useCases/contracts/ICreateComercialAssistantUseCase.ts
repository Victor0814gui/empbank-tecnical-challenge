import { Assistant } from "../../entities/Assistant";

type ICreateComercialAssistantUseCaseParams = {};

type ICreateComercialAssistantUseCaseResponse = Promise<Assistant>;

export type ICreateComercialAssistantUseCase = {
  execute: (
    params: ICreateComercialAssistantUseCaseParams
  ) => ICreateComercialAssistantUseCaseResponse;
};

export {
  ICreateComercialAssistantUseCaseParams,
  ICreateComercialAssistantUseCaseResponse,
};
