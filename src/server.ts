import Fastify from "fastify";
import { TransferRequest } from "./types";

const app = Fastify();

app.get("/", (request, reply) => {
    reply.send({
        message: "Hello world",
    });
});

app.post("/transfer", (request, reply) => {
    const { value, payer, payee }: TransferRequest = request.body;
    // TODO find payer id by logged user
    // TODO find payee by id
});

app.listen({ port: 3000 }, () => {
    console.log("Server in running in port 3000");
});
