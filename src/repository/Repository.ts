
export interface Repository<T> {

    salvar(entidade: T): void;
    listar(): T[];
    buscarPorId(id: number): T | undefined;
    deletar(id: number): void;
}