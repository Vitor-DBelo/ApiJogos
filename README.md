# API de Jogos

Uma API RESTful construída com **Express** e **TypeScript** para gerenciar informações de jogos, incluindo detalhes sobre requisitos de sistema, DLCs e mais.

---

## Arquitetura do Projeto

A arquitetura do projeto segue o modelo em camadas, organizando responsabilidades de forma clara. Abaixo está uma visão da estrutura do projeto e organização dos diretórios:

```
src/
├── contracts/     # Interfaces para contratos entre camadas
├── controllers/   # Manipuladores de requisições
├── repositories/  # Acesso a dados
├── services/      # Lógica de negócios
├── utils/         # Funções auxiliares
├── app.ts         # Configuração do Express
├── routes.ts      # Rotas da API
└── server.ts      # Ponto de entrada do servidor
```

---

## 🛠 Tecnologias Utilizadas

![TypeScript](https://img.shields.io/badge/TypeScript-2F3136?style=for-the-badge&logo=typescript)
![Express.js](https://img.shields.io/badge/Express.js-2F3136?style=for-the-badge&logo=express)
![Node.js](https://img.shields.io/badge/Node.js-2F3136?style=for-the-badge&logo=node.js)
![CORS](https://img.shields.io/badge/CORS-2F3136?style=for-the-badge)

---

## 🔧 Dependências de Desenvolvimento

![TypeScript](https://img.shields.io/badge/TypeScript-2F3136?style=for-the-badge&logo=typescript)
![TSX](https://img.shields.io/badge/TSX-2F3136?style=for-the-badge&logo=react)
![TSUP](https://img.shields.io/badge/TSUP-2F3136?style=for-the-badge&logo=typescript)

---

## Endpoints da API

### Exemplos de Requisições usando Thunder Client

#### **GET** `/api/game`
Recupera todos os jogos.

#### **GET** `/api/game/{id}`
Recupera um jogo específico pelo ID.

#### **GET** `/api/game/Detail/{id}`
Visualiza os detalhes de um jogo pelo ID.

#### **POST** `/api/game`
Adiciona novos jogos ao sistema.

#### **PATCH** `/api/game/atuaz/{id}`
Atualiza informações específicas de um jogo pelo ID.

#### **DELETE** `/api/game/delete/{id}`
Remove um jogo do sistema pelo ID.

---

## 🖥️ Como Clonar o Projeto

```bash
$ git clone https://github.com/usuario/repo.git
```

Clique no botão abaixo para copiar o comando:

<div style="display: flex; align-items: center; background-color: #2F3136; padding: 16px; border-radius: 6px;">
  <code>$ git clone https://github.com/usuario/repo.git</code>
  <button onclick="navigator.clipboard.writeText('git clone https://github.com/usuario/repo.git')" style="margin-left: 16px; background: none; border: none; cursor: pointer;">
    <img width="20" src="https://img.icons8.com/material-outlined/24/000000/copy.png" alt="copy icon">
  </button>
</div>

---

> **Nota:** Para qualquer dúvida ou contribuição, entre em contato pelo repositório oficial.
