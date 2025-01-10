<h1>API de Jogos</h1>
Uma API RESTful construída com Express e TypeScript para gerenciar informações de jogos, incluindo detalhes sobre requisitos de sistema, DLCs e mais.


<h2>Arquitetura do Projeto</h2>

<p>A arquitetura do projeto segue o modelo em camadas, organizando responsabilidades de forma clara. Abaixo está um diagrama representando a estrutura do projeto e a organização dos diretórios:</p>
<br>
<div style="display: flex; align-items: flex-start; gap: 20px;">
  <img src="./doc/Aqr-proj.PNG" alt="Arquitetura de Camadas do Projeto" style="width: 550px;">
  <pre>
src/
├── contracts/     # Interfaces para contratos entre camadas
├── controllers/   # Manipuladores de requisições
├── repositories/  # Acesso a dados
├── services/      # Lógica de negócios
├── utils/         # Funções auxiliares
├── app.ts         # Configuração do Express
├── routes.ts      # Rotas da API
└── server.ts      # Ponto de entrada do servidor
  </pre>
</div>



## 🛠 Tecnologias

<div align="center">
  <img src="https://img.shields.io/badge/TypeScript-2F3136?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Express.js-2F3136?style=for-the-badge&logo=express" alt="Express.js">
  <img src="https://img.shields.io/badge/Node.js-2F3136?style=for-the-badge&logo=node.js" alt="Node.js">
  <img src="https://img.shields.io/badge/CORS-2F3136?style=for-the-badge" alt="CORS">
</div>

## 🔧 Dependências de Desenvolvimento

<div align="center">
  <img src="https://img.shields.io/badge/TypeScript-2F3136?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/TSX-2F3136?style=for-the-badge&logo=react" alt="TSX">
  <img src="https://img.shields.io/badge/TSUP-2F3136?style=for-the-badge&logo=typescript" alt="TSUP">
</div>


<br>
<h1>Endpoints da API</h1>

<p align="center">Exemplo de Requisições usando Thunder Client:</p>
<div align="center" style="display: flex; justify-content: center; align-items: center; gap: 20px;">
  <img src="./doc/Req-methods.PNG" alt="Endpoints da API" style="width: 300px;">
  <div>
    <p style="margin: 15px 5px; text-align: left;"><strong>GET</strong> <code>/api/game</code><br>
      Recupera todos os jogos.</p>
    <p style="margin: 15px 5px; text-align: left;"><strong>GET</strong> <code>/api/game/{id}</code><br>
      Recupera um jogo específico pelo ID.</p>
    <p style="margin: 15px 5px; text-align: left;"><strong>GET</strong> <code>/api/game/Detail/{id}</code><br>
      Visualiza os detalhes de um jogo pelo ID.</p>
    <p style="margin: 15px 5px; text-align: left;"><strong>POST</strong> <code>/api/game</code><br>
      Adiciona novos jogos ao sistema.</p>
    <p style="margin: 15px 5px; text-align: left;"><strong>PATCH</strong> <code>/api/game/atuaz/{id}</code><br>
      Atualiza informações específicas de um jogo pelo ID.</p>
    <p style="margin: 15px 5px; text-align: left;"><strong>DELETE</strong> <code>/api/game/delete/{id}</code><br>
      Remove um jogo do sistema pelo ID.</p>
  </div>
</div>
<br><br>
<div style="display: flex; align-items: center; justify-content: center; padding: 20px;">
  <div style="background-color: #2F3136; padding: 16px; border-radius: 6px; display: flex; align-items: center;">
    <code>$ git clone https://github.com/usuario/repo.git</code>
    <button onclick="navigator.clipboard.writeText('git clone https://github.com/usuario/repo.git')" style="margin-left: 16px; background: none; border: none; cursor: pointer;">
      <img width="20" src="https://img.icons8.com/material-outlined/24/000000/copy.png" alt="copy icon">
    </button>
  </div>
</div>
