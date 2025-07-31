import { AbstrataProduto } from "../model/AbstrataProduto";

export class ProdutoRepository {
    private produtos: AbstrataProduto[] = [];

    salvar(produto: AbstrataProduto): void {
        this.produtos.push(produto);
    }

    listar(): AbstrataProduto[] {
        return this.produtos;
    }

    buscarPorId(id: number): AbstrataProduto | undefined {
        return this.produtos.find(p => p.getId() === id);
    }

    deletar(id: number): void {
        this.produtos = this.produtos.filter(p => p.getId() !== id);
    }
}