import { FastifyReply, FastifyRequest } from "fastify";
import { userModel } from "../models/user-model";
import { CreateUserRequest } from "../src/types";

export const userController = {
    async registerUser(
        req: FastifyRequest<{ Body: CreateUserRequest }>,
        res: FastifyReply
    ): Promise<void> {
        try {
            const userData: CreateUserRequest = req.body;
            const client = await userModel.registerUser(userData);
            res.status(401).send({
              message: "User created"
            })
        } catch (error) {
          res.status(500).send({
            message: "Internal Server errors"
          })
        }
    },
};
