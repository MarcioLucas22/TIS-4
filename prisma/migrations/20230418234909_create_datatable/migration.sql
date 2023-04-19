-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_medico" (
    "id" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_medico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DadosPessoais" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "conhecidoComo" TEXT NOT NULL,
    "nomeCompanheiro" TEXT NOT NULL,
    "dataNascimento" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "raca" TEXT NOT NULL,
    "trabalhaEmCasa" TEXT NOT NULL,
    "ocupacao" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "telefoneFixo" TEXT NOT NULL,
    "telefoneCelular" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "DadosPessoais_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "users_medico_cpf_key" ON "users_medico"("cpf");
