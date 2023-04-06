# Bem-vindo ao projeto Trybetunes

Trybetunes é uma aplicação desenvolvida em React.js que acessa uma API do iTunes e cria um ambiente em que o usuário pode pesquisar músicas, ouvir uma prévia e favoritar suas músicas preferidas.
> 
> - Veja o post sobre a aplicação [no LinkedIn aqui.](https://www.linkedin.com/posts/samuelcovalero_frontend-vqv-soutryber-activity-6983546143657848832-u8ap?utm_source=share&utm_medium=member_desktop)
> - Acesse o [deploy da aplicação aqui](https://project-tryetunes.vercel.app/)
<details>
<summary>Informações para utilizar a aplicação no deploy</summary><br>
 
 - Para logar, o nome de usuário deve ter, no mínimo, `3 caracteres`.
 
</details>

## Sumário
- [Bem-vindo ao projeto Trybetunes](#bem-vindo-ao-projeto-trybetunes)
- [Visualização](#visualização)
- [Sumário](#sumário)
- [Contexto](#contexto)
- [Tecnologias e Ferramentas Utilizadas](#tecnologias-e-ferramentas-utilizadas)
- [Instalação e Execução](#instalação-e-execução)
- [Notas](#notas)
 - [Git, GitHub e Histórico de Commits](#git-github-e-histórico-de-commits)
 - [Lint](#lint)

## Visualização

<!-- ### Visualização para mobile e mac

[![Preview for mobile and mac](https://img.youtube.com/vi/vjACBaMAbc8/0.jpg)](https://www.youtube.com/watch?v=vjACBaMAbc8)

https://user-images.githubusercontent.com/98184355/220769604-2292f905-9bf2-48bf-a664-02d51c2c51cc.mp4 -->

<div align="center">
 
![trybetunes](https://user-images.githubusercontent.com/98184355/230430919-e1e5a913-b8c7-482f-a40e-139796f13d2e.gif)

</div>

## Contexto
O __aplicativo Trybetunes__ permite que o usuário:
 - Pesquise músicas pelo nome do artista e receba informações sobre os álbuns disponíveis.
 - Ouça uma prévia da música.
 - Adicione e remova músicas favoritas.
 - Acesse o perfil do usuário e altere suas informações.

*A pasta de serviços foi fornecida pela Trybe para que a solicitação à API pudesse ser executada*.

## Tecnologias e Ferramentas Utilizadas
Este projeto utilizou as seguintes tecnologias e ferramentas:
  - [React.js com classes](https://reactjs.org/docs/getting-started.html) | Biblioteca para criar interfaces de usuário.
  - [Styled Components](https://styled-components.com/) | Biblioteca para estilização do CSS.
  - [API do iTunes](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html#//apple_ref/doc/uid/TP40017632-CH3-SW1) | API utilizada para obter informações sobre os artistas e suas músicas.

  O React.js foi escolhido porque é uma das bibliotecas mais populares e amplamente utilizadas para criar interfaces de usuário. Além disso, ele oferece suporte a programação orientada a objetos, o que é importante para o desenvolvimento de projetos maiores. Já o Styled Components foi escolhido porque permite que os desenvolvedores escrevam o CSS em formato de componente, o que torna o código mais legível e fácil de entender. A API do iTunes foi utilizada para obter informações sobre os artistas e suas músicas, e fornece informações precisas e detalhadas.

## Instalação e Execução
### Download do projeto
```
git clone git@github.com:imsamuelcovalero/Project-Trybetunes.git
```
### Install dependencies
```
cd Project-Trybetunes
npm install
```
### Run the application
```
cd Project-Trybetunes
npm start
```

## Notas
### Git, GitHub e Histórico de Commits
Este projeto utilizou a [Especificação de Commits Convencionais](https://www.conventionalcommits.org/en/v1.0.0/), com alguns tipos da [convenção Angular](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines). Além disso, foi utilizado o pacote [conventional-commit-cli](https://www.npmjs.com/package/conventional-commit-cli) para ajudar a seguir a convenção de commits. É importante utilizar a convenção de commits em projetos para manter o histórico de commits organizado e facilitar a leitura e o entendimento do que foi desenvolvido.

### Lint
- O projeto foi desenvolvido seguindo os padrões de Clean Code especificados pelo [Lint da Trybe](https://github.com/betrybe/eslint-config-trybe).
