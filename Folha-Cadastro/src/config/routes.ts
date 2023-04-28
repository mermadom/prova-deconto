
import { Router } from "express";
import { FolhaPagController } from "../controllers/folhaPag.controller";

const router: Router = Router();

//Folha
router.get("/folha/listar", new FolhaPagController().listar);
router.post("/folha/cadastrar", new FolhaPagController().cadastrar);
router.get("/folha/calcular", new FolhaPagController().calcular);


export { router };
