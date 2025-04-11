# 🚀 NASA Explorer

Projeto que consome as APIs públicas da NASA para exibir informações incríveis como:

- 🌌 Imagem do Dia (APOD)
- 🪐 Fotos da superfície de Marte
- ☄️ Asteroides mais próximos da Terra

Este projeto foi desenvolvido com o objetivo de explorar integrações com APIs públicas, praticar Vue.js + Node.js e criar algo visual, educativo e divertido para compartilhar no LinkedIn e como portfólio.

---

### Link para API da NASA 

https://api.nasa.gov/

## 🔧 Tecnologias Utilizadas

### Backend:
- Node.js
- Express.js
- Axios
- Dotenv

### Frontend:
- Vite
- Vue.js 3
- Vue Router
- Fetch API

---

## 📁 Estrutura de Pastas

```
nasa-explorer/
├── .env                # Chave da API da NASA
├── server.js           # Servidor Express
├── routes/
│   ├── apod.js         # Rota da Imagem do Dia
│   ├── mars.js         # Rota das fotos de Marte
│   └── asteroids.js    # Rota dos asteroides
└── nasa-ui/            # Projeto frontend com Vue + Vite
```

---

## ⚙️ Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/vitorperesss/nasa-explorer.git
cd nasa-explorer
```

### 2. Configurar o Backend

Crie um arquivo `.env` na raiz do projeto e adicione sua chave da API da NASA:

```
NASA_API_KEY=sua_chave_aqui
```

Depois instale as dependências e inicie o servidor:

```bash
npm install
node server.js
```

O backend estará rodando em `http://localhost:3000`

---

### 3. Rodar o Frontend

Abra uma nova aba do terminal e vá até a pasta do frontend:

```bash
cd nasa-ui
npm install
npm run dev
```

O frontend estará disponível em `http://localhost:5173`

---

## 📌 Objetivo

Esse projeto foi criado com fins educacionais, de portfólio e conteúdo para redes como o LinkedIn. Ele mostra como integrar APIs públicas usando tecnologias modernas com foco em frontend e backend desacoplados.


Desenvolvido por https://www.linkedin.com/in/vitor-peres-a7817216b/
