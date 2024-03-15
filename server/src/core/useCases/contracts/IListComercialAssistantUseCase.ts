import { Assistant } from "../../entities/Assistant";

export type IListComercialAssistantUseCaseParams = void;
export type IListComercialAssistantUseCaseResponse = Promise<
  Assistant[] | null
>;

export type IListComercialAssistantUseCase = {
  execute: (
    params: IListComercialAssistantUseCaseParams
  ) => IListComercialAssistantUseCaseResponse;
};
