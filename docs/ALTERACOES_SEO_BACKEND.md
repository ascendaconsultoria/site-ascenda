# Alterações aplicadas nesta versão

## Copies solicitadas

- Badge principal atualizado para: "Marketing, vendas e tecnologia para empresas em todo o Brasil".
- Subtítulo principal atualizado para: "Estruturamos o crescimento da sua empresa conectando marketing, vendas e tecnologia em uma operação mais estratégica, mensurável e preparada para escalar.".
- Título da seção de dor mantido com a mesma copy, mas estruturado em duas linhas no código.
- Texto da seção de equipe atualizado para: "O Ascenda foi criado para ajudar empresas a venderem mais, organizarem seus processos e tomarem decisões com mais clareza.".
- FAQ atualizado com as duas novas perguntas e respostas solicitadas.

## SEO técnico e backend

- `lib/site-config.ts` reestruturado para equilibrar posicionamento nacional com sinais locais.
- `app/layout.tsx` recebeu metadata mais forte para marketing, vendas, tecnologia, consultoria empresarial, presença nacional e sinais locais.
- `components/structured-data.tsx` foi reforçado com dados estruturados para Organization, LocalBusiness, ProfessionalService, WebSite, WebPage, FAQPage, BreadcrumbList, SiteNavigationElement e lista de serviços.
- `app/sitemap.ts` passou a incluir a home e uma página local estratégica para SEO.
- Adicionada a página `/agencia-de-marketing-artur-nogueira`, sem alterar a comunicação principal da home.
- `next.config.mjs` recebeu headers adicionais de segurança e cache para assets estáticos, sitemap e robots.

## Observação estratégica

A home preserva posicionamento nacional. Os sinais locais entram principalmente em metadata, dados estruturados, sitemap e página local dedicada, evitando que a copy principal faça o Ascenda parecer limitado a Artur Nogueira.
