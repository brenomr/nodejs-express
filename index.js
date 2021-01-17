// Chamar a configuração do modulo customExpress em config
const customExpress = require('./config/customExpress');

// Inicializar o aplicativo
const app = customExpress();

// Configuração de porta e inicialização do servidor com mensagem de retorno
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));