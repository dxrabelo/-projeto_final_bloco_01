import { AbstrataProduto } from "../model/AbstrataProduto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController {

    protected repository: ProdutoRepository;

    constructor() {
        this.repository = new ProdutoRepository();
    }

    salvar(produto: AbstrataProduto): void {
        try {
            this.repository.salvar(produto);
            console.log("produto cadastrado com sucesso!");
        } catch(error) {
            console.error("Error ao salvar produto: ", (error as Error).message);
        }
    }
    listar(): void {
        const produtos = this.repository.listar();
       produtos.forEach(p => p.exibirDetalhe());
    }
    buscarPorId(id: number): AbstrataProduto | undefined {
        const produto = this.repository.buscarPorId(id);
        if (!produto) {
            console.log(`Produto com ID ${id} nao encontrado`);
        }
        return produto;
    }
    deletar(id: number): void {
        try {
            const produto = this.repository.buscarPorId(id);
            if (produto) {
                this.repository.deletar(id);
                console.log(`Produto com ID ${id} removido.`);
            } else {
                throw new Error("Produto nao encontrado.");
            }
        } catch (error) {
            console.error("Erro ao deletar produto:", (error as Error).message);
        }
    }
}