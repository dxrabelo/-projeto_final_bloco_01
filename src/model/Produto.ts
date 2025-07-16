import { AbstrataProduto } from "./AbstrataProduto";

export class Produto extends AbstrataProduto {
    public exibirDetalhe(): void {
        console.log(`Produto: ${this.nome} (${this.tipo}) - R$ ${this.preco}`);
    }

    protected tipo: string;
    protected cor: string;
    protected marca: string;


    constructor(id: number, nome: string, preco: number, tipo: string, cor: string, marca: string) {
        super(id, nome, preco);
        this.tipo = tipo;
        this.cor = cor;
        this.marca = marca;
    }
    protected getTipo(): string {
        return this.tipo;
    }
    protected setTipo(value: string) {
        this.tipo = value;
    }
    protected getCor(): string {
        return this.cor;
    }
    protected setCor(value: string) {
        this.cor = value;
    }
    protected getMarca(): string {
        return this.cor;
    }
    protected setMarca(value: string) {
        this.cor = value;
    }

}