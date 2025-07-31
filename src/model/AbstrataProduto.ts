export abstract class AbstrataProduto {
    protected id: number;
    protected nome: string;
    protected preco: number;


    constructor(id: number, nome: string, preco: number) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
    public getId(): number {
        return this.id;
    }
    public setId(value: number) {
        this.id = value;
    }
    public getNome(): string {
        return this.nome;
    }
    public setNome(value: string) {
        this.nome = value;
    }
    public getPreco(): number {
        return this.preco;
    }
    public setPreco(value: number) {
        this.preco = value;
    }

    public abstract exibirDetalhe(): void;

}