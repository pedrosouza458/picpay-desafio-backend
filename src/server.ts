import Fastify from "fastify";
import { TransferRequest } from "./types";
import { prisma } from "./lib/prisma";

const app = Fastify();

app.get("/", (request, reply) => {
    reply.send({
        message: "Hello world",
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
