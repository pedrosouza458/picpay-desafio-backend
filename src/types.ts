import { Role } from "./enums";

export interface CreateUserRequest {
    fullName: string;
    CPF?: string;
    CNPJ?: string;
    email: string;
    password: string;
    role: Role;
    wallet: number;
}

export interface TransferRequest {
    value: number;
    payer: number;
    payee: number;
}
