// src/controllers/clienteController.js

// A gente importa o nosso "molde" de Cliente, pra poder usar ele aqui.
import Cliente from "../models/Cliente.js";

// --- FUNÇÃO PARA CADASTRAR UM NOVO CLIENTE ---
// 'async' significa que essa função pode demorar um pouquinho pra executar,
// porque ela vai precisar conversar com o banco de dados.
export const cadastrarCliente = async (req, res) => {
  // O 'try...catch' é tipo uma rede de segurança.
  // A gente TENTA executar o código dentro do 'try'.
  // Se der algum pau, o 'catch' pega o erro e a gente manda uma resposta amigável.
  try {
    // A gente pega as informações (nome, email, telefone) que o usuário mandou no corpo da requisição.
    const { nome, email, telefone } = req.body;

    // Uma checagem básica pra ver se o usuário mandou pelo menos o nome e o email.
    if (!nome || !email) {
      return res.status(400).json({ erro: "Opa, nome e email são obrigatórios, viu?" });
    }

    // Aqui a mágica acontece! A gente usa o nosso "molde" (Cliente) pra criar um novo cliente no banco.
    // O 'await' faz a gente esperar essa operação terminar antes de continuar.
    const novoCliente = await Cliente.create({ nome, email, telefone });

    // Se deu tudo certo, a gente responde com o status 201 (que significa 'Criado')
    // e manda de volta os dados do cliente que acabamos de criar.
    res.status(201).json(novoCliente);

  } catch (error) {
    // Se caiu aqui, deu ruim. A gente manda uma mensagem de erro genérica.
    console.log(error); // Isso aqui é bom pra gente ver o erro detalhado no terminal.
    res.status(500).json({ erro: "Ih, deu um problema no servidor. Tenta de novo depois!" });
  }
};

// --- FUNÇÃO PARA LISTAR TODOS OS CLIENTES ---
export const listarClientes = async (req, res) => {
  try {
    // Mais fácil ainda: a gente pede pro nosso "molde" encontrar TODOS os clientes no banco.
    const clientes = await Cliente.findAll();

    // E manda a lista de volta como resposta.
    res.status(200).json(clientes);

  } catch (error) {
    console.log(error);
    res.status(500).json({ erro: "Xii, não consegui buscar os clientes. Tenta de novo mais tarde." });
  }
};