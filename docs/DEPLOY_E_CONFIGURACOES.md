# Deploy, domínio e configurações do site Ascenda

## 1. Rodar localmente no Cursor

Abra a pasta do projeto no Cursor e rode:

```bash
corepack enable
pnpm install
pnpm dev
```

Se o PowerShell do Windows reclamar do `pnpm`, use:

```powershell
corepack enable
npx.cmd pnpm@10.33.4 install
npx.cmd pnpm@10.33.4 dev
```

Acesse:

```txt
http://localhost:3000
```

## 2. Testar build antes de subir

```bash
pnpm typecheck
pnpm build
```

No PowerShell:

```powershell
npx.cmd pnpm@10.33.4 typecheck
npx.cmd pnpm@10.33.4 build
```

## 3. Subir no GitHub

```bash
git status
git add .
git commit -m "Otimiza SEO, performance e integração do formulário"
git branch -M main
git remote -v
```

Se o repositório já estiver conectado:

```bash
git push origin main
```

Se ainda não estiver conectado:

```bash
git remote add origin URL_DO_REPOSITORIO_AQUI
git push -u origin main
```

## 4. Deploy na Vercel

Pelo painel:

1. Acesse Vercel.
2. Clique em **Add New > Project**.
3. Importe o repositório do GitHub.
4. Framework Preset: **Next.js**.
5. Install Command: `corepack enable && pnpm install --frozen-lockfile`.
6. Build Command: `pnpm build`.
7. Output Directory: manter vazio.
8. Adicione as variáveis de ambiente.
9. Clique em **Deploy**.

Pelo terminal, após instalar a Vercel CLI:

```bash
vercel login
vercel link
vercel --prod
```

## 5. Variáveis de ambiente necessárias

```bash
NEXT_PUBLIC_SITE_URL="https://consultoriaascenda.com"
GOOGLE_SHEETS_WEBHOOK_URL="URL_DO_WEB_APP_DO_APPS_SCRIPT"
GOOGLE_SHEETS_WEBHOOK_SECRET="MESMA_CHAVE_DO_APPS_SCRIPT"
```

## 6. Conectar domínio personalizado na Vercel

1. Na Vercel, entre no projeto.
2. Vá em **Settings > Domains**.
3. Adicione `consultoriaascenda.com`.
4. Adicione também `www.consultoriaascenda.com`.
5. A Vercel vai mostrar os registros DNS necessários.
6. No provedor onde o domínio foi comprado, configure:
   - domínio raiz com registro `A` apontando para o IP indicado pela Vercel;
   - subdomínio `www` com registro `CNAME` apontando para o endereço indicado pela Vercel.
7. Aguarde a propagação.
8. Defina uma versão principal do domínio e redirecione a outra para ela.

## 7. Depois que publicar

1. Teste o formulário em produção.
2. Acesse `/robots.txt`.
3. Acesse `/sitemap.xml`.
4. Teste o favicon em aba normal e anônima.
5. Cadastre o domínio no Google Search Console.
6. Envie o sitemap `https://consultoriaascenda.com/sitemap.xml`.
7. Valide os dados estruturados no Rich Results Test do Google.
8. Meça velocidade no PageSpeed Insights.
