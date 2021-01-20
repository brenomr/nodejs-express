// Index = subir servidor. Chamar a configuração do modulo customExpress em config
const customExpress = require('./config/customExpress');

const conexao = require('./infraestrutura/conexao');
const Tabelas = require('./infraestrutura/tabelas');

//const tabelas = require('./infraestrutura/tabelas');

conexao.connect((erro) => {
    if (erro) {
        console.log(erro);
    }

    else {
        // Inicializar o aplicativo
        const app = customExpress();

        Tabelas.init(conexao);

        // Configuração de porta e inicialização do servidor com mensagem de retorno
        app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
    }
});