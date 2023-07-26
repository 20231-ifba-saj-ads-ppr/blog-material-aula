# Framework de jogo de tabuleiro 

## Padrões de projeto que serão utilizados neste framework:

### Builder
Builder pode ser utilizado para construir objetos complexos de forma incremental, possibilitando a criação de classes que representam partes do jogo, como o tabuleiro, casas, peças, e também configurando as caracteristicas iniciais. 
Este padrão permitirá a construção do tabuleiro de forma flexível e modular, adicionando os componentes conforme necessário.


### Prototype
Prototype pode trabalhar por debaixo dos panos em conjunto com o builder, para evitar a construção repetida de objetos que necessitam ser construídos várias vezes, como as peças de cada jogador no começo do jogo, ou também ser utilizado como mecânica de jogo no conceito de clones de objetos.


### Decorator 
Decorator entra como uma forma de adicionar comportamentos adicionais em partes do jogo, como adicionar um novo comportamento à uma peça ou a uma casa do tabuleiro em casos especificados.


### Facade
Facade atua como um facilitador entre as classes principais e suas funcionalidades, como a criação das peças e a interação com o tabuleiro, melhorando a interação do código cliente com os recursos oferecidos pelo framework.


### State
State é utilizado para definir os estados do jogo, como estado de início, estado de jogo em andamento, estado de finalização e outros estados que serão adicionais através do framework. Isso ajuda a controlar quais ações são permitidas em cada estado.


### Observer
Observer pode ser usado para notificar automaticamente sobre mudanças de objetos. Isso ajuda a definir quando mudar o estado do jogo considerando o contexto das peças.


### Mediator
Mediator se aplica ao verificar se uma ação tomada pelo jogador é válida, permitindo a realização ou rejeitando de acordo com as regas. Ele trabalha em conjunto com o observer, indicando quais ações foram realizadas.


### Iterator
Iterator é útil para percorrer as casas do tabuleiro de forma eficiente, especialmente para validar o estado atual do jogo.


### Command
Command é uma forma de encapsular as solicitações do jogador em objetos de comando, ele trabalha em conjunto com Mediator para simplificar a passagem de comandos.


