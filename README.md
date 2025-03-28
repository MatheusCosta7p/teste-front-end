# Frontend Econverse Teste

Este é o projeto desenvolvido como parte do teste para a vaga de desenvolvedor frontend.

## Tecnologias Usadas

- **React** com **TypeScript**: Biblioteca JavaScript para construção da interface do usuário com tipagem estática.
- **Sass**: Pré-processador CSS para facilitar a escrita de estilos com variáveis, aninhamento e outros recursos.
- **React Query**: Biblioteca para gerenciamento de estado de dados assíncronos, facilitando o fetch, cache, e sincronização com a API.
- **useContext**: Hook do React para compartilhar estados e funções entre componentes, sem a necessidade de props.

## Como Rodar o Projeto

### Requisitos

- **Node.js** (versão recomendada: 16.x ou superior)
- **npm** ou **yarn** (gerenciadores de pacotes)

### Passos para Rodar Localmente

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/MatheusCosta7p/teste-front-end
   cd teste-front-end
   ```

2. **Instale as dependências:**
    ```bash
    npm install
    ou, se preferir yarn:
    yarn install
    ```

3. **Para rodar o projeto em desenvolvimento:**
    ```bash
    npm run dev
    ou, se preferir yarn:
    yarn dev
    ```

4. **Abra o navegador e acesse a seguinte URL:**

   [http://localhost:5173/teste-front-end/](http://localhost:5173/teste-front-end/)



### Metodologia de Desenvolvimento

Durante o desenvolvimento do projeto, acabei utilizando a metodologia **Kanban** no **GitHub Projects** para organizar as tarefas onde foram divididas em três colunas principais:

- **To Do**: Tarefas que ainda precisam ser realizadas.
- **Doing**: Tarefas que estão sendo trabalhadas atualmente.
- **Done**: Tarefas que já foram concluídas.

Esse processo me ajudou a visualizar claramente o progresso do projeto e me permitir gerenciar melhor o tempo de desenvolvimento.

Aqui está uma captura de tela do quadro Kanban do GitHub:

![Kanban Board](https://github.com/user-attachments/assets/385d6efd-dcde-437a-a08b-352eacf49e97)

### Gerenciamento de Branches

O desenvolvimento foi realizado utilizando **três branches** principais:

- **`dev`**: Onde foram feitas as implementações de novas features e melhorias. Cada nova funcionalidade foi desenvolvida em uma branch separada e, após concluída, foi enviada para a branch `dev`.
  
- **`main`**: A branch principal, onde as funcionalidades testadas e aprovadas na `dev` foram integradas por meio de **merge**.

- **`gh-pages`**: Essa branch é utilizada para hospedar a versão estática do projeto no GitHub Pages. Após a aprovação das funcionalidades na branch `main`, os arquivos necessários para a publicação são enviados para a branch `gh-pages`, permitindo que o projeto seja acessado por meio de uma URL pública.

Esse fluxo de trabalho garantiu que o desenvolvimento das novas funcionalidades não interferisse diretamente na versão estável do projeto, mantendo uma estrutura limpa e organizada.


### Link do Projeto em Deploy

Deploy do projeto feito apartir do Github Pages com Github Action:

[Link para o Projeto em Deploy](https://matheuscosta7p.github.io/teste-front-end/)
