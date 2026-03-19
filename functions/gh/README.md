# GitHub Raw Proxy (Cloudflare Pages Function)

Esta função permite acessar arquivos públicos do GitHub através do seu próprio domínio, de forma simples, rápida e com cache na edge da Cloudflare.

---

## Exemplo de uso

### URL pública:

```
https://fabioassuncao.com/gh/{repo}/{path}
```

### Exemplos reais:

```bash
https://fabioassuncao.com/gh/imgtool/imgtool.sh
```

```bash
https://fabioassuncao.com/gh/agent-skills/scripts/ralph/ralph.sh
```

---

## Com branch personalizada

Você pode especificar a branch usando `@`:

```bash
https://fabioassuncao.com/gh/{repo}@{branch}/{path}
```

### Exemplo:

```bash
https://fabioassuncao.com/gh/agent-skills@dev/scripts/ralph/ralph.sh
```

---

## Como funciona

A função intercepta requisições em:

```
/gh/*
```

E transforma automaticamente em:

```
https://raw.githubusercontent.com/{user}/{repo}/{branch}/{path}
```

Por padrão:

- `user`: `fabioassuncao`
- `branch`: `main`

---

## Fallback automático

Caso a branch `main` não exista:

tenta automaticamente:

```
master
```

---

## Cache e performance

- Cache na edge da Cloudflare (1 hora)
- Cache no navegador
- Redução de requisições ao GitHub
- Respostas mais rápidas para scripts (`curl`, `wget`, etc.)

---

## Estrutura do projeto

Crie o arquivo:

```
/functions/gh/[...path].ts
```

---

## Casos de uso

- Distribuição de scripts (`bash`, `sh`, `js`)
- Automação de setup (`curl | bash`)
- Versionamento via GitHub
- CDN simples para arquivos públicos
- Integração com agentes e workflows automatizados

---

## Validações

- Nome do repositório validado
- Proteção básica contra inputs inválidos
- Retorna `400` para requests malformadas
- Retorna `404` se arquivo não existir

---

## Tecnologias

- Cloudflare Pages Functions
- GitHub Raw Content
- Edge Runtime

---

## Possíveis melhorias

- Suporte a múltiplos usuários (`/gh/{user}/{repo}`)
- Suporte a releases (`@latest`, tags)
- Autenticação para repositórios privados
- Logging / analytics de downloads
- Versionamento inteligente com cache bust

---

## Observações

- Apenas repositórios públicos são suportados
- A branch padrão considerada é `main`
- Para compatibilidade com projetos antigos, há fallback para `master`
