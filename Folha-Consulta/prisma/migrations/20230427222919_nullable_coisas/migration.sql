-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Folha" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mes" INTEGER NOT NULL,
    "ano" INTEGER NOT NULL,
    "horas" REAL NOT NULL,
    "valor" REAL NOT NULL,
    "bruto" REAL,
    "irrf" REAL,
    "inss" REAL,
    "fgts" REAL,
    "liquido" REAL,
    "funcionarioId" INTEGER NOT NULL,
    CONSTRAINT "Folha_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "Funcionario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Folha" ("ano", "bruto", "fgts", "funcionarioId", "horas", "id", "inss", "irrf", "liquido", "mes", "valor") SELECT "ano", "bruto", "fgts", "funcionarioId", "horas", "id", "inss", "irrf", "liquido", "mes", "valor" FROM "Folha";
DROP TABLE "Folha";
ALTER TABLE "new_Folha" RENAME TO "Folha";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
