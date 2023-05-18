import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-bb17b443.js";const o={},t=e(`<h1 id="prototype-gof" tabindex="-1"><a class="header-anchor" href="#prototype-gof" aria-hidden="true">#</a> Prototype (GOF)</h1><h2 id="intencao" tabindex="-1"><a class="header-anchor" href="#intencao" aria-hidden="true">#</a> Intenção</h2><p>Especificar os tipos de objetos a serem criados usando uma instância-protótipo e criar novos objetos pela cópia desse protótipo.</p><h2 id="tambem-conhecido-como" tabindex="-1"><a class="header-anchor" href="#tambem-conhecido-como" aria-hidden="true">#</a> Também conhecido como</h2><p>Clone ou clonagem de objetos.</p><h2 id="motivacao" tabindex="-1"><a class="header-anchor" href="#motivacao" aria-hidden="true">#</a> Motivação</h2><p>É possível construir um editor para partituras musicais, customizando um framework geral para editores gráficos, acrescentando novos objetos que representam notas, pausas e pentagramas. O editor poderia conter:</p><ul><li>Uma paleta de ferramentas para acrescentar esses objetos de música à partitura.</li><li>A paleta incluiria ferramentas para: <ul><li>Selecionar</li><li>Mover</li><li>Manipular objetos de outras formas</li></ul></li></ul><p>O usuário poderia:</p><ul><li>Adicionar semínimas em partituras</li><li>Mover notas para cima ou para baixo</li></ul><p>Criação da classe abstrata Graphic para componentes gráficos. Com os métodos draw() para desenhar componentes gráficos e clone() para clonar o componente gráfico.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Graphic</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token class-name">Graphic</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Criação da subclasse concreta de Graphic para as notas musicais. Com o método construtor Note() e os métodos herdados da classe Graphic.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Note</span> <span class="token keyword">extends</span> <span class="token class-name">Graphic</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> pitch<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> duration<span class="token punctuation">;</span>
   
    <span class="token keyword">public</span> <span class="token class-name">Note</span><span class="token punctuation">(</span><span class="token class-name">String</span> pitch<span class="token punctuation">,</span> <span class="token keyword">int</span> duration<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pitch <span class="token operator">=</span> pitch<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>duration <span class="token operator">=</span> duration<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
   
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//gerar imagem</span>
    <span class="token punctuation">}</span>
   
    <span class="token keyword">public</span> <span class="token class-name">Graphic</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Note</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>pitch<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>duration<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Criação da subclasse concreta de Graphic para as pausas musicais. Com o método construtor Rest() e os métodos herdados da classe Graphic.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Rest</span> <span class="token keyword">extends</span> <span class="token class-name">Graphic</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> duration<span class="token punctuation">;</span>
   
    <span class="token keyword">public</span> <span class="token class-name">Rest</span><span class="token punctuation">(</span><span class="token keyword">int</span> duration<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>duration <span class="token operator">=</span> duration<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
   
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//gerar imagem</span>
    <span class="token punctuation">}</span>
   
    <span class="token keyword">public</span> <span class="token class-name">Graphic</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Rest</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>duration<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Criação da class abstrata para as ferramentas do editor gráfico. Com os métodos activate(), deactivate() e manipulate(). Para ativar/desativar a ferramenta e para manipular um componente gráfico.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Tool</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">activate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">deactivate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">manipulate</span><span class="token punctuation">(</span><span class="token class-name">Graphic</span> graphic<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Criação da subclasse concreta de Tool para a criação de objetos gráficos. Com o método construtor para criar os objetos gráficos, os métodos herdados pela classe Tool e método para clonar a própria classe.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">GraphicTool</span> <span class="token keyword">extends</span> <span class="token class-name">Tool</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Graphic</span> prototype<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> active<span class="token punctuation">;</span>


    <span class="token keyword">public</span> <span class="token class-name">GraphicTool</span><span class="token punctuation">(</span><span class="token class-name">Graphic</span> prototype<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> prototype<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>active <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
   
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">activate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>active <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deactivate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>active <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">manipulate</span><span class="token punctuation">(</span><span class="token class-name">Graphic</span> graphic<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token class-name">Graphic</span> <span class="token function">createGraphic</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Exemplo do código de aplicação, onde instância a classe Note, criando uma nota e a instância da classe GraphicTool para adicionar as notas na partitura.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MusicEditor</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Graphic</span> notePrototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Note</span><span class="token punctuation">(</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Graphic</span> notePrototype2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Note</span><span class="token punctuation">)</span> <span class="token class-name">Note</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">GraphicTool</span> noteTool <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GraphicTool</span><span class="token punctuation">(</span>notePrototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="aplicabilidade" tabindex="-1"><a class="header-anchor" href="#aplicabilidade" aria-hidden="true">#</a> Aplicabilidade</h2><p>Utilize o padrão Prototype quando:</p><ul><li>o seu código não dever depender de classes concretas de objetos que você precisa copiar; <ul><li>O padrão Prototype fornece o código cliente com uma interface geral para trabalhar com todos os objetos que suportam clonagem. Essa interface faz o código do cliente ser independente das classes concretas dos objetos que ele clona.</li></ul></li><li>você precisa reduzir o número de subclasses que somente diferem a forma que inicializam seus respectivos objetos; <ul><li>O padrão Prototype permite que você use um conjunto de objetos construídos, configurado de diversas formas, como protótipos.</li></ul></li><li>o custo de criar um novo objeto é muito grande. <ul><li>O padrão Prototype permite que ao invés de chamar o new, apenas clonamos um objeto existente.</li></ul></li></ul><h2 id="estrutura" tabindex="-1"><a class="header-anchor" href="#estrutura" aria-hidden="true">#</a> Estrutura</h2><figure><img src="https://www.plantuml.com/plantuml/svg/bP5D2i8m44RtSufPwY8BknILGW-WU8EOZX1eCY4P5wAUoYDuCKljZqMAcas-nUFbcqcUH4SvkGhoFfbAfuH5PSaBNW1n6oXgiUndSxY1zKBng0tXBhAmd0CrL56nfuPe1UnD9EcXnKzKDgQmEG3Grb5lZounT7dK6JmBuO55sDKChWTERJepm21QNPLIdts_4bbjcPXrt65Fmj5hr6WUzs0rbeJ9egFaU6eFVnXoycNpXQ_x2G00" alt="uml diagram"><figcaption>Estrutura Prototype</figcaption></figure><ul><li><strong>Client</strong> - é o código fora da estrutura do Prototype, que deseja clonar o objeto protótipo.</li><li><strong>Prototype</strong> - uma interface para garantir que todos os objetos protótipo tenham o método &quot;clone&quot;.</li><li><strong>ConcretePrototype1|2</strong> - são objetos protótipos.</li></ul><h2 id="participantes" tabindex="-1"><a class="header-anchor" href="#participantes" aria-hidden="true">#</a> Participantes</h2><ul><li><strong>Prototype</strong> (Graphic) <ul><li>declara uma interface para clonar a si próprio.</li></ul></li><li><strong>ConcretePrototype</strong> (Note, Rest, GraphicTool) <ul><li>implementa uma operação para clonar a si próprio</li></ul></li><li><strong>Client</strong> (MusicEditor) <ul><li>cria um novo objeto solicitando a um protótipo que clone a si próprio.</li></ul></li></ul><h2 id="colaboracoes" tabindex="-1"><a class="header-anchor" href="#colaboracoes" aria-hidden="true">#</a> Colaborações</h2><ul><li>Um cliente solicita a um protótipo que este clone a si próprio.</li></ul><h2 id="consequencias" tabindex="-1"><a class="header-anchor" href="#consequencias" aria-hidden="true">#</a> Consequências</h2><p>O padrão Prototype tem os seguintes benefícios e desvantagens:</p><ol><li><strong>Acrescenta e remove produtos em tempo de execução.</strong> O cliente pode instalar e remover protótipos em tempo de execução, isso o torna mais flexível do que outros padrões.</li><li><strong>Ele isola as classes concretas.</strong> Os clientes manipulam as instâncias através das interfaces abstratas, pois o cliente é isolado das classes de implementação.</li><li><strong>Especifica novos objetos pela variação de valores.</strong> O cliente pode exibir um novo comportamento através da delegação de responsabilidades para o protótipo. Pois você define novos tipos de objetos pela instanciação das classes existentes e registrando as instâncias como protótipos dos objetos-clientes.</li><li><strong>Especifica novos objetos pela variação da estrutura.</strong> Muitas aplicações constróem objetos com partes e subpartes. Por exemplo, editores para o projeto de circuitos que constroem circuitos a partir de subcircuitos. Com esse formato ao realizar o clone dos circuitos, os valores dos subcircuitos não serão alterados e se forem os valores vão ser alterados em todos os clones, gerando incosistencia nos dados. Então é necessário que o objeto-circuito composto implemente um clone por replicação (deep copy), circuitos com diferentes estruturas podem ser protótipos.</li><li><strong>Não é necessário ficar criando novos objetos ou utilizar o Factory Method para construir novos objetos.</strong> O padrão Prototype permite que simplismente se crie um clone do protótipo.</li><li><strong>Configura dinamicamente uma aplicação com classes.</strong> Alguns ambientes de tempo de execução permitem carregar classes dinamicamente numa aplicação. Uma aplicação que quer criar instâncias de uma classe dinamicamente carregada não será capaz de referenciar o seu constructor estaticamente. Em vez disso, o ambiente de tempo de execução cria uma instância de cada classe automaticamente, quando carregada, e registra a instância junto a um gerenciador de protótipo.</li><li><strong>Campos de objetos privados.</strong> Quando você quer fazer a cópia exata de um objeto, será necessário ir em todos os campos e coletar seus valores para copiar e em alguns casos existem campos privados, que não serão visíveis de fora do objeto.</li><li><strong>Depedência da classe.</strong> Ao criar um clone de uma classe, seu código vai se tornar dependente da classe em questão.</li><li><strong>Classe concreta desconhecida.</strong> Em algumas ocasiões o cliente vai saber somente da interface em que o objeto segue, sem saber qual a classe concreta em que está se relacionando.</li></ol><h2 id="implementacao" tabindex="-1"><a class="header-anchor" href="#implementacao" aria-hidden="true">#</a> Implementação</h2><p>Ao implementar protótipos levam-se em consideração os seguintes aspectos:</p><ol><li><strong>Usar um gerenciador de protótipos.</strong> Um gerenciador de protótipos é uma memória associativa que retorna o protótipo correspondente a uma chave fornecida. Ele tem operações para registrar um protótipo com uma chave e para removê-lo do registro. Os clientes podem mudar ou mesmo pesquisar o registro em tempo de execução. Isso permite aos clientes estenderem e fazerem um inventário do sistema sem necessidade de escrever linhas de código.</li><li><strong>Implementar a operação Clone.</strong> A parte mais difícil do padrão Prototype é a implementação correta da operação Clone. Ela é particularmente difícil quando as estruturas de objetos contêm referências circulares. Na maioria das vezes utilizar shallow copy é suficiente, porém ao utiliza-lá os apontadores dos endereços serão compartilhados entre a cópia e o original. Já utilizando a deep copy, porém clonar protótipos com estruturas complexas normalmente exige uma cópia por replicação (deep copy), porque o clone e o original devem ser independentes. Portanto, você deve garantir que os componentes do clone são clones dos componentes do protótipo. A clonagem força a decidir o que, se for o caso, será compartilhado.</li><li><strong>Iniciar clones.</strong> Enquanto alguns clientes ficam perfeitamente contentes com o clone tal como ele é, outros desejarão iniciar alguns ou todos os seus estados internos com valores de sua escolha. Você geralmente não pode passar esses valores para operação Clone porque o seu número variará entre as classes de protótipo. Alguns protótipos podem necessitar de múltiplos parâmetros de inicialização; outros não necessitarão de nenhum. Passar parâmetros para a operação Clone impede uma interface uniforme de clonagem.</li></ol><h2 id="exemplo-de-codigo" tabindex="-1"><a class="header-anchor" href="#exemplo-de-codigo" aria-hidden="true">#</a> Exemplo de código</h2><p>Vários objetos do nosso sistema poderiam ter essa capacidade de clonar. Seria interessante definir uma interface para padronizar e marcar os objetos com essas características.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Prototype</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token class-name">T</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Depois, devemos implementar a interface Prototype nas classes que devem possuir a característica que desejamos.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Campanha</span> <span class="token keyword">implements</span> <span class="token class-name">Prototype</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Campanha</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token comment">// Atributos e métodos da classe</span>


    <span class="token keyword">public</span> <span class="token class-name">Campanha</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//Lógica para criar uma cópia da campanha &#39;this&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Quando o usuário quiser criar uma campanha com as mesmas configurações de uma campanha já criada, devemos escrever um código semelhante a este:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>

<span class="token class-name">Campanha</span> campanha1 <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token class-name">Campanha</span> campanha2 <span class="token operator">=</span> campanha1<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
campanha2<span class="token punctuation">.</span><span class="token function">setNome</span><span class="token punctuation">(</span><span class="token string">&quot;K19 - Campanha de Verão&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
campanha2<span class="token punctuation">.</span><span class="token function">getAnuncios</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setTitulo</span><span class="token punctuation">(</span><span class="token string">&quot;K19 - Padrões de Projeto&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
campanha2<span class="token punctuation">.</span><span class="token function">getAnuncios</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setTexto</span><span class="token punctuation">(</span><span class="token string">&quot;Novo treinamento de Padrões de Projeto da K19&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A seguir tem outro exemplo de código em Java, utilizando o padrão Prototype que é usado para utilizar um modelo existente, para que seja clonado em vez de ser criado do zero, economizando rescursos de processamento e simplificando a criação de objetos semelhantes.</p><p>Interface &quot;Prototipo&quot; declara um método clone, que deve ser implementado em todas as classes que desejam ser clonáveis.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Prototipo</span> <span class="token punctuation">{</span>
    <span class="token class-name">Prototipo</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Classe abstrata &quot;Formas&quot;, onde vai conter todos os atributos e métodos necessários para as formas.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>

<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Formas</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> tamanho<span class="token punctuation">;</span>


    <span class="token keyword">public</span> <span class="token class-name">Formas</span><span class="token punctuation">(</span><span class="token keyword">int</span> tamanho<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tamanho <span class="token operator">=</span> tamanho<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getTamanho</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> tamanho<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setTamanho</span><span class="token punctuation">(</span><span class="token keyword">int</span> tamanho<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tamanho <span class="token operator">=</span> tamanho<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Classes das formas que vão conter a classe abstrata &quot;Formas&quot; como superclasse e implementa a interface &quot;Prototipo&quot;:</p><p>Círculo:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Circulo</span> <span class="token keyword">extends</span> <span class="token class-name">Formas</span> <span class="token keyword">implements</span> <span class="token class-name">Prototipo</span><span class="token punctuation">{</span>


    <span class="token keyword">public</span> <span class="token class-name">Circulo</span><span class="token punctuation">(</span><span class="token keyword">int</span> tamanho<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>tamanho<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>




    <span class="token keyword">public</span> <span class="token class-name">Prototipo</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Circulo</span><span class="token punctuation">(</span>tamanho<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>




    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getTamanho</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> tamanho<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>




    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setTamanho</span><span class="token punctuation">(</span><span class="token keyword">int</span> tamanho<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tamanho <span class="token operator">=</span> tamanho<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>




    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Circulo \\nTamanho:&quot;</span> <span class="token operator">+</span> tamanho<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Quadrado:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Quadrado</span> <span class="token keyword">extends</span> <span class="token class-name">Formas</span> <span class="token keyword">implements</span> <span class="token class-name">Prototipo</span> <span class="token punctuation">{</span>
   
    <span class="token keyword">public</span> <span class="token class-name">Quadrado</span><span class="token punctuation">(</span><span class="token keyword">int</span> tamanho<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>tamanho<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>




    <span class="token keyword">public</span> <span class="token class-name">Prototipo</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Quadrado</span><span class="token punctuation">(</span>tamanho<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>




    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getTamanho</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> tamanho<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>




    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setTamanho</span><span class="token punctuation">(</span><span class="token keyword">int</span> tamanho<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tamanho <span class="token operator">=</span> tamanho<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>




    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Quadrado \\nTamanho:&quot;</span> <span class="token operator">+</span> tamanho<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Triângulo:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Triangulo</span> <span class="token keyword">extends</span> <span class="token class-name">Formas</span> <span class="token keyword">implements</span> <span class="token class-name">Prototipo</span> <span class="token punctuation">{</span>


    <span class="token keyword">public</span> <span class="token class-name">Triangulo</span><span class="token punctuation">(</span><span class="token keyword">int</span> tamanho<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>tamanho<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>




    <span class="token keyword">public</span> <span class="token class-name">Prototipo</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Triangulo</span><span class="token punctuation">(</span>tamanho<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>




    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getTamanho</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> tamanho<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>




    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setTamanho</span><span class="token punctuation">(</span><span class="token keyword">int</span> tamanho<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tamanho <span class="token operator">=</span> tamanho<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>




    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Triangulo \\nTamanho:&quot;</span> <span class="token operator">+</span> tamanho<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Classe &quot;Colecao&quot;, onde vai criar os grupos/coleções e implementa a interface &quot;Prototipo&quot;:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>

    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Colecao</span> <span class="token keyword">implements</span> <span class="token class-name">Prototipo</span> <span class="token punctuation">{</span>
    <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Formas</span><span class="token punctuation">&gt;</span></span> formas<span class="token punctuation">;</span>


    <span class="token keyword">public</span> <span class="token class-name">Colecao</span><span class="token punctuation">(</span><span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Formas</span><span class="token punctuation">&gt;</span></span> formas<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>formas <span class="token operator">=</span> formas<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addFormas</span><span class="token punctuation">(</span><span class="token class-name">Formas</span> formas<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>formas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>formas<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token class-name">Prototipo</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Colecao</span><span class="token punctuation">(</span>formas<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">showColecao</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">Formas</span> formas <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>formas<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>formas<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Classe &quot;Cliente&quot;, onde vai conter o código de compilação:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Cliente</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Circulo</span> c1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Circulo</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Circulo</span> c2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Circulo</span><span class="token punctuation">)</span> c1<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">Triangulo</span> t1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Triangulo</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Triangulo</span> t2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Triangulo</span><span class="token punctuation">)</span> t1<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       
        <span class="token class-name">Quadrado</span> q1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Quadrado</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Quadrado</span> q2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Quadrado</span><span class="token punctuation">)</span> q1<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">Colecao</span> colecao <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Colecao</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        colecao<span class="token punctuation">.</span><span class="token function">addFormas</span><span class="token punctuation">(</span>c1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        colecao<span class="token punctuation">.</span><span class="token function">addFormas</span><span class="token punctuation">(</span>t1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        colecao<span class="token punctuation">.</span><span class="token function">addFormas</span><span class="token punctuation">(</span>q1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        colecao<span class="token punctuation">.</span><span class="token function">showColecao</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/* Circulo
        Tamanho:20
        Triangulo
        Tamanho:20
        Quadrado
        Tamanho:20 */</span>


        <span class="token class-name">Colecao</span> colecao2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Colecao</span><span class="token punctuation">)</span> colecao<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        colecao2<span class="token punctuation">.</span>formas<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setTamanho</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        colecao2<span class="token punctuation">.</span>formas<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setTamanho</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        colecao2<span class="token punctuation">.</span>formas<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setTamanho</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        colecao2<span class="token punctuation">.</span><span class="token function">showColecao</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/* Circulo
        Tamanho:50
        Triangulo
        Tamanho:50
        Quadrado
        Tamanho:50 */</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="usos-conhecidos" tabindex="-1"><a class="header-anchor" href="#usos-conhecidos" aria-hidden="true">#</a> Usos conhecidos</h2><p>Talvez o primeiro exemplo do padrão Prototype se encontre no sistema Sketchpad de Ivan Sutherland [Sut63]. A primeira aplicação amplamente conhecida do padrão numa linguagem orientada a objeto foi em ThingLab, na qual os usuários poderiam formar um objeto composto e então promovê-lo a um protótipo pela sua instalação numa biblioteca de objetos reutilizáveis [Bor81]. Goldberg e Robson mencionam protótipos como um padrão [GR83], mas Coplien [Cop92] fornece uma descrição muito mais completa. Ele descreve idiomas relacionados ao padrão prototype para C++ e dá muitos exemplos e variações. O Etgdb é um depurador (debugger) de front-end, baseado em ET++, que fornece uma interface de apontar e clicar para diferentes depuradores orientados a linhas. Cada depurador tem uma subclasse DebuggerAdaptor correspondente. Por exemplo, GdbAdaptor adapta o etgdb à sintaxe dos comandos do gdb de GNU, enquanto que SunDbxAdaptor adapta o etgdb ao depurador da Sun. O Etgdb não tem um conjunto de classes DebuggerAdaptor codificadas rigidamente nele próprio. Em vez disso, lê o nome do adaptor a ser usado de uma variável fornecida pelo ambiente, procura um protótipo com o nome especificado em uma tabela global e, então, clona o protótipo. Novos depuradores podem ser acrescentados ao etgdb ligando-o ao DebuggerAdaptor que funciona para um depurador novo. A “biblioteca de técnicas de interações”, no ModeComposer, armazena protótipos de objetos que suportam várias técnicas de interação [Sha90]. Qualquer técnica de interação criada pelo Mode Composer pode ser usada como um protótipo colocando-a nesta biblioteca. O padrão Prototype permite ao Mode Composer suportar um conjunto ilimitado de técnicas de interação. O exemplo do editor musical discutido anteriormente se baseia no framework para desenhos do Unidraw [VL90].</p><h2 id="padrao-relacionados" tabindex="-1"><a class="header-anchor" href="#padrao-relacionados" aria-hidden="true">#</a> Padrão relacionados</h2><p>[Abstract Factory]: Prototype e Abstract Factory são padrões que competem entre si em várias situações. Um Abstract Factory pode armazenar um conjunto de protótipos a partir dos quais podem ser clonados e retornados objetos-produto. [Composite e Decorator]: Podem se beneficiar do uso do Prototype.</p><h2 id="referencias" tabindex="-1"><a class="header-anchor" href="#referencias" aria-hidden="true">#</a> Referências</h2><ul><li>k19-k51-design-patterns-em-java</li><li>Gamma Erich - Padrões de Projetos - Soluções Reutilizáveis</li><li>Otávio Miranda - Prototype Teoria - Padrões de Projeto - Parte 8/45 - https://youtu.be/Z-_smcjkdwM</li><li>Otávio Miranda - Prototype Prática - Padrões de Projeto - Parte 9/45 - https://youtu.be/NMwokH-kKZE</li></ul>`,67),p=[t];function c(i,l){return s(),a("div",null,p)}const d=n(o,[["render",c],["__file","Prototype.html.vue"]]);export{d as default};
