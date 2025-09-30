// index.js (a versão final!)

// A gente importa nosso app já configurado lá do 'src/app.js'.
import app from './src/app.js';
// Também importamos a conexão com o banco.
import sequelize from './src/config/database.js';
// E o dotenv pra carregar as variáveis do .env
import dotenv from 'dotenv';

dotenv.config();

// Pegamos a porta do nosso .env, mas se não tiver nada lá, usamos a 3000 como padrão.
const PORTA = process.env.PORT || 3000;


// Essa função 'start' vai ser a responsável por "ligar" tudo na ordem certa.
const start = async () => {
  try {
    // 1º - A gente tenta se conectar com o banco de dados.
    await sequelize.authenticate();
    console.log('Oba! Conectado no banco de dados com sucesso.');

    // 2º - A gente sincroniza nossos "moldes" (models) com as tabelas do banco.
    // Se a tabela 'clientes' não existir, o sequelize cria ela pra gente. Mágico, né?
    await sequelize.sync();
    console.log('Tudo sincronizado com o banco de dados.');

    // 3º - Só depois que a conexão com o banco deu certo, a gente liga o servidor da API.
    app.listen(PORTA, () => {
      console.log(`API rodando a todo vapor na porta ${PORTA}. Pode testar!`);
    });

  } catch (error) {
    // Se deu algum pau em qualquer uma das etapas acima, a gente cai aqui.
    console.error('Xiii, deu ruim ao tentar ligar o servidor:', error);
  }
};

// Finalmente, a gente chama a função pra começar tudo.
start();