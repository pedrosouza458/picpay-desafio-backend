import Fastify from "fastify";
import { CreateUserRequest, TransferRequest } from "./types";
import { prisma } from "./lib/prisma";

const app = Fastify();

app.get("/", (request, reply) => {
    reply.send({
        message: "Hello world",
    });
});

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

app.post("/transfer", async (request, reply) => {
    const { value, payer, payee } = request.body as TransferRequest;
    // TODO find payer id by logged user
    const findPayee = await prisma.user.findUnique({
        where: { id: payee },
    });
});

app.listen({ port: 3000 }, () => {
    console.log("Server in running in port 3000");
});
