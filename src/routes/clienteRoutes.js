// src/routes/clienteRoutes.js

// A gente importa o 'Router' do express, que é a ferramenta pra criar nossas rotas.
import { Router } from "express";
// E também importamos as nossas funções lá do controller.
import { cadastrarCliente, listarClientes } from "../controllers/clienteController.js";

// Aqui a gente cria uma "instância" do Router, tipo uma cópia funcional.
const router = Router();

// Agora a gente define as nossas rotas. É como um cardápio.

// Rota 1: Cadastrar um novo cliente.
// Quando alguém fizer uma requisição do tipo POST para o endereço '/',
// a gente vai chamar a função 'cadastrarCliente'.
router.post('/', cadastrarCliente);

// Rota 2: Listar todos os clientes.
// Quando alguém fizer uma requisição do tipo GET para o endereço '/',
// a gente vai chamar a função 'listarClientes'.
router.get('/', listarClientes);


// No final, a gente exporta esse nosso "cardápio" de rotas.
export default router;