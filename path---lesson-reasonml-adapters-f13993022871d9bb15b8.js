webpackJsonp([97745555746260],{426:function(n,s){n.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Adapters",lesson:6,category:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/adapters"}}},{node:{frontmatter:{title:"Actor Communication",lesson:2,category:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/actor-communication"}}},{node:{frontmatter:{title:"Hierarchy",lesson:4,category:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/hierarchy"}}},{node:{frontmatter:{title:"Getting Started",lesson:2,category:"reasonml",chapter:1,type:"lesson"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Decoders and Encoders",lesson:2,category:"reasonml",chapter:4,type:"lesson"},fields:{slug:"/decoders-and-encoders"}}},{node:{frontmatter:{title:"Logging and Monitoring",lesson:1,category:"reasonml",chapter:4,type:"lesson"},fields:{slug:"/logging-and-monitoring"}}},{node:{frontmatter:{title:"Stateful Actors",lesson:1,category:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/stateful-actors"}}},{node:{frontmatter:{title:"Introduction",lesson:1,category:"reasonml",chapter:1,type:"lesson"},fields:{slug:"/introduction"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"reasonml",chapter:3,type:"lesson"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Persist",lesson:1,category:"reasonml",chapter:3,type:"lesson"},fields:{slug:"/persist"}}},{node:{frontmatter:{title:"Querying",lesson:3,category:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/querying"}}},{node:{frontmatter:{title:"Supervision",lesson:5,category:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/supervision"}}},{node:{frontmatter:{title:"Timeouts",lesson:3,category:"reasonml",chapter:3,type:"lesson"},fields:{slug:"/timeouts"}}}]},postBySlug:{html:'<p>A typical pattern in Nact when sending a message to an actor is including references to other actors. These references are often to whom the result should be delivered to. The problem is that ActorRefs are strongly typed. Consider the contacts service again—imagine that there was another service which needed to retrieve contacts from the contact service, but that it spoke an protocol which was unintelligible to the contacts actor. </p>\n<p>One way you could solve this problem would be to add a variant to the protocol for each type of <code class="language-text">actorRef(&#39;a)</code> which could conceivably communicate with the contacts service. This doesn\'t seem like a great idea: it completely breaks encapsulation, is tedious, and causes a combinatorial explosion of typings. </p>\n<p>A slightly better idea would be to create another actor which knew how to map from one protocol to another. Still a little tedious, but it improves encapsulation, and doesn\'t cause the volume of code to grow exponentially.</p>\n<p>To reduce the tedium, the <code class="language-text">spawnAdapter</code> method is provided. It takes in the <code class="language-text">actorRef(&#39;a)</code> of the target actor and a mapping function from <code class="language-text">&#39;b -&gt; &#39;a</code>, returning an actorRef of type <code class="language-text">actorRef(&#39;b)</code>.</p>\n<blockquote>\n<p>Note: Adapter actors are added as children of the target actor and <em>do</em> consume a small amount of memory, so adapters should ideally not be created on every message. </p>\n</blockquote>\n<p>Whenever the adapter receives a message of type <code class="language-text">&#39;b</code>, it maps it to type <code class="language-text">&#39;a</code> and forwards it to the target actor.</p>\n<p>The code below is a concrete but toy example of the idea. The example explores the scenario where the <code class="language-text">world</code> protocol was defined before the <code class="language-text">hello</code> protocol. It is a minor variation of ping-pong but where hello has the additional responsibility of mediating between the newer and older protocols</p>\n<div class="gatsby-highlight">\n      <pre class="language-reason"><code class="language-reason"><span class="token keyword">open</span> <span class="token constructor variable">Nact</span><span class="token punctuation">;</span>\n\n<span class="token keyword">open</span> <span class="token class-name">Nact</span><span class="token punctuation">.</span><span class="token constructor variable">Operators</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> system <span class="token operator">=</span> <span class="token class-name">Nact</span><span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">type</span> world <span class="token operator">=</span>\n  <span class="token operator">|</span> <span class="token constructor variable">World</span><span class="token punctuation">(</span>actorRef<span class="token punctuation">(</span>world<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">type</span> hello <span class="token operator">=</span>\n  <span class="token operator">|</span> <span class="token constructor variable">Hello</span><span class="token punctuation">(</span>actorRef<span class="token punctuation">(</span>world<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> world<span class="token punctuation">:</span> actorRef<span class="token punctuation">(</span>world<span class="token punctuation">)</span> <span class="token operator">=</span>\n  spawnStateless<span class="token punctuation">(</span>\n    <span class="token operator">~</span>name<span class="token operator">=</span><span class="token string">"world"</span><span class="token punctuation">,</span>\n    system<span class="token punctuation">,</span>\n    <span class="token punctuation">(</span><span class="token constructor variable">World</span><span class="token punctuation">(</span>sender<span class="token punctuation">)</span><span class="token punctuation">,</span> ctx<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      print_endline<span class="token punctuation">(</span><span class="token string">"world!!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      sender <span class="token operator">&lt;</span><span class="token operator">-</span><span class="token operator">&lt;</span> <span class="token constructor variable">World</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>self<span class="token punctuation">)</span> <span class="token operator">|</span><span class="token operator">></span> <span class="token class-name">Js</span><span class="token punctuation">.</span><span class="token class-name">Promise</span><span class="token punctuation">.</span>resolve\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> createAdapterIfNotExists <span class="token operator">=</span> <span class="token punctuation">(</span>parent<span class="token punctuation">,</span> adapterOpt<span class="token punctuation">)</span> <span class="token operator">=></span>\n  <span class="token keyword">switch</span> adapterOpt <span class="token punctuation">{</span>\n  <span class="token operator">|</span> <span class="token constructor variable">Some</span><span class="token punctuation">(</span>adapter<span class="token punctuation">)</span> <span class="token operator">=></span> adapter\n  <span class="token operator">|</span> <span class="token constructor variable">None</span> <span class="token operator">=></span> spawnAdapter<span class="token punctuation">(</span>parent<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token constructor variable">World</span><span class="token punctuation">(</span>sender<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token constructor variable">Hello</span><span class="token punctuation">(</span>sender<span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> hello <span class="token operator">=</span>\n  spawn<span class="token punctuation">(</span>\n    <span class="token operator">~</span>name<span class="token operator">=</span><span class="token string">"hello"</span><span class="token punctuation">,</span>\n    system<span class="token punctuation">,</span>\n    <span class="token punctuation">(</span>adapterOpt<span class="token punctuation">,</span> <span class="token constructor variable">Hello</span><span class="token punctuation">(</span>sender<span class="token punctuation">)</span><span class="token punctuation">,</span> ctx<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> adapter <span class="token operator">=</span> createAdapterIfNotExists<span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>self<span class="token punctuation">,</span> adapterOpt<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      print_string<span class="token punctuation">(</span><span class="token string">"Hello "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      sender <span class="token operator">&lt;</span><span class="token operator">-</span><span class="token operator">&lt;</span> <span class="token constructor variable">World</span><span class="token punctuation">(</span>adapter<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token class-name">Js</span><span class="token punctuation">.</span><span class="token class-name">Promise</span><span class="token punctuation">.</span>resolve<span class="token punctuation">(</span><span class="token constructor variable">Some</span><span class="token punctuation">(</span>adapter<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token constructor variable">None</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nhello <span class="token operator">&lt;</span><span class="token operator">-</span><span class="token operator">&lt;</span> <span class="token constructor variable">Hello</span><span class="token punctuation">(</span>world<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>',timeToRead:2,excerpt:"A typical pattern in Nact when sending a message to an actor is including references to other actors. These references are often to whom the…",frontmatter:{title:"Adapters",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"28/01/2018",category:"reasonml",tags:["getting-started","nact","reasonml","nodejs"]},fields:{slug:"/adapters"}}},pathContext:{slug:"/adapters",category:"reasonml"}}}});
//# sourceMappingURL=path---lesson-reasonml-adapters-f13993022871d9bb15b8.js.map