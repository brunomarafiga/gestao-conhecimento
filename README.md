<div align="center">

# 🧠 Plataforma de Gestão do Conhecimento
### Curso de Gestão da Informação • UFPR

**Hub Interativo de Recursos, Curadoria Epistêmica e Fontes Especializadas em Ciência e Gestão da Informação**

[![Tech](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20JS-F7DF1E?logo=javascript&logoColor=black)](#-tecnologias-utilizadas)
[![Framework](https://img.shields.io/badge/UI-Alpine.js%20%26%20Materialize-blue)](#-tecnologias-utilizadas)
[![Instituição](https://img.shields.io/badge/UFPR-Gest%C3%A3o%20da%20Informa%C3%A7%C3%A3o-004587)](https://www.ufpr.br)
[![Licença](https://img.shields.io/badge/License-GPL--3.0-blue.svg)](LICENSE)

</div>

---

## 📌 Visão Geral

A **Plataforma de Gestão do Conhecimento** é uma aplicação web desenvolvida para atuar como repositório dinâmico e centralizador de ativos de conhecimento para discentes, docentes e profissionais da área de **Gestão da Informação** da Universidade Federal do Paraná (UFPR).

A ferramenta organiza, estrutura e dissemina recursos educacionais fundamentais (livros, podcasts, canais de comunicação científica, periódicos e portais de governança de dados), aplicando na prática os preceitos de **arquitetura da informação**, **recuperação de informação (IR)** e **compartilhamento do conhecimento organizacional**.

---

## ✨ Funcionalidades

- **🗂️ Curadoria Taxonômica:** Divisão de conteúdo em categorias claras via JSON (`categorias.json`), permitindo expansão modular sem alterar o código-fonte da aplicação.
- **🔍 Busca Reativa:** Localização instantânea de títulos, autores e descrições utilizando **Alpine.js**.
- **📑 Cards Informativos:** Exibição elegante com sinopse, capa original do recurso, metadados e link direto para acesso externo.
- **📱 Interface Responsiva:** Estilização baseada em **Materialize CSS**, garantindo fluidez tanto em desktops quanto em dispositivos móveis.
- **⚡ 100% Client-Side:** Execução direta no navegador sem necessidade de servidor backend complexo.

---

## 📂 Categorias Estruturadas

O acervo reúne referências consolidadas do mercado e da academia:

| Categoria | Descrição | Exemplos em Destaque |
|---|---|---|
| 📚 **Livros de Referência** | Obras essenciais de Ciência de Dados, Storytelling, Big Data e Gestão Visual. | *Data Science for Business*, *Storytelling with Data*, *Big Data no Trabalho* |
| 🎙️ **Podcasts Especializados** | Discussões com pesquisadores e líderes de tecnologia. | *Pizza de Dados*, *CTRL ENTER (IDP)*, *Consciência e Informação* |
| 📺 **Canais Audiovisuais** | Canais com foco em governança de dados, documentação e metodologias ágeis. | *ProjectManager*, *IRMS (Records Management)*, *Paperless Movement* |
| 🌐 **Portais & Bases Científicas** | Repositórios de artigos e diretrizes de dados abertos. | *Brapci*, *Portal de Periódicos CAPES*, *FAPESP Gestão de Dados*, *IPEA* |

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico:** Estruturação acessível orientada a conteúdo.
- **CSS3 Personalizado & Materialize CSS:** Grid responsivo, cards de elevação e componentes visuais modernos.
- **Alpine.js:** Framework minimalista e reativo para controle do estado da busca e renderização condicional.
- **FontAwesome:** Iconografia para identificação visual rápida de mídias.
- **JSON:** Camada de dados desacoplada (`categorias.json`).

---

## 🚀 Como Executar Localmente

### 1. Clonar o Repositório
```bash
git clone https://github.com/brunomarafiga/gestao-conhecimento.git
cd gestao-conhecimento
```

### 2. Abrir no Navegador
Por consumir dados via `fetch('categorias.json')`, recomenda-se abrir via um servidor estático local para evitar restrições de CORS:

```bash
# Com Python 3:
python -m http.server 8000

# Ou com Node.js (npx):
npx serve .
```

Acesse em seu navegador: `http://localhost:8000`

---

## 🤝 Como Contribuir com Novos Recursos

1. Faça um Fork do projeto.
2. Edite o arquivo [`categorias.json`](categorias.json) inserindo o novo registro no padrão:
```json
{
  "titulo": "Nome do Recurso",
  "autor": "Nome do Autor / Produtor",
  "descricao": "Breve sinopse do conteúdo.",
  "capa": "https://url-da-imagem.jpg",
  "link": "https://link-oficial.com"
}
```
3. Abra um Pull Request detalhando a relevância do recurso adicionado.

---

<div align="center">
Desenvolvido por <strong>Bruno Marafiga</strong><br>
Curso de Gestão da Informação • Universidade Federal do Paraná (UFPR)
</div>
