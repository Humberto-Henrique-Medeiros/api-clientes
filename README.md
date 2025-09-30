# API de Cadastro de Clientes

Uma API RESTful simples para gerenciar o cadastro e a listagem de clientes. Este projeto foi desenvolvido com Node.js, Express e Sequelize, utilizando um banco de dados PostgreSQL orquestrado com Docker.

## 🚀 Tecnologias Utilizadas

* **Node.js**: Ambiente de execução JavaScript no servidor.
* **Express**: Framework para a construção da API e gerenciamento de rotas.
* **Sequelize**: ORM (Object-Relational Mapper) para interagir com o banco de dados.
* **PostgreSQL**: Banco de dados relacional utilizado no projeto.
* **Docker e Docker Compose**: Usados para criar e gerenciar o contêiner do banco de dados.

## 📋 Pré-requisitos

Antes de iniciar, certifique-se de que você tem instalado em sua máquina:

* **Node.js** (versão 14 ou superior)
* **npm** (gerenciador de pacotes do Node.js)
* **Docker** e **Docker Compose**

## 🔧 Instalação e Configuração

Siga os passos abaixo para rodar o projeto localmente:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/Humberto-Henrique-Medeiros/api-clientes.git]
    cd api-clientes
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    Copie o arquivo de exemplo para criar o seu arquivo de configuração local.
    ```bash
    cp .env.example .env
    ```
    *(As credenciais no arquivo `.env` já estão pré-configuradas para funcionar com o `docker-compose.yml` deste projeto).*

4.  **Inicie o banco de dados com Docker Compose:**
    Este comando irá iniciar o contêiner do PostgreSQL em segundo plano.
    ```bash
    docker-compose up -d
    ```

## ▶️ Como Rodar a Aplicação

Com o banco de dados em execução, você pode iniciar a API com o seguinte comando:

```bash
npm run dev