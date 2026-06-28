# 🎓 Alunos CRUD

Aplicação Full Stack para gerenciamento de alunos, desenvolvida como projeto de estudo utilizando React no frontend e Node.js no backend.

O sistema permite cadastrar, listar, editar, remover e pesquisar alunos de forma simples.

---

## 📚 Tecnologias utilizadas

### Frontend

- React
- TypeScript
- Vite
- Material UI
- Axios
- TanStack React Query
- React Hook Form
- Zod

### Backend

- Node.js
- Express
- TypeScript
- Prisma ORM
- PostgreSQL
- Docker
- Docker Compose

---

## 📂 Estrutura do projeto

```
alunos-crud/
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── prisma/
│   │   ├── migrations/
│   │   ├── schema.prisma
│   │   └── seed.ts
│   ├── src/
│   ├── docker-compose.yml
│   └── ...
│
└── README.md
```

---

# Funcionalidades

- Cadastro de alunos
- Listagem de alunos
- Pesquisa por nome ou curso
- Atualização de alunos
- Exclusão de alunos
- Paginação
- Validação de formulários

---

# Deploy do projeto

https://alunos-crud.netlify.app/

- backend deploy pelo Render: https://render.com/
- frontend deploy pela Netlify: https://www.netlify.com/

# Como executar o projeto

## Pré-requisitos

- Node.js 20+
- Yarn
- Docker
- Docker Compose

---

# Backend

Entre na pasta:

```bash
cd backend
```

## Instale as dependências

```bash
yarn
```

## Suba o banco de dados

```bash
docker compose up -d
```

## Configure o arquivo `.env`

Exemplo:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/alunos?schema=public"
PORT=3001
```

## Execute as migrations

```bash
yarn prisma migrate dev
```

## Execute a seed

```bash
yarn prisma db seed
```

## Inicie o servidor

```bash
yarn dev
```

Servidor disponível em:

```
http://localhost:3001
```

---

# Frontend

Entre na pasta:

```bash
cd frontend
```

## Instale as dependências

```bash
yarn
```

## Configure o arquivo `.env`

```env
VITE_API_URL=http://localhost:3001/api
```

## Execute

```bash
yarn dev
```

Aplicação disponível em:

```
http://localhost:5173
```

---

# Banco de dados

O projeto utiliza:

- PostgreSQL
- Prisma ORM
- Migrations
- Seed para popular dados iniciais

Sempre que houver alterações no schema execute:

```bash
yarn prisma migrate dev
```

Para visualizar o banco:

```bash
yarn prisma studio
```

---

# API

## Alunos

| Método | Endpoint        | Descrição      |
| ------ | --------------- | -------------- |
| GET    | `/students`     | Lista alunos   |
| GET    | `/students/:id` | Busca um aluno |
| POST   | `/students`     | Cadastra aluno |
| PUT    | `/students/:id` | Atualiza aluno |
| DELETE | `/students/:id` | Remove aluno   |

---

# Scripts

## Backend

```bash
yarn dev             # Desenvolvimento
yarn build           # Build
yarn start           # Produção
yarn prisma studio
yarn prisma generate
yarn prisma migrate dev
yarn prisma db seed
```

## Frontend

```bash
yarn dev
yarn build
yarn preview
```

---

# Tecnologias

Frontend

- React
- TypeScript
- Vite
- Material UI
- Axios

Backend

- Node.js
- Express
- Prisma
- PostgreSQL
- Docker

---

# Autor

Desenvolvido por **Bruna Yumi Nagahashi**

GitHub:

https://github.com/bryumi
