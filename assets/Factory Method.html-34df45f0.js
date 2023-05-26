import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-7ff3a144.js";const o={},c=e(`<h1 id="factory-method-gof" tabindex="-1"><a class="header-anchor" href="#factory-method-gof" aria-hidden="true">#</a> Factory Method (GOF)</h1><h2 id="intencao" tabindex="-1"><a class="header-anchor" href="#intencao" aria-hidden="true">#</a> Intenção</h2><p>Definir uma interface para criar um objeto, mas deixar as subclasses decidirem que classe instanciar. O Factory Method permite adiar a instanciação para subclasses.</p><h2 id="tambem-conhecido-como" tabindex="-1"><a class="header-anchor" href="#tambem-conhecido-como" aria-hidden="true">#</a> Também conhecido como</h2><p>Virtual Constructor.</p><h2 id="motivacao" tabindex="-1"><a class="header-anchor" href="#motivacao" aria-hidden="true">#</a> Motivação</h2><p>Os frameworks utilizam classes abstratas para definir e manter relacionamentos entre objetos, eles também são responsáveis pela criação desses objetos.</p><p>Considere um cenário onde existe um framework desenvolvido para criar aplicações que permitam aos usuários lidar com vários documentos. Duas abstrações-chave nesse framework são as classes <code>Application</code> (Aplicação) e <code>Document</code> (Documento). As duas classes são abstratas, e os clientes devem criar subclasses para realizar suas implementações específicas para a aplicação. Por exemplo, para criar uma aplicação de desenho, criamos as classes <code>DrawingApplication</code> e <code>DrawingDocument</code>. A classe Application é responsável pelo gerenciamento dos documentos e pode criá-los quando necessário, por exemplo, quando o usuário seleciona Open (Abrir) ou New (Novo) no Menu.</p><p>No entanto, a classe Application não pode prever qual subclasse de Document será necessária, já que essa escolha é específica para cada aplicação. A classe Application sabe apenas quando um documento deve ser criado, mas não tem conhecimento sobre qual tipo de Document deve ser instanciado. Isso gera um dilema: o framework precisa criar instâncias de classes, mas só possui conhecimento sobre as classes abstratas, as quais não podem ser instanciadas diretamente.</p><p>É aí que o padrão Factory Method oferece uma solução para esse problema. Ele encapsula o conhecimento sobre qual subclasse de Document deve ser criada e transfere essa responsabilidade para fora do framework.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>

