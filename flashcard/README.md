## Flash-Card
---

"Flash card é um método de estudo que consiste em fazer revisões periódicas de conteúdos através de perguntas sobre um determinado assunto."

---

Dando continuidade ao flash card, segunda parte de desenvolvimento da aplicação implementei o **Routes** com o **React**, desta forma foi possível criar novas páginas. 

Página de Login:

- Na página de login implementei o input para que o usuário possa preencher seu nome antes de iniciar o jogo. Ao Clicar no botão “iniciar” o jogador é redirecionado para página principal, onde será possível visualizar seu nome, os card e a pontuação.

Passando informações novas para página principal:

- Para ser possível passa armazenar e passar o nome do usuário de uma para outra tela foi utilizado o hook useLocation do React, que me permitiu enviar a informação necessária pela tag Link que foi colocada no botão.

Página NotFound:

- Ao tentar acessar uma tela inexistente o usuário é redirecionado para a tela de NotFound, indicando que aquela tela não existe.


## Para usar a aplicação localmente

Para usar a aplicação é só clonar, dar npm install para instalar as dependências e npm start para abri a aplicação.
 
