import { Router, type Request, type Response } from "express";
import AlunoController from "./controller/AlunoController.js";

const router = Router();

/**
 * Endpoint padrão
 */
router.get('/', (req: Request, res: Response) => {
    return res.
            status(200).
            json(`Aplicação online. Timestamp: ${new Date()}`);
});

// Endpoints Aluno
router.get('/api/alunos', AlunoController.todos);
router.get('/api/alunos/:id', AlunoController.aluno);
router.post('/api/alunos', AlunoController.cadastrar);
router.delete('/api/alunos/:id', AlunoController.remover);
router.put('/api/alunos/:id', AlunoController.atualizar);

export { router }