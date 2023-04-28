import { Request, Response } from "express";
import { Folha } from "../models/folha.model";
import { FolhaRepository } from './../data/folha.repository';

const folhaRepository = new FolhaRepository();
export class FolhaPagController {
    cadastrar(request: Request, response: Response) {
      let folhas: Folha[] = request.body;
      folhas = folhaRepository.cadastrar(folhas);
      return response.status(200).json(folhas);
    }

    listar(request: Request, response: Response) {
      const folha = folhaRepository.listar();
      return response.status(200).json(folha);
    }

    
}
