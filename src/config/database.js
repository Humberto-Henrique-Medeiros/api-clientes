// src/config/database.js

// A gente importa o Sequelize, que é a ferramenta (ORM) que vai nos ajudar.
import { Sequelize } from 'sequelize';
// Também importamos o dotenv pra ele carregar nossas senhas do arquivo .env.
import dotenv from 'dotenv';

// Isso aqui "ativa" o dotenv, fazendo ele ler o arquivo .env.
dotenv.config();

// Agora a gente cria a "instância" da conexão.
// Basicamente, é o objeto que representa nossa conexão com o banco de dados.
const sequelize = new Sequelize(
    // Pega as infos lá do nosso arquivo .env
    process.env.DB_NAME,      // Nome do banco
    process.env.DB_USER,      // Usuário
    process.env.DB_PASSWORD,  // Senha
    {
        host: process.env.DB_HOST, // Onde o banco está (no nosso caso, 'localhost')
        port: process.env.DB_PORT, // A porta que a gente definiu no docker-compose.yml
        dialect: 'postgres',       // O "idioma" do banco que estamos usando.

        // Isso aqui é só pra não poluir nosso terminal com um monte de texto do sequelize.
        logging: false, 
    }
);

// No final, a gente exporta essa conexão pra poder usar em outros arquivos do projeto.
export default sequelize;