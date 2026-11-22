# Censo Escolar PB - Top 10 Instituições de Ensino

Projeto desenvolvido para a disciplina de Programação Web 1 no Instituto Federal da Paraíba (IFPB), Campus Guarabira, no ano de 2026.

A proposta do trabalho é criar uma aplicação web interativa em React que exibe o ranking das 10 maiores instituições de ensino do estado da Paraíba com base no número total de matrículas ativas, utilizando dados oficiais do Censo Escolar da Educação Básica (INEP).

## Repositórios do Projeto

- **Frontend (Aplicação Web):** https://github.com/FrancoisAmaro/CensoEscolarWeb
- **Processamento de Dados (Python):** https://github.com/FrancoisAmaro/CensoEscolarDataApp

## Informações Acadêmicas

- **Instituição:** Instituto Federal da Paraíba (IFPB) - Campus Guarabira
- **Curso:** Tecnologia em Sistemas para Internet (TSI)
- **Disciplina:** Programação Web 1
- **Professor:** Rhavy Maia Guedes
- **Aluno:** François de Araújo Amaro
- **GitHub do Aluno:** https://github.com/FrancoisAmaro

## Tecnologias Utilizadas

- **React (Vite):** Estruturação da interface em componentes reutilizáveis e gerenciamento de navegação por estado.
- **Bootstrap 5:** Estilização responsiva, carrossel e componentes de interface.
- **JavaScript (ES6+):** Renderização dinâmica das tabelas e formatação numérica.
- **Python 3 com biblioteca Pandas:** Tratamento, filtragem e extração do CSV para JSON no repositório de dados.
- **Fonte de Dados:** Microdados do Censo Escolar (INEP).

## Estrutura do Projeto

- `index.html`: Ponto de entrada HTML da aplicação Vite com importação do Bootstrap 5.
- `src/App.jsx`: Componente raiz que gerencia a navegação entre a página inicial e o ranking.
- `src/components/Navbar.jsx`: Barra de navegação superior em vermelho (`Censo Escolar PB`).
- `src/components/Home.jsx`: Página inicial com o carrossel de 6 imagens e os cartões informativos.
- `src/components/Instituicoes.jsx`: Página que renderiza a tabela com o ranking estadual e o detalhamento por modalidade.
- `src/datasets/instituicoes_pb.json`: Base de dados estruturada das escolas da Paraíba.
- `public/img/`: Imagens e ativos visuais do carrossel.

## Como Executar

1. Abra o terminal na pasta do projeto:
   ```bash
   cd ~/Projetos/CensoEscolarWeb
   ```

2. Instale as dependências do Node/React:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento do Vite:
   ```bash
   npm run dev
   ```

4. Abra o navegador e acesse:
   http://localhost:5173