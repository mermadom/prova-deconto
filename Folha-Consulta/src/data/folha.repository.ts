import { PrismaClient } from "@prisma/client";
import { Folha } from "../models/folha.model";
import { Funcionario } from "../models/funcionario.model";

const prisma = new PrismaClient();
const folhas: Folha[] = [];
export class FolhaRepository {

  cadastrar(folhasNovas: Folha[]) : Folha[]{
    folhasNovas.forEach((folha) => {
      folhas.push(folha);
    });
    return folhas;
  }

  listar(): Folha[] {
    return folhas;
  }
}