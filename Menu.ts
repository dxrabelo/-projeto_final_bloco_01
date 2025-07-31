import readlineSync = require('readline-sync');
import { colors } from './src/util/Colors';
import { Produto } from './src/model/Produto';
import { ProdutoController } from './src/controller/ProdutoController'


export function main() {

    let opcao: number;

    const produtoController = new ProdutoController();


    while (true) {

        console.log(colors.bg.black, colors.fg.yellow,
            "**********************************************************");
        console.log("                                                          ");
        console.log("                      Info Shop                           ");
        console.log("                                                          ");
        console.log("**********************************************************");
        console.log("                                                          ");
        console.log("    1 - Cadastro de Produtos                              ");
        console.log("    2 - Listagem de Produtos                              ");
        console.log("    3 - Buscar Produto por ID                             ");
        console.log("    4 - Deletar Produto por ID                            ");
        console.log("    5 - Adicionar Produto ao Carrinho                     ");
        console.log("    6 - Visualizar Carrinho                               ");
        console.log("    7 - Finalizar Pedido                                  ");
        console.log("    8 - Sair                                              ");
        console.log("                                                          ");
        console.log("**********************************************************",
            colors.reset);

        console.log("Digite a opção desejada: ");
        opcao = readlineSync.questionInt("");

        if (opcao == 8) {
            console.log(colors.fg.cyan, "\nObrigado por utilizar o Info Shop!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }


        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "Cadastro de Produtos", colors.reset);

                const nome = readlineSync.question("Nome do produto: ");
                const preco = readlineSync.questionFloat("Preço do produto: ");
                const tipo = readlineSync.question("Tipo do produto: ");
                const cor = readlineSync.question("Cor do produto: ");
                const marca = readlineSync.question("Marca do produto: ");

                const novoProduto = new Produto(0, nome, preco, tipo, cor, marca); // ID gerado automaticamente
                produtoController.salvar(novoProduto);
                break;


            case 2:
                console.log(colors.fg.whitestrong, "Listagem de Produtos", colors.reset);
                produtoController.listar();
                break;
            case 3:
                console.log(colors.fg.whitestrong, "Buscar Produto por ID", colors.reset);
                const idBusca = readlineSync.questionInt("Digite o ID do produto: ");
                const produtoEncontrado = produtoController.buscarPorId(idBusca);
                if (produtoEncontrado) {
                    produtoEncontrado.exibirDetalhe();
                }
                break;

            case 4:
                console.log(colors.fg.whitestrong, "Deletar Produto por ID", colors.reset);
                const idDeletar = readlineSync.questionInt("Digite o ID do produto a ser deletado: ");
                produtoController.deletar(idDeletar);
                break;

            case 5:
                console.log(colors.fg.whitestrong, "Adicionar Produto ao Carrinho", colors.reset);
                break;

            case 6:
                console.log(colors.fg.whitestrong, "Visualizar Carrinho", colors.reset);
                break;

            case 7:
                console.log(colors.fg.whitestrong, "Finalizar Pedido", colors.reset);
                break;

            default:
                console.log(colors.fg.whitestrong, "Opção inválida. Tente novamente.", colors.reset);
        }

    }
}


export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Daliane Rabelo ");
    console.log("Daliane Rabelo - daliane.rabelo01@gmail.com");
    console.log("https://github.com/dxrabelo");
    console.log("*****************************************************");
}

main();