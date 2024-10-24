# Sistema de Urna Eletrônica

Este projeto é um sistema de urna eletrônica desenvolvido com TypeScript para gerenciar eleições simultâneas de forma segura e eficiente. Ele oferece suporte para diversos cargos, incluindo presidente, senadores, deputados federais, governador e deputados estaduais. O sistema diferencia eleições majoritárias e proporcionais, assegurando o correto cálculo de eleitos conforme as regras eleitorais aplicáveis.

## Funcionalidades

- **Gerenciamento de Eleições Simultâneas:** Suporte para eleições de múltiplos cargos com diferentes candidatos.
- **Confirmação de Voto:** Exibe as informações do candidato para o eleitor confirmar antes de registrar o voto.
- **Opções de Voto:** Suporte para votos nulos, brancos e válidos.
- **Encerramento de Votação:** A eleição pode ser encerrada manualmente ou automaticamente com base em condições como horário limite ou quando todos os eleitores votarem.
- **Relatórios de Resultados:** Geração de relatórios finais com detalhes de votos válidos, nulos, brancos, eleitores votantes e data/hora de apuração.
- **Diferenciação entre Eleições Majoritárias e Proporcionais:** Cálculo de eleitos baseado em votos válidos para eleições majoritárias ou em proporção de votos para eleições proporcionais.

## Tecnologias Utilizadas

- **Linguagem:** TypeScript
- **Banco de Dados:** SQLite
- **Ferramentas:** Yarn, ESLint, Prettier, Vitest, Husky

## Como Executar o Projeto

### Pré-requisitos

1. **Instale o Yarn** se ainda não estiver instalado:
   ```bash
   npm install --global yarn
   ```
2. **Instale o SQLite** se necessário:
   - Caso esteja utilizando o SQLite localmente, não é necessária instalação manual, ele será gerenciado pelas dependências do projeto.

### Passos para Executar

1. Clone este repositório:
   ```bash
   git clone https://github.com/usuario/nome-do-repositorio.git
   ```
2. Entre no diretório do projeto:
   ```bash
   cd Urn
   ```
3. Instale as dependências:
   ```bash
   yarn
   ```
4. Execute as migrações do banco de dados:
   ```bash
   yarn migrate
   ```
5. Inicie o projeto:
   ```bash
   yarn start
   ```
6. Para rodar os testes:
   ```bash
   yarn test
   ```

## Como Usar

1. **Cadastro de Candidatos e Eleitores:** Administre o cadastro de cargos e candidatos no banco de dados. Certifique-se de configurar o horário limite da votação.
2. **Realização da Votação:** Os eleitores poderão votar diretamente na urna eletrônica, digitando o número do candidato ou optando por votos nulos/brancos.
3. **Finalização da Eleição:** A eleição será encerrada quando todos os eleitores votarem, o horário limite for atingido, ou o presidente da seção encerrar manualmente.
4. **Relatórios de Resultados:** Geração automática de relatórios com os resultados de cada cargo e demais detalhes da votação.

## Estrutura do Projeto

```bash
src/
┣ app/
┃ ┣ candidates/
┃ ┣ urn/
┃ ┣ voters/
┃ ┗ votes/
┣ tests/
.eslintrc.js
.prettierrc
.husky/
.gitignore
.editorconfig
README.md
yarn.lock
```

- **`src/`**: Contém os módulos principais do sistema (candidatos, eleitores, urna, votos).
- **`tests/`**: Testes unitários para validar o comportamento do sistema utilizando Vitest.
- **`.eslint.config.mjs`**: Configuração do ESLint para manter o código limpo e padronizado.
- **`.prettierrc`**: Configuração do Prettier para formatação automática de código.
- **`.husky/`**: Hooks do Git configurados para garantir que o código seja validado antes dos commits.

## Qualidade de Código

- **ESLint:** Ferramenta para manter o código livre de erros de estilo e possíveis bugs. O ESLint é executado automaticamente ao tentar fazer commits.
- **Prettier:** Garante a consistência na formatação do código, sendo aplicado antes dos commits.
- **Vitest:** Utilizado para rodar testes unitários com foco em alta performance.
- **Husky:** Configurado para rodar hooks do Git, executando o ESLint e o Prettier antes de cada commit.

## Testes

Para executar os testes unitários, utilize o comando:
```bash
yarn test
```

Os testes são escritos utilizando o Vitest e cobrem as principais funcionalidades do sistema, garantindo que o comportamento esperado seja mantido conforme o desenvolvimento avança.

## Contribuição

1. Faça um fork deste repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça o push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato

Para maiores informações, entre em contato com [9xerikx6@gmail.com](mailto:9xerikx6@gmail.com).
