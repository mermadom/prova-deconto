import { Funcionario } from "./funcionario.model";

export type Folha = {
    id : number;
    mes: number;
    ano: number;
    horas: number;
    valor: number;
    bruto: number;
    irrf: number;
    inss: number;
    fgts: number;
    liquido: number;
    calculada : boolean;
    funcionario : Funcionario;
}