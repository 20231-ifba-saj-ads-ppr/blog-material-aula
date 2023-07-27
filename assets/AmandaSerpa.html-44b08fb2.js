import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as o,e as s}from"./app-4c31a572.js";const r={},i=s('<h1 id="padroes-para-serem-usados-em-jogo-de-tabuleiro" tabindex="-1"><a class="header-anchor" href="#padroes-para-serem-usados-em-jogo-de-tabuleiro" aria-hidden="true">#</a> Padrões para serem usados em jogo de tabuleiro</h1><ul><li>Pensando na utilização no jogo SELVA, podemo utilizar os seguintes padrões:</li></ul><h2 id="padroes-criacionais" tabindex="-1"><a class="header-anchor" href="#padroes-criacionais" aria-hidden="true">#</a> Padrões criacionais</h2><ul><li><p><strong>Builder</strong>: O builder permite a produção de diferentes tipos e representações de um objeto usando o mesmo codigo de construção, com isso, podemos utiliza-lo para a criação das peças do jogo e até tabuleiros, definindo as caracteristicas, como a estrutura, as cores e outros componentes que forem necessário.</p></li><li><p><strong>Prototype</strong>: O prototype é utilizado para copiar objetos já existentes, com isso, podemos utiliza-lo para criar copias de peças e até tabuleiros já existentes que foram feitas pelo builder.</p></li></ul><h2 id="padroes-estruturais" tabindex="-1"><a class="header-anchor" href="#padroes-estruturais" aria-hidden="true">#</a> Padrões estruturais</h2><ul><li><p><strong>Facade</strong>: O facade fornece uma interface simples para um framework ou até uma classe mais complexa, com ele vamos mostrar as funcionalidades que os clientes se importam, com essa ideia podemos fazer com que o cliente se comunique com o facade, que irá se comunicar com a classe necessaria para fazer o que o cliente quer, por exemplo, o cliente solicita um jogo que necessita de uma determinada peça, o facade irá se comunicar com o builder e enviar a requisição do cliente para que o builder possa fazer a criação da peça, ele também pode se comunicar com o prototype caso precise do clone de alguma peça ou tabuleiro. A ideia é que ele possa se comunicar com outras classes ou frameworks complexos de acordo com a necessidade do jogador (cliente).</p></li><li><p><strong>Decorator</strong>: O decorator é um padrão que permite adicionar novos comportamentos a um objeto, com ele podemos por exemplo adicionar um novo comportamento a uma peça especifica, a uma peça que possui o método andar(), com o decorator podemos criar uma nova camada nesse comportamento.</p></li></ul><h2 id="padroes-comportamentais" tabindex="-1"><a class="header-anchor" href="#padroes-comportamentais" aria-hidden="true">#</a> Padrões comportamentais</h2><ul><li><p><strong>Template Method</strong>: O template method é um padrão que permite definir o esqueleto de um algoritmo na superclasse, deixando que as subclasses sobrescrevam etapas específicas. Com isso ela pode ser utilizada na criação de jogos de tabuleiro da seguinte forma, como os jogos de tabuleiro tem uma estrutura padrão, podemos usa-la como superclasse, ou seja, como a classe abstrata, que terá a estrutura padrão de um jogo de tabuleiro, mas ainda sim deixando que algumas partes sejam sobrescritas para construir o jogo de tabuleiro deseja, seja qual for.</p></li><li><p><strong>Strategy</strong>: O strategy define uma familia de algoritmos e encapsula cada uma delas, ele permite que o alritmo varie independente do clientes que o utilizam. Com ele podemos definir estratégias para serem utilizadas, no caso de um jogo de tabuleiro, esse padrão pode ser usado para aplicar mais de uma estrategia para uma peça, por exemplo, no jogo selva, a peça rato pode agir de varias formas diferentes, dependendo da casa onde está, com isso poderiamos aplicar o strategy e definir como a peça vai se comportar em cada situação.</p></li><li><p><strong>Chain of Responsability</strong>: Esse padrão permite que você passe as requisições por uma corrente de handlers, quando o pedido chega, cada handler decide se processa o pedido ou passa adiante. No caso de um jogo de tabuleiro poderiamos utilizar esse padrão para repassar algumas requisições, por exemplo, quando o usuario der um new para criar algum jogo de tabuleiro, ele irá chamar o metodo de criação daquele jogo, e dentro disso existem outros metodos que levam por exemplo ao uso de outras classes e padrões, com isso é utilizado uma cadeia de responsabilidades, que passará para o handler que irá passar para quem for o responsavel de resolver o &quot;problema&quot;.</p></li><li><p><strong>Memento</strong>: O memento permite capturar e externalizar um estado interno de um objeto, e depois restaurar o objeto para aquele estado. Quanto a isso num jogo de tabuleiro, podemos utilizar contando com a ideia de pausa durante o jogo, onde na volta do jogo, ele deverá retornar para o mesmo estado que estava no momento da pausa.</p></li></ul>',8),t=[i];function d(u,m){return a(),o("div",null,t)}const n=e(r,[["render",d],["__file","AmandaSerpa.html.vue"]]);export{n as default};