<span class="token comment">// Classe abstrata Document</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Document</span> <span class="token punctuation">{</span>
    <span class="token comment">// Métodos abstratos que devem ser implementados pelas subclasses</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token keyword">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">// Classe concreta DrawingDocument</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DrawingDocument</span> <span class="token keyword">extends</span> <span class="token class-name">Document</span> <span class="token punctuation">{</span>
    <span class="token comment">// Atributos</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token keyword">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Código para criar documento</span>
    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Código para abrir documento</span>
    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Código para fechar documento</span>
    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Código para salvar documento</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// Classe abstrata Application</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span>
    <span class="token comment">// Factory Method que cria instâncias de Document</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token class-name">Document</span> <span class="token function">createDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token comment">// Métodos responsáveis por gerenciar os documentos</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">newDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Document</span> document <span class="token operator">=</span> <span class="token function">createDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        document<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">openDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Document</span> document <span class="token operator">=</span> <span class="token function">createDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        document<span class="token punctuation">.</span><span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// Classe concreta DrawingApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DrawingApplication</span> <span class="token keyword">extends</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Document</span> <span class="token function">createDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">DrawingDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// Exemplo de uso do framework</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Application</span> application <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DrawingApplication</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        application<span class="token punctuation">.</span><span class="token function">createDocuments</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>No código acima criado de acordo com o cenário estabelecido temos a classe abstrata <code>Document</code> que define a estrutura de um documento e a classe <code>DrawingDocument</code> que é uma implementação da classe <code>Document</code>.</p><p>A classe <code>Application</code> representa o framework que possui o Factory Method <code>createDocument()</code>, que tem o objetivo de criar instâncias de documentos (<code>Document</code>). O framework não tem conhecimento de qual subclasse de <code>Document</code> será necessária, então ela delega toda responsabilidade para as classes concretas, como <code>DrawingApplication</code>, que implementa o método <code>createDocument()</code> retornando uma instância de <code>DrawingDocument</code>.</p><p>Esse exemplo demonstra a flexibilidade que o padrão Factory Method pode entregar, onde permite que o framework crie objetos sem conhecer a subclasse específica que deve ser instanciada.</p><h2 id="aplicabilidade" tabindex="-1"><a class="header-anchor" href="#aplicabilidade" aria-hidden="true">#</a> Aplicabilidade</h2><p>Use o padrão Factory Method quando:</p><ul><li>Uma classe não pode antecipar a classe de objetos que deve criam;</li><li>Uma classe quer que suas subclasses especifiquem os objetos que criam;</li><li>Classes delegam responsabilidade para uma dentre várias subclasses auxiliares, e você quer localizar o conhecimento de qual subclasse auxiliar que é a delegada;</li><li>Quando não souber de antemão os tipos e dependências exatas dos objetos com os quais seu código deve funcionar;</li><li>Quando desejar fornecer aos usuários da sua biblioteca ou framework uma maneira de estender seus componentes internos.</li></ul><h2 id="estrutura" tabindex="-1"><a class="header-anchor" href="#estrutura" aria-hidden="true">#</a> Estrutura</h2><figure><img src="https://www.plantuml.com/plantuml/svg/VL7D2i8m3BxdANBKmrv052Q2Dz5Ng6rqXQqTQOgCwRjRvnJtWxaa-P9y-KBo88ebLYNatyWw8RueJNXYRwAM5Xu0e4iL0kwyqqn2SoKc9PvRm6HxfLFS74WARnRB3jkwOqsin7gNa2ddNu9NUxyKr_Si6ok1KOxhR4mClH_EVugZCy1v8MHxBMI5TS-vcSYQlM0mc_383XtT9f812ci8gQgbGIN2zXo5mYzQTOj2Qit9cUvHR_y4" alt="uml diagram"><figcaption>Estrutura Factory Method.</figcaption></figure><h2 id="participantes" tabindex="-1"><a class="header-anchor" href="#participantes" aria-hidden="true">#</a> Participantes</h2><ul><li><strong>Product</strong> (Document) <ul><li>define a interface de objetos que o método fábrica cria.</li></ul></li><li><strong>ConcreteProduct</strong> (MyDocument) <ul><li>implementa a interface de Product.</li></ul></li><li><strong>Creator</strong> (Application) <ul><li>Declara o método fábrica, o qual retorna um objeto do tipo Product. Creator pode também definir uma implementação por omissão do método factory que retorna por omissão um objeto ConcreteProduct.</li><li>Pode chamar o método factory para criar um objeto Product.</li></ul></li><li><strong>ConcreteCreator</strong> (MyApplication) <ul><li>Redefine o método-fábrica para retornar a uma instância de um ConcreteProduct.</li></ul></li></ul><h2 id="colaboracoes" tabindex="-1"><a class="header-anchor" href="#colaboracoes" aria-hidden="true">#</a> Colaborações</h2><ul><li>Creator depende das suas subclasses para definir o método fábrica de maneira que retorne uma instância do ConcreteProduct apropriado.</li></ul><h2 id="consequencias" tabindex="-1"><a class="header-anchor" href="#consequencias" aria-hidden="true">#</a> Consequências</h2><h3 id="vantagens" tabindex="-1"><a class="header-anchor" href="#vantagens" aria-hidden="true">#</a> Vantagens</h3><ul><li><p>O Factory Method elimina a necessidade de anexar classes específicas das aplicações no código. O código lida somente com a interface de Product; portanto, ele pode trabalhar com quaisquer classe ConcreteProduct definidas pelo usuário.</p></li><li><p>Fornece ganchos para subclasses. Criar objetos dentro de uma classe com um método fábrica é sempre mais flexível do que criar um objeto diretamente. Factory Method dá às subclasses um gancho para fornecer uma versão estendida de um objeto.</p></li><li><p>Conecta hierarquias de classe paralelas. Nos exemplos que consideramos até aqui o método-fábrica é somente chamado por Creators. Mas isto não precisa ser obrigatoriamente assim; os clientes podem achar os métodos-fábrica úteis, especialmente no caso de hierarquias de classe paralelas. Hierarquias de classe paralelas ocorrem quando uma classe delega alguma das suas responsabilidades para uma classe separada.</p></li></ul><h3 id="desvantagens" tabindex="-1"><a class="header-anchor" href="#desvantagens" aria-hidden="true">#</a> Desvantagens</h3><ul><li>Uma desvantagem em potencial dos métodos fábrica é que os clientes podem ter que fornecer subclasses da classe Creator somente para criar um objeto ConcreteProduct em particular. Usar subclasses é bom quando o cliente tem que fornecer subclasses a Creator de qualquer maneira, caso contrário, o cliente deve lidar com outro ponto de evolução.</li></ul><h2 id="implementacao" tabindex="-1"><a class="header-anchor" href="#implementacao" aria-hidden="true">#</a> Implementação</h2><p>Considere os passos à seguir, para aplicar o padrão Factory Method:</p><ol><li><p>Faça todos os produtos implementarem a mesma interface. Essa interface deve declarar métodos que fazem sentido em todos os produtos.</p></li><li><p>Adicione um método fábrica vazio dentro da classe criadora. O tipo de retorno do método deve corresponder à interface comum do produto.</p></li><li><p>No código da classe criadora, encontre todas as referências aos construtores de produtos. Um por um, substitua-os por chamadas ao método fábrica, enquanto extrai o código de criação do produto para o método fábrica.</p></li></ol><ul><li>Pode ser necessário adicionar um parâmetro temporário ao método fábrica para controlar o tipo de produto retornado.</li></ul><ol start="4"><li><p>Crie um conjunto de subclasses criadoras para cada tipo de produto listado no método fábrica. Sobrescreva o método fábrica nas subclasses e extraia os pedaços apropriados do código de construção do método base.</p></li><li><p>Se houver muitos tipos de produtos e não fizer sentido criar subclasses para todos eles, você poderá reutilizar o parâmetro de controle da classe base nas subclasses.</p></li><li><p>Se, após todas as extrações, o método fábrica base ficar vazio, você poderá torná-lo abstrato. Se sobrar algo, você pode tornar isso em um comportamento padrão do método.</p></li></ol><h2 id="exemplo-de-codigo" tabindex="-1"><a class="header-anchor" href="#exemplo-de-codigo" aria-hidden="true">#</a> Exemplo de código</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>

<span class="token comment">// Classe abstrata Document</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Document</span><span class="token punctuation">{</span>
    <span class="token comment">// Métodos abstratos que devem ser implementados pelas subclasses</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token keyword">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">// Classe concreta createPDF</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> createPDF <span class="token keyword">extends</span> <span class="token class-name">Document</span> <span class="token punctuation">{</span>
    <span class="token comment">// Atributos</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token keyword">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Código para criar documento</span>
    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Código para abrir documento</span>
    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Código para fechar documento</span>
    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Código para salvar documento</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// Classe concreta createWord</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> createWord <span class="token keyword">extends</span> <span class="token class-name">Document</span> <span class="token punctuation">{</span>
    <span class="token comment">// Atributos</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token keyword">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Código para criar documento</span>
    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Código para abrir documento</span>
    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Código para fechar documento</span>
    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Código para salvar documento</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// Classe abstrata Aplicação</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span>
    <span class="token comment">// Factory Method que cria instâncias de Documento</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token class-name">Document</span> <span class="token function">createDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token comment">// Métodos responsáveis por gerenciar os documentos</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">newDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Document</span> document <span class="token operator">=</span> <span class="token function">createDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        document<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">openDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Document</span> document <span class="token operator">=</span> <span class="token function">createDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        document<span class="token punctuation">.</span><span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// Classe concreta Aplicação específica para PDF</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PDFApplication</span> <span class="token keyword">extends</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Document</span> <span class="token function">createDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token function">createPDF</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// Classe concreta Aplicação específica para Word</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WordApplication</span> <span class="token keyword">extends</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Document</span> <span class="token function">createDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token function">createWord</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// Exemplo de uso do framework</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Application</span> applicationPDF <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PDFApplication</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        applicationPDF<span class="token punctuation">.</span><span class="token function">createDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Application</span> applicationWord <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WordApplication</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        applicationWord<span class="token punctuation">.</span><span class="token function">createDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="usos-conhecidos" tabindex="-1"><a class="header-anchor" href="#usos-conhecidos" aria-hidden="true">#</a> Usos conhecidos</h2><ul><li><p>Os métodos fábricas são utilizados por toolkits e frameworks, pela sua abordagem flexível para a criação de objetos, permitindo a criação de objetos com necessidades específicas. Exemplo o MacApp e ET++, que são frameworks e os métodos fábricas são criados e utilizados para criar objetos relacionados a documentos. Pode existir um método fábrica que seja responsável por criar diversos tipos de documentos como de texto, planilha e entre outros. Seguindo a mesma lógica, no Unidraw que é um framework gráfico, os métodos fábricas podem ser usados para criar manipuladores, destinados a lidar com interações de usuário, como seleção, edição e elementos gráficos.</p></li><li><p>A classe <code>View</code> do framework Model/View/Controller no Smalltalk-80, tem um método chamado defaultController, responsável por criar uma instância controlador. Isso pode parecer com o método fábrica, mas a verdadeira implementação do método fábrica é encontrada no método defaultControllerClass, que retorna a classe da qual defaultController cria instâncias.</p></li><li><p>Sistema ORB Orbix da IONA Technologies[ION94], utiliza do padrão Factory Method para criar tipos apropriados de proxy, quando um objeto utiliza solicita uma referência para um objeto remoto. O padrão facilita a substituição do proxy padrão para um outro que seja adequado para a interação.</p></li></ul><h2 id="padrao-relacionados" tabindex="-1"><a class="header-anchor" href="#padrao-relacionados" aria-hidden="true">#</a> Padrão relacionados</h2><p>[Abstract Factory]: Abstract Factory e Factory Method podem ser combinados de maneira que o Abstract Factory cria famílias de objetos dependentes, sem que seja necessário especificar suas classes concretas e o Factory Method pode ser utilizado para criar objetos individuais dentro dessas famílias. [Template Methods]: Template Method e Factory Method podem ser utilizados juntos da seguinte maneira, o Factory Method é utilizado dentro do Template Method, possibilitando a criação de objetos especifícos durante a execução de um algoritmo. [Prototype]: Prototype e Factory Method podem ser combinados quando se cria um objeto protótipo dentro do método fábrica, sendo assim os obejtos são clonados sem que seja necessário criar o objeto do zero, após clonar você pode fazer a alterações necessárias.</p><h2 id="referencias" tabindex="-1"><a class="header-anchor" href="#referencias" aria-hidden="true">#</a> Referências</h2><ul><li>Mergulho nos Padrões de Projeto</li><li>Gamma Erich - Padrões de Projetos - Soluções Reutilizáveis</li></ul>`,41),t=[c];function i(p,l){return s(),a("div",null,t)}const u=n(o,[["render",i],["__file","Factory Method.html.vue"]]);export{u as default};
