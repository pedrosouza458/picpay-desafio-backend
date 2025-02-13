import { prisma } from "../src/lib/prisma";
import { CreateUserRequest } from "../src/types";

export const userModel = {
    async registerUser(userBody: CreateUserRequest) {
        const { fullName, email, password, CNPJ, CPF, role, wallet } = userBody;
        await prisma.user.create({
            data: {
                fullName,
                email,
                password,
                CNPJ,
                CPF,
                role,
                wallet,
            },
        });
    },
    
};
