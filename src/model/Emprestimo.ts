class Emprestimo {

    private id_emprestimo: number = 0;
    private id_aluno: number;
    private id_livro: number;
    private data_emprestimo: Date;
    private data_devolucao: Date;
    private status_emprestimo: string;
    private status_emprestimo_registro: boolean = true;

    constructor(
        _id_aluno: number,
        _id_livro: number,
        _data_emprestimo: Date,
        _status_emprestimo?: string,
        _data_devolucao?: Date
    ) {
        const dataDevolucaoPadrao = new Date(_data_emprestimo);
        dataDevolucaoPadrao.setDate(dataDevolucaoPadrao.getDate() + 7);

        this.id_aluno = _id_aluno;
        this.id_livro = _id_livro;
        this.data_emprestimo = _data_emprestimo;
        this.status_emprestimo = _status_emprestimo ?? "Em Andamento";
        this.data_devolucao = _data_devolucao ?? dataDevolucaoPadrao;
    }
}

export default Emprestimo;