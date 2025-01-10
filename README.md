# API de Jogos

Uma API RESTful construída com **Express** e **TypeScript** para gerenciar informações de jogos, incluindo detalhes sobre requisitos de sistema, DLCs e mais.

---

## Arquitetura do Projeto

A arquitetura do projeto segue o modelo em camadas, organizando responsabilidades de forma clara. Abaixo está uma visão da estrutura do projeto e organização dos diretórios:

![Arquitetura do Projeto](./doc/Aqr-proj.PNG)

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

![Endpoints da API](./doc/Req-methods.PNG)

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
$ git clone https://github.com/Vitor-DBelo/ApiJogos.git
```

