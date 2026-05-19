# Parecer técnico - Site Ascenda

## Correções desta versão

- Favicon atualizado com o logo preto e dourado em fundo transparente.
- Foto do card de Alisson Almeida substituída por arquivo local em `public/alisson-almeida.png`.
- Bug visual da linha no hover dos cards da equipe corrigido com:
  - remoção de artefato entre imagem e conteúdo;
  - sobreposição de segurança entre bloco da foto e bloco de texto;
  - gradiente ajustado com `-bottom-px`;
  - bloco de conteúdo com `-mt-px` e pseudo-elemento de cobertura no topo.
- SEO local reforçado para Artur Nogueira/SP, região de Campinas e interior de SP.
- Metadados centralizados em `lib/site-config.ts`.
- Estrutura de `metadata`, `robots.ts`, `sitemap.ts`, `manifest.ts` e JSON-LD revisada.
- FAQ visível atualizada para conversar melhor com buscas locais sobre marketing, vendas, CRM e tecnologia.
- Dados estruturados adicionados/otimizados:
  - LocalBusiness
  - ProfessionalService
  - Organization
  - WebSite
  - FAQPage
  - BreadcrumbList

## Parecer

A estrutura técnica está bem mais forte do que uma landing page comum gerada por ferramenta visual. O site agora tem uma base correta para indexação local: título com intenção de busca, descrição local, conteúdo visível com termos de serviço, FAQ local, sitemap, robots, manifest, Open Graph e dados estruturados.

O ponto mais importante: SEO não é só código. Para disputar primeiro lugar localmente em Artur Nogueira e região, o código precisa estar alinhado com:

1. Google Search Console ativo.
2. Google Business Profile bem preenchido.
3. Nome, telefone, e-mail e cidade consistentes em todos os canais.
4. Conteúdo futuro com páginas específicas para serviços.
5. Backlinks e citações locais.
6. Reviews reais no Google.
7. Velocidade, mobile e estabilidade visual.

## Próximas melhorias recomendadas

Para SEO local mais forte, a próxima etapa ideal é criar páginas individuais, por exemplo:

- `/agencia-de-marketing-artur-nogueira`
- `/consultoria-de-marketing-artur-nogueira`
- `/consultoria-comercial-artur-nogueira`
- `/trafego-pago-artur-nogueira`
- `/crm-e-automacoes-artur-nogueira`

Isso tende a ser mais forte do que tentar ranquear tudo em uma única página inicial.
