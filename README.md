# Portfólio — Arthur (@oalfinho)

Portfólio moderno para Desenvolvedor de Software & Engenheiro de Dados Jr., construído com React, TypeScript, Tailwind CSS e Vite.

## 🚀 Como executar no VS Code

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- [VS Code](https://code.visualstudio.com/)

### Passo a Passo

1. **Descompacte o arquivo `.zip`** em uma pasta de sua preferência no seu computador.
2. **Abra o VS Code**:
   - Vá em `Arquivo` > `Abrir Pasta...` (ou `File` > `Open Folder...`) e selecione a pasta do projeto descompactado.
3. **Abra o Terminal integrado do VS Code**:
   - Pressione `Ctrl + '` (ou vá no menu superior `Terminal` > `Novo Terminal`).
4. **Instale as dependências**:
   ```bash
   npm install
   ```
5. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
6. **Acesse no navegador**:
   - Abra o link exibido no terminal (geralmente `http://localhost:5173` ou `http://localhost:3000`).

---

## 📁 Estrutura de Pastas

```text
├── index.html               # Ponto de entrada HTML e SEO
├── package.json             # Dependências e scripts
├── tsconfig.json            # Configuração do TypeScript
├── vite.config.ts           # Configuração do Vite e Tailwind
├── src/
│   ├── main.tsx             # Inicialização do React
│   ├── App.tsx              # Componente principal do portfólio
│   ├── index.css            # Estilos globais e fontes
│   ├── assets/
│   │   └── images/          # Imagens do workspace e assets
│   ├── components/
│   │   ├── Navbar.tsx       # Barra de navegação com menu responsivo
│   │   ├── Hero.tsx         # Apresentação inicial, estatísticas e foto
│   │   ├── About.tsx        # Seção Sobre Mim e Áreas de Interesse
│   │   ├── Projects.tsx     # Lista de projetos do GitHub com filtros e busca
│   │   ├── ProjectModal.tsx # Modal de detalhes do projeto
│   │   ├── Resume.tsx       # Seção do Currículo (FATEC, habilidades, exportação PDF)
│   │   ├── Contact.tsx      # Formulário de contato validado e links diretos
│   │   └── Footer.tsx       # Rodapé
│   ├── data/
│   │   └── portfolioData.ts # Dados de projetos, bio, educação e habilidades
│   └── utils/
│       ├── portfolioLogic.ts      # Lógica de filtragem, validação e formulário
│       └── portfolioLogic.test.ts # Testes unitários com node:test
```

---

## 🛠️ Comandos Disponíveis

- `npm run dev`: Inicia o servidor local de desenvolvimento com hot-reload.
- `npm run build`: Gera a versão otimizada para produção na pasta `dist/`.
- `npm run preview`: Visualiza localmente o build de produção.
- `npx tsx --test src/utils/portfolioLogic.test.ts`: Executa a suíte de testes unitários.

---

Feito para **Arthur (@oalfinho)** — FATEC Rio Claro.
