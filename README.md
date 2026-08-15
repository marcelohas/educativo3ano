# Estações do Conhecimento

Jogo educacional estático para o 3º ano, organizado como uma rede de metrô. O aluno escolhe uma das nove linhas, conduz por três estações, responde a seis desafios e gera um relatório local.

## Executar

```bash
npm ci
npm run dev
```

Validação completa:

```bash
npm run validate:catalog
npm test
npm run build
```

O build fica em `dist/` e usa a base `/educativo3ano/`. O workflow em `.github/workflows/pages.yml` publica automaticamente o branch `main` no GitHub Pages.

## Privacidade e acessibilidade

Os dados permanecem no navegador e só saem por exportação explícita. O PIN é um portão local contra acesso acidental, não uma autenticação online. O relatório não registra diagnóstico. A aplicação oferece perfil Calmo, texto grande, alto contraste, movimento reduzido, teclado, toque, texto sempre visível e narração somente ao apertar **Ouvir**.

## Conteúdo pedagógico

O catálogo em `public/data/catalog.v1.json` foi elaborado a partir dos tópicos do roteiro fornecido. Cada desafio contém dica, explicação e marcador de aprovação. `npm run validate:catalog` bloqueia catálogos incompletos ou não aprovados. Antes do uso avaliativo, um professor deve revisar formalmente perguntas e respostas.
