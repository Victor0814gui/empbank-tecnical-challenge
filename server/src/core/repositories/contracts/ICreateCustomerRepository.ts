import { Customer } from "@/src/core/entities/Customer";


type IFyndByCodeParams = String;
type IFyndByCodeResponse = Promise<Customer | null>;

type ICreateParams = Customer;
type ICreateResponse = Promise<Customer>;


export type ICreateCustomerRepository = {
    fyndByCode: (params: IFyndByCodeParams) => IFyndByCodeResponse;
    create: (params: ICreateParams) => ICreateResponse;
}