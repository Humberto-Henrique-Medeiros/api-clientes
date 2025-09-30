// src/models/Cliente.js

// A gente importa duas coisas do sequelize:
// DataTypes, pra dizer quais os tipos de cada campo (string, inteiro, etc)
// E a nossa conexão com o banco, que tá lá no arquivo database.js
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

// Aqui a gente tá definindo o nosso 'molde' de Cliente.
// O sequelize vai usar isso pra criar a tabela no banco de dados.
const Cliente = sequelize.define('Cliente',
  {
    // A coluna 'nome'
    nome: {
      type: DataTypes.STRING, // Vai ser um texto
      allowNull: false        // Não pode ser deixado em branco, é obrigatório!
    },
    // A coluna 'email'
    email: {
      type: DataTypes.STRING, // Texto também
      allowNull: false,       // Obrigatório também
      unique: true,           // Ninguém pode ter o mesmo email, tem que ser único.
      validate: {
        isEmail: true         // O sequelize vai checar se o texto parece mesmo com um email.
      }
    },
    // A coluna 'telefone'
    telefone: {
      type: DataTypes.STRING, // Texto de novo
      allowNull: true         // Esse aqui PODE ser deixado em branco, não é obrigatório.
    }
  },
  {
    // Outras configurações do modelo
    tableName: 'clientes', // O nome da tabela no banco de dados vai ser 'clientes' (tudo minúsculo)
    timestamps: true,      // O sequelize vai criar pra gente duas colunas: 'createdAt' e 'updatedAt'. Ajuda a saber quando o cliente foi criado ou atualizado.
  }
);

// No final, a gente exporta esse modelo pra poder usar ele nos outros arquivos.
export default Cliente;