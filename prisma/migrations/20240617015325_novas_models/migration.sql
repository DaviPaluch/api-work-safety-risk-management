-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notificacao" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "dataEnvio" TIMESTAMP(3) NOT NULL,
    "dataVisualizacao" TIMESTAMP(3) NOT NULL,
    "visualizado" BOOLEAN NOT NULL,

    CONSTRAINT "notificacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estrategia_resolucao" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "estrategia_resolucao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "classificacao" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "classificacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "impacto" (
    "id" TEXT NOT NULL,
    "classificacaoId" TEXT NOT NULL,
    "desc" TEXT NOT NULL,

    CONSTRAINT "impacto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "risco_residual" (
    "id" TEXT NOT NULL,
    "classificacaoId" TEXT NOT NULL,
    "riscoMitigado" BOOLEAN NOT NULL,
    "dataResolucao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "risco_residual_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plano_de_acao" (
    "id" TEXT NOT NULL,
    "risco_residualId" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "dataAlerta" TIMESTAMP(3) NOT NULL,
    "tempoDeResolucao" TEXT NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataPrevistaFim" TIMESTAMP(3) NOT NULL,
    "dataFim" TIMESTAMP(3) NOT NULL,
    "comentarios" TEXT NOT NULL,

    CONSTRAINT "plano_de_acao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "setor" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "setor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "estrategia_resolucao_label_key" ON "estrategia_resolucao"("label");

-- CreateIndex
CREATE UNIQUE INDEX "classificacao_label_key" ON "classificacao"("label");

-- AddForeignKey
ALTER TABLE "notificacao" ADD CONSTRAINT "notificacao_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "impacto" ADD CONSTRAINT "impacto_classificacaoId_fkey" FOREIGN KEY ("classificacaoId") REFERENCES "classificacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "risco_residual" ADD CONSTRAINT "risco_residual_classificacaoId_fkey" FOREIGN KEY ("classificacaoId") REFERENCES "classificacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plano_de_acao" ADD CONSTRAINT "plano_de_acao_risco_residualId_fkey" FOREIGN KEY ("risco_residualId") REFERENCES "risco_residual"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
