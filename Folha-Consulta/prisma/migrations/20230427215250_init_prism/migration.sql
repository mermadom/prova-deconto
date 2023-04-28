-- CreateTable
CREATE TABLE "Funcionario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Folha" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mes" INTEGER NOT NULL,
    "ano" INTEGER NOT NULL,
    "horas" REAL NOT NULL,
    "valor" REAL NOT NULL,
    "bruto" REAL NOT NULL,
    "irrf" REAL NOT NULL,
    "inss" REAL NOT NULL,
    "fgts" REAL NOT NULL,
    "liquido" REAL NOT NULL,
    "funcionarioId" INTEGER NOT NULL,
    CONSTRAINT "Folha_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "Funcionario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
