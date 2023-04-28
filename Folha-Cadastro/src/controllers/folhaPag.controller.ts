import { Request, Response } from "express";
import { FolhaRepository } from "../data/folha.repository";
import { Folha } from "../models/folha.model";
import crypto from "crypto";
import axios from "axios";

const repository = new FolhaRepository();

export class FolhaPagController {
    async cadastrar(request: Request, response: Response) {
        let folha: Folha | null = request.body;
    
        folha = await repository.cadastrar(folha);
    
        return response.status(201).json({
          message: "Folha cadastrado!",
          data: folha,
        });
    }

    async listar(request: Request, response: Response) {
        const folhas = await repository.listar();
        return response.status(200).json({
          message: "ok",
          data: folhas,
        });
    }

    async calcular(request: Request, response: Response) {
        const folhas = await repository.listar();

        folhas.forEach(folhas => {
            if (!folhas.bruto) {
                //bruto
                folhas.bruto = folhas.valor * folhas.horas;
                //irrf
                if (folhas.bruto > 4664.68) {
                    folhas.irrf = ((folhas.bruto * 0.275) - 869.36);     
                }else
                {
                    if(folhas.bruto > 3751.05){
                        folhas.irrf = ((folhas.bruto * 0.225) - 636.13);            

                    }else{
                        if(folhas.bruto > 2826.65){
                            folhas.irrf = ((folhas.bruto * 0.15) - 354.80);     
                        }else{
                            folhas.irrf = 0;        
                        }
                    }
                }
                //inss
                if (folhas.bruto > 5645.81) {
                    folhas.inss = (folhas.bruto - 621.03);     
                }else
                {
                    if(folhas.bruto > 2822.90){
                        folhas.inss = (folhas.bruto * 0.11);            

                    }else{
                        if(folhas.bruto > 1693.72){
                            folhas.inss = (folhas.bruto * 0.09);     
                        }else{
                            folhas.inss = (folhas.bruto * 0.08);        
                        }
                    }
                }
                //fgts
                folhas.fgts = (folhas.bruto * 0.08);

                //liq
                folhas.liquido = (folhas.bruto - folhas.irrf - folhas.inss)

                //var folha = await repository.alterar(folhas);

            } 
        });
        
        
        //folha
        
        await axios
        .post('http://localhost:3001/folhaConsulta/cadastrar',{folhas})
        .then((resposta) => {
            return response.status(201).json({
            message: "Folha calculada!",
            data: folhas,
            });
        });


    }



}
