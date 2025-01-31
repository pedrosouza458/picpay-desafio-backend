import Fastify from "fastify"

const app = Fastify()

app.get('/', (request, reply) => {
    reply.send({
        message: "Hello world"
    })
})

app.listen(({ port: 3000 }), () => {
    console.log("Server in running in port 3000")
})
