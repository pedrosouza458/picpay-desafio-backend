import { prisma } from "./lib/prisma";

async function main() {
    await prisma.user.create({
        data: {
            fullName: "Fulano da Silva",
            CPF: "1234.1234.1234.12",
            email: "fulanosilva@gmail.com",
            password: "123456",
            role: "commom",
            wallet: 1500,
        },
    });
    await prisma.user.create({
        data: {
            fullName: "Fulana da Silva",
            CPF: "1234.1234.4321.12",
            email: "fulanasilva@gmail.com",
            password: "123456",
            role: "commom",
            wallet: 1500,
        },
    });
    await prisma.user.create({
        data: {
            fullName: "Ciclano da Silva",
            CPF: "1234.4321.4321.12",
            email: "ciclanosilva@gmail.com",
            password: "123456",
            role: "commom",
            wallet: 1500,
        },
    });
    await prisma.user.create({
        data: {
            fullName: "Lanchonete",
            CNPJ: "12.345.678/0001-95",
            email: "lanchonete@gmail.com",
            password: "123456",
            role: "shopkeeper",
            wallet: 5000,
        },
    });
    await prisma.user.create({
        data: {
            fullName: "pizzaria",
            CNPJ: "12.543.678/0001-95",
            email: "pizzaria@gmail.com",
            password: "123456",
            role: "shopkeeper",
            wallet: 5000,
        },
    });
    await prisma.user.create({
        data: {
            fullName: "hamburgeria",
            CNPJ: "12.345.876/0001-95",
            email: "hamburgeria@gmail.com",
            password: "123456",
            role: "shopkeeper",
            wallet: 5000,
        },
    });
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        prisma.$disconnect;
        process.exit(1);
    });
