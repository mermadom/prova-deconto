import { PrismaClient } from "@prisma/client";
import { Folha } from "../models/folha.model";
import { Funcionario } from "../models/funcionario.model";

const prisma = new PrismaClient();
export class FolhaRepository {

    async cadastrar(folha: Folha | null): Promise<Folha> {
        await prisma.folha.create({
            data: {
            mes: folha!.mes,
            ano: folha!.ano,
            horas: folha!.horas,
            valor: folha!.valor,
            calculada : folha!.calculada,
            funcionario : {
              create : {
                nome : folha!.funcionario.nome,
                cpf : folha!.funcionario.cpf
              }
            }
            },
        });

        return folha!;
        }

    async listar(): Promise<Folha[]> {
      return await prisma.folha.findMany({
        where : {
          calculada : null,
        },
        include: {
          funcionario : {
            select: {
              nome: true,
              cpf: true
            },
          },
        },
      })
    }

    async alterar(folha: Folha | null): Promise<Folha | null> {
      try {
        const produtoAlterado = await prisma.folha.update({
          where: {
            id: folha?.id,
          },
          data: {
            calculada: true
          },
        });
        return folha;
      } catch {
        return null;
      }
    }


}