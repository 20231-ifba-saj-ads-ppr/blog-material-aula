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
Facade atua como um facilitador entre as classes principais e suas funcionalidades, melhorando a interação do código cliente com os recursos oferecidos pelo framework.


