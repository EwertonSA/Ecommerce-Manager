# ECommerce Manager

API para gerenciamento de uma aplicação de comércio eletrônico, construída com
Node.js, TypeScript, Express, Sequelize e PostgreSQL. O projeto está em
desenvolvimento: as rotas abaixo refletem o que está implementado atualmente e
não representam uma API completa.

## Funcionalidades atuais

- Consulta de categorias e produtos.
- Cadastro, login e atualização de usuários, com autenticação por token JWT.
- Painel administrativo em `/admin`, com autenticação para usuários com perfil
  administrativo.
- Persistência em PostgreSQL usando Sequelize, migrations e seeders.

## Requisitos

- Node.js e npm.
- PostgreSQL acessível pela aplicação.

## Configuração local

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Crie seu arquivo de ambiente a partir do exemplo:

   ```bash
   cp .env.example .env
   ```

3. Edite `.env` com os dados do seu ambiente:

   ```dotenv
   DATABASE_URL=postgres://USUARIO:SENHA@HOST:5432/NOME_DO_BANCO
   JWT_SECRET=use-um-segredo-longo-e-aleatorio
   PORT=3000
   ```

   `DATABASE_URL` e `JWT_SECRET` devem ser definidos localmente e nunca enviados
   ao Git. O `PORT` é opcional; quando omitido, a aplicação usa a porta `3000`.
   Se a senha do banco tiver caracteres especiais, codifique-os para uso em uma
   URL.

4. Com o banco criado e acessível, aplique as migrations:

   ```bash
   npx sequelize-cli db:migrate
   ```

   Para carregar os dados de exemplo disponíveis:

   ```bash
   npx sequelize-cli db:seed:all
   ```

5. Inicie a aplicação em modo de desenvolvimento:

   ```bash
   npm run dev
   ```

A API fica disponível em `http://localhost:3000` (ou na porta definida em
`PORT`), e o painel administrativo em `http://localhost:3000/admin`.

## Rotas implementadas

As rotas não possuem um prefixo global de API. Salvo indicação contrária,
substitua `http://localhost:3000` pela URL e porta do ambiente.

| Método | Caminho | Acesso | Descrição |
|---|---|---|---|
| `GET` | `/categories` | Público | Lista categorias. Aceita `page` e `perPage` para paginação. |
| `GET` | `/categories/:id` | Público | Consulta uma categoria e seus produtos. |
| `GET` | `/products` | Token JWT | Lista produtos. |
| `GET` | `/products/selled` | Token JWT | Lista produtos mais vendidos. |
| `GET` | `/products/newest` | Público | Lista os produtos mais recentes. |
| `GET` | `/products/search?name=termo` | Token JWT | Busca produtos pelo nome. Aceita `page` e `perPage`. |
| `GET` | `/products/:id` | Token JWT | Consulta um produto. |
| `POST` | `/auth/register` | Público | Cadastra um usuário. Recebe `name`, `email` e `password` no JSON. |
| `POST` | `/auth/login` | Público | Autentica com `email` e `password`; retorna um token JWT. |
| `GET` | `/users/current` | Token JWT | Consulta o usuário autenticado. |
| `PUT` | `/users/current` | Token JWT | Atualiza `name` e `email` do usuário autenticado. |
| `PUT` | `/users/current/password` | Token JWT | Atualiza a senha usando `currentPassword` e `newPassword`. |

Nas rotas protegidas, envie o token de login no cabeçalho:

```http
Authorization: Bearer <token>
```

O token emitido pelo login tem validade de um dia. A paginação de categorias e
da busca de produtos usa `page` (padrão `1`) e `perPage` (padrão `10`).

## Rotas e módulos ainda em desenvolvimento

O banco e o painel administrativo incluem entidades de pedidos, itens de pedido,
clientes e endereços, mas isso não significa que todas tenham rotas públicas
implementadas. Por enquanto, o roteador da API expõe categorias, produtos,
autenticação e operações sobre o usuário atual. As rotas de criação e
acompanhamento de pedidos, carrinho, clientes e endereços ainda não estão
disponíveis pela API.

## Estrutura do projeto

- `src/controllers`: tratamento das requisições HTTP.
- `src/services`: operações e regras de acesso aos dados.
- `src/models`: modelos Sequelize.
- `src/database/migrations`: estrutura do banco de dados.
- `src/database/seeders`: dados opcionais para desenvolvimento.
- `src/middlewares`: autenticação e outros middlewares.
- `src/adminjs`: configuração do painel administrativo.
- `config/config.json`: configuração não sensível do Sequelize CLI; as
  credenciais são lidas da variável `DATABASE_URL`.

## Segurança e configuração

O arquivo `.env` contém valores locais e está excluído do Git. O arquivo
`.env.example` serve apenas como modelo: substitua os valores de exemplo no seu
`.env`. Nunca inclua senhas, tokens ou outras credenciais em `config.json` ou
em commits.
