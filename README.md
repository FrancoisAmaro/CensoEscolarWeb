# Censo Escolar PB - Top 10 Instituições de Ensino

Projeto desenvolvido para a disciplina de Programação Web 1 no Instituto Federal da Paraíba (IFPB), Campus Guarabira, no ano de 2026.

A proposta do trabalho é criar uma aplicação web interativa que exibe o ranking das 10 maiores instituições de ensino do estado da Paraíba com base no número total de matrículas ativas, utilizando dados oficiais do Censo Escolar da Educação Básica (INEP).

## Informações Acadêmicas

- **Instituição:** Instituto Federal da Paraíba (IFPB) - Campus Guarabira
- **Curso:** Tecnologia em Sistemas para Internet (TSI)
- **Disciplina:** Programação Web 1
- **Professor:** Rhavy Maia Guedes
- **Aluno:** François de Araújo Amaro
- **GitHub:** https://github.com/FrancoisAmaro

## Tecnologias Utilizadas

- HTML5 e CSS3
- Bootstrap 5 (estilização e componentes de interface)
- JavaScript puro / ES6+ (consumo assíncrono via Fetch API e manipulação do DOM)
- Python 3 com biblioteca Pandas (tratamento, filtragem e extração do CSV para JSON)
- Fonte de Dados: Microdados do Censo Escolar (INEP)

## Estrutura do Projeto

- index.html: Página inicial com apresentação geral e carrossel de imagens.
- instituicoes.html: Página que renderiza a tabela com o ranking estadual.
- src/js/ranking.js: Script responsável por ler os dados e montar a tabela dinamicamente.
- src/datasets/instituicoes_pb.json: Base de dados estruturada das escolas da Paraíba.
- src/img/: Imagens e ativos visuais do projeto.

## Como Executar

1. Abra o terminal na pasta do projeto:
cd ~/Projetos/CensoEscolarWeb

2. Inicie o servidor local nativo do Python:
python3 -m http.server 8000

3. Abra o navegador e acesse:
http://localhost:8000