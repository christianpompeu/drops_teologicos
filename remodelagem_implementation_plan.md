# Remodelagem do Projeto - Portal Eclésia e Teologia

Este documento descreve o plano de implementação para reconstruir a "casca" (interface de usuário) do projeto `drops_teologicos` baseando-se no protótipo "Portal Eclésia e Teologia" do Stitch, utilizando Next.js, Tailwind CSS e shadcn/ui.

## Visão Geral do Design (Glacier - Glassmorphism)

O protótipo tem como guia "Frozen Light" (Luz Congelada), focado em profundidade etérea através de superfícies translúcidas em camadas. A estética é atmosférica e premium.

*   **Cores Principais (Modo Escuro):**
    *   **Background:** Azul marinho profundo/preto (`#0a0e1a`)
    *   **Primary:** Azul gelo para elementos interativos (`#7dd3fc`)
    *   **Tertiary:** Lavanda suave (`#c8a0f0`)
*   **Efeito Glass (Glassmorphism):**
    *   Fundos levemente transparentes (`rgba`) com `backdrop-filter: blur()`.
    *   Bordas sutis translúcidas para simular o vidro.
*   **Tipografia:** Inter (limpa e legível).
*   **Modo Claro:** Como o design original foca no modo escuro, adaptaremos as variáveis para um modo claro que mantenha a sensação de "vidro fosco" (fundo claro gelo, com opacidade e desfoque).

## User Review Required

> [!WARNING]
> **Adaptação para Tailwind v4 e Shadcn:** Atualmente, o shadcn suporta Tailwind v4 de forma preliminar. Como o projeto já usa Tailwind v4 (`@tailwindcss/postcss: ^4`) e a sintaxe moderna (usando `@theme inline` com OKLCH no `globals.css`), adaptarei os componentes para funcionarem de forma otimizada com essa nova versão.

## Open Questions

> [!IMPORTANT]
> 1.  Você gostaria de criar alguma estrutura de rotas (pastas dentro de `app/`) desde já, como `/blog` (Sermões/Blog) ou `/admin` (Gerenciamento de Alunos), ou focaremos primeiro apenas na estilização da Página Inicial (`/`) e nos Layouts/Componentes base?
> 2.  Para as imagens do Unsplash, tem algum termo de busca específico que você prefira (ex: "nature", "church", "abstract light") para usarmos como placeholder nos componentes?

## Proposed Changes

### Configuração de Estilo (Tailwind + Next Themes)

#### [MODIFY] [globals.css](file:///c:/projects/drops_teologicos/app/globals.css)
- Atualizar a paleta de cores no `:root` (Modo Claro) e na classe `.dark` (Modo Escuro) para espelhar a paleta de "Glacier".
- Implementar as variáveis de "glassmorphism" no Tailwind (`--glass-bg`, `--glass-border`, etc) para facilitar o uso.
- Substituir o OKLCH fixo atual por valores correspondentes aos hexadecimais do protótipo (convertidos) ou usar Hex diretamente.

#### [MODIFY] [layout.tsx](file:///c:/projects/drops_teologicos/app/layout.tsx)
- Garantir que a fonte `Inter` está corretamente mapeada no body.
- Certificar-se que o `ThemeProvider` do `next-themes` suporta alternância adequada para nossa nova paleta.

### Componentes Base (shadcn/ui e Layout)

#### [NEW] Componentes Shadcn (`components/ui/`)
- Vamos incorporar (via Shadcn) ou construir os seguintes elementos para a interface:
    *   `Button` (Adaptado para o glassmorphism com estado de foco brilhante)
    *   `Card` (Cartões de vidro fosco com borda luminosa fina)
    *   `Input` (Fundo de vidro, brilho no foco)
    *   `Badge` / `DropdownMenu` / `Separator` (já existentes, mas adaptados ao novo tema).

#### [MODIFY] Componentes de Layout
- Atualizaremos o `Navigation` atual e o `HeroSection` (se já existirem) para abraçar o novo visual premium e translúcido, incluindo o botão de alternância de tema (Claro/Escuro).

## Verification Plan

### Teste Manual
- Subir o projeto (`npm run dev`) e alternar entre Modo Claro e Escuro.
- Verificar se o `backdrop-blur` (glassmorphism) aparece adequadamente nos cartões e navegação.
- Confirmar se o visual geral assemelha-se à proposta de alta qualidade do protótipo Stitch.
