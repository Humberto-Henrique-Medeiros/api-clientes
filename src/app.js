// src/app.js

// A gente importa o express, claro.
import express from 'express';
// E também o nosso "cardápio" de rotas de clientes.
import clienteRoutes from './routes/clienteRoutes.js';

// Criamos a instância do nosso app.
const app = express();

// Isso aqui é um 'middleware'. É uma configuração importante pra dizer pro nosso app
// que ele deve saber "ler" o formato JSON. Sem isso, a gente não consegue pegar
// os dados que o usuário manda pra cadastrar um novo cliente.
app.use(express.json());

// Aqui a gente define a nossa rota principal.
// Estamos dizendo: "Ô app, quando alguém acessar o endereço '/clientes',
// use o nosso cardápio 'clienteRoutes' pra saber o que fazer".
app.use('/clientes', clienteRoutes);


// No final, a gente exporta o nosso app já todo configurado.
export default app;