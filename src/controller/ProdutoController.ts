import { AbstrataProduto } from "../model/AbstrataProduto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController {
    protected repository: ProdutoRepository;
    private proximoId: number = 1;

    constructor() {
        this.repository = new ProdutoRepository();
    }

    salvar(produto: AbstrataProduto): void {
        try {
            produto.setId(this.proximoId++); // Usar o setter
            this.repository.salvar(produto);
            console.log("Produto cadastrado com sucesso! ID:", produto.getId()); // Usar o getter
        } catch (error) {
            console.error("Erro ao salvar produto: ", (error as Error).message);
        }
    }


    listar(): void {
        const produtos = this.repository.listar();
        produtos.forEach(p => p.exibirDetalhe());
    }


    buscarPorId(id: number): AbstrataProduto | undefined {
        const produto = this.repository.buscarPorId(id);
        if (!produto) {
            console.log(`Produto com ID ${id} não encontrado`);
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
                throw new Error("Produto não encontrado.");
            }
        } catch (error) {
            console.error("Erro ao deletar produto:", (error as Error).message);
        }
    }
}
