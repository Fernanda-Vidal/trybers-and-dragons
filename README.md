## Trybers and Dragons

Projeto desenvolvido no módulo de Back-end do curso de Desenvolvimento Web da [Trybe](https://www.betrybe.com/). 

## Sobre o projeto

<div align="justify">
Trybers & Dragons é uma aplicação que simula a estrutura de jogos de interpretação de papéis, mais conhecidos como jogos de RPG (Role Playing Game), aplicando os princípios de arquitetura SOLID e o paradiga POO (programação orientada a objetos).
</div>

## Desenvolvimento 

<div align="justify">
Projeto foi realizado em Typescrip, onde foi necessária a criação de classes e interfaces, buscando aplicar conceitos como abstração, encapsulamento, herança, composição e polimorfismo pertencentes à `POO`, bem como responsabilidade única, aberto/fechado, inversão de dependência, substituição de Liskov e segregação de interfaces, do `SOLID`.
</div>

## Tecnologias

* Typescript
* Docker

## Como rodar o projeto com Docker

1 - Navegue até a pasta desejada e rode o comando abaixo no terminal para clonar o projeto:

`git clone git@github.com:Fernanda-Vidal/trybers-and-dragons.git`

2 - Entre na pasta desejada:

`cd trybers-and-dragons`

3 - Rode o serviço node com o seguinte comando:

`docker-compose up -d --build`

4 - Acesse o bash do container:

`docker exec -it trybers_and_dragons bash`

5 - Instale as dependências do projeto e rode a aplicação:

`npm install && npm start`

