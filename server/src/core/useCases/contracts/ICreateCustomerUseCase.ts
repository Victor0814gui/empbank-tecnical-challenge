import { Customer } from "../../entities/Customer";



type ICreateCustomerUseCaseParams = {
    code: string;
    name: string;
    network: string;
}

type ICreateCustomerUseCaseResponse = Promise<Customer>




export type ICreateCustomerUseCase = {
    execute: (params: ICreateCustomerUseCaseParams)
        => ICreateCustomerUseCaseResponse;
}

export type {
    ICreateCustomerUseCaseParams,
    ICreateCustomerUseCaseResponse,
}