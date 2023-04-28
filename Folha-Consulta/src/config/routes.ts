
import { Router } from "express";
import { FolhaPagController } from "../controllers/folhaPag.controller";

const router: Router = Router();

//Folha
router.get("/folhaConsulta/listar", new FolhaPagController().listar);
router.post("/folhaConsulta/cadastrar", new FolhaPagController().cadastrar);


export { router };
