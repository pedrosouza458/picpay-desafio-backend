import { FastifyInstance } from "fastify";
import { CreateUserRequest } from "../../types";
import { prisma } from "../../lib/prisma";

export async function RegisterUser(app: FastifyInstance) {
    app.post("/users", async (request, reply) => {
        const { fullName, email, password, CNPJ, CPF, role, wallet } =
            request.body as CreateUserRequest;
        const createUser = await prisma.user.create({
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
        if (!createUser) {
            return reply.status(400).send({
                message: "Failed to create user",
            });
        }
        if (createUser.role !== "commom" && createUser.role !== "shopkeeper") {
            return reply.status(200).send({
                message: "User should have commom or shopkeeper role",
            });
        }
        return reply.status(200).send({
            message: "User created successfully",
        });
    });
}
