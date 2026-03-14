import { Router, type Request, type Response } from "express";
import AlunoController from "./controller/AlunoController.js";
import LivroController from "./controller/LivroController.js";

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

// Endpoints Livro
router.get('/api/livros', LivroController.todos);
router.get('/api/livros/:id', LivroController.livro);
router.post('/api/livros', LivroController.cadastrar);
router.delete('/api/livros/:id', LivroController.remover);
router.put('/api/livros/:id', LivroController.atualizar);

export { router }