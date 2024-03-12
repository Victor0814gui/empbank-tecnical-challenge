import { injectable, inject } from "tsyringe";
import { ICreateCustomerUseCase, ICreateCustomerUseCaseParams, ICreateCustomerUseCaseResponse } from "./contracts/ICreateCustomerUseCase";
import { ICreateCustomerRepository } from "@/repositories/contracts/ICreateCustomerRepository";
import { AppError } from "@/src/infra/exceptions/AppError";
import { randomUUID } from "crypto";




@injectable()
export class CreateCustomerUseCase
    implements ICreateCustomerUseCase {
    constructor(
        @inject("CreateCustomerRepository")
        private createCustomerRepository: ICreateCustomerRepository
    ) { }
    public async execute(params: ICreateCustomerUseCaseParams):
        ICreateCustomerUseCaseResponse {

        const verifyCustomerAlreadyExists =
            await this.createCustomerRepository.fyndByCode(
                params.code,
            );

        if (!verifyCustomerAlreadyExists?.id) {
            throw new AppError("O codigo já existe", 401);
        }

        const createCustomerRepositoryResponse =
            await this.createCustomerRepository.create({
                ...params,
                id: randomUUID(),
                createdAt: new Date().toString(),
                updatedAt: null,
            })

        return createCustomerRepositoryResponse;
    }
}