import { Assistant } from "../../entities/Assistant";

export type IListParams = void;
export type IListResponse = Promise<Assistant[] | null>;

export type IListComercialAssistantRepository = {
  list: (params: IListParams) => IListResponse;
};
