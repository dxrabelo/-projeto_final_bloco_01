import readlineSync = require('readline-sync');
import { colors } from './src/util/Colors';

export function main() {

    let opcao: number;

    while (true) {

        console.log(colors.bg.black, colors.fg.yellow,
            "**********************************************************");
        console.log("                                                          ");
        console.log("                      Info Shop                           ");
        console.log("                                                          ");
        console.log("**********************************************************");
        console.log("    1 - Cadastro de Produtos                              ");
        console.log("    2 - Listagem de Produtos                              ");
        console.log("    3 - Cadastrar Clientes                                ");
        console.log("    4 - Adicionar Produto ao Carrinho                     ");
        console.log("    5 - Visualizar Carrinho                               ");
        console.log("    6 - Finalizar Pedido                                  ");
        console.log("    7 - Sair                                              ");
        console.log("                                                          ");
        console.log("**********************************************************");
        console.log("**********************************************************",
            colors.reset);

        console.log("Digite a opção desejada: ");
        opcao = readlineSync.questionInt("");

        if (opcao == 7) {
            console.log(colors.fg.cyan,
                "\nObrigado por utilizar o Info Shop!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                // Chamar função de cadastro de produtos
                console.log(colors.fg.whitestrong,
                    "Cadastro de Produtos", colors.reset);
                break;
            case 2:
                // Chamar função de listagem de produtos
                console.log("Listagem de Produtos");
                break;
            case 3:
                // Chamar função de cadastro de clientes
                console.log(colors.fg.whitestrong,
                    "Cadastrar Clientes", colors.reset);
                break;
            case 4:
                // Chamar função para adicionar produto ao carrinho
                console.log(colors.fg.whitestrong,
                    "Adicionar Produto ao Carrinho", colors.reset);
                break;
            case 5:
                // Chamar função para visualizar carrinho
                console.log(colors.fg.whitestrong,
                    "Visualizar Carrinho", colors.reset);
                break;
            case 6:
                // Chamar função para finalizar pedido
                console.log(colors.fg.whitestrong,
                    "Finalizar Pedido", colors.reset);
                break;
            default:
                console.log(colors.fg.whitestrong,
                    "Opção inválida. Tente novamente.", colors.reset);

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