# ig.news

ig.news é uma aplicação desenvolvida durante o Chapter III da trilha de ReactJS do Ignite. É uma plataforma paga de conteúdo e notícias sobre React que utiliza o Prismic CMS, FaunaDB e Stripe.

<p align="center">
  <img src="https://user-images.githubusercontent.com/26419930/126851651-00c4edc7-ae46-4bfe-afbd-99204bb15f4a.png" alt="ig.news"/>
</p>

## Execução

1. Clone o repositório

```sh
git clone https://github.com/abigailarruda/ignews.git
```

2. Crie um arquivo <code>.env.local</code> na raiz do projeto, utilizando o exemplo a seguir:

```bash
# Stripe
STRIPE_API_KEY= # Chave do Stripe, disponível em Developers > API keys > Secret key
STRIPE_WEBHOOK_SECRET= # Chave do Stripe, disponível ao executar o Stripe CLI
NEXT_PUBLIC_STRIPE_PUBLIC_KEY= # Chave do Stripe, disponível em Developers > API keys > Publishable key
STRIPE_SUCCESS_URL=http://localhost:3000/posts
STRIPE_CANCEL_URL=http://localhost:3000

# GitHub
GITHUB_CLIENT_ID= # Chave do GitHub, disponível em Settings > Developers Settings > OAuth Apps > New OAuth App
GITHUB_CLIENT_SECRET= # Chave do GitHub, disponível em Settings > Developers Settings > OAuth Apps > New OAuth App

# FaunaDB
FAUNADB_KEY= # Chave do FaunaDB, disponível em Security > Keys > New key

# Prismic CMS
PRISMIC_ACCESS_TOKEN= # Chave do Prismic, disponível em Settings > API & Security > Permanent access tokens
PRISMIC_ENDPOINT= # Endereço disponível no Prismic em Settings > API & Security > API endpoint
```

3. Instale as dependências

```sh
yarn
```

4. Execute a aplicação

```sh
yarn dev
```
