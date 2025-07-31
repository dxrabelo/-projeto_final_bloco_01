import { AbstrataProduto } from "./AbstrataProduto";

export class Produto extends AbstrataProduto {
    private tipo: string;
    private cor: string;
    private marca: string;

    constructor(id: number, nome: string, preco: number, tipo: string, cor: string, marca: string) {
        super(id, nome, preco);
        this.tipo = tipo;
        this.cor = cor;
        this.marca = marca;
    }

    public exibirDetalhe(): void {
        console.log("--------------------------------------------------");
        console.log(`ID: ${this.getId()}`);
        console.log(`Nome: ${this.getNome()}`);
        console.log(`Preço: R$ ${this.getPreco().toFixed(2)}`);
        console.log(`Tipo: ${this.tipo}`);
        console.log(`Cor: ${this.cor}`);
        console.log(`Marca: ${this.marca}`);
        console.log("--------------------------------------------------");
    }
}
