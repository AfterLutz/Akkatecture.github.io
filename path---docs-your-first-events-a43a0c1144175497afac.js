webpackJsonp([54802054384810],{429:function(n,s){n.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Production Readiness",lesson:4,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/production-readiness"}}},{node:{frontmatter:{title:"Articles",lesson:2,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/articles"}}},{node:{frontmatter:{title:"Videos",lesson:3,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/videos"}}},{node:{frontmatter:{title:"Tips and Tricks",lesson:1,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/tips-and-tricks"}}},{node:{frontmatter:{title:"Sagas",lesson:1,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/sagas"}}},{node:{frontmatter:{title:"Event Upgrading",lesson:5,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/event-upgrading"}}},{node:{frontmatter:{title:"Clustering",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/clustering"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Akka",lesson:7,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/akka"}}},{node:{frontmatter:{title:"Configuration",lesson:8,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/configuration"}}},{node:{frontmatter:{title:"Aggregates",lesson:2,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/aggregates"}}},{node:{frontmatter:{title:"Events",lesson:3,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/events"}}},{node:{frontmatter:{title:"Commands",lesson:4,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/commands"}}},{node:{frontmatter:{title:"Walkthrough Introduction",lesson:1,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/walkthrough-introduction"}}},{node:{frontmatter:{title:"Specifications",lesson:5,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/specifications"}}},{node:{frontmatter:{title:"Your First Aggregate",lesson:2,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate"}}},{node:{frontmatter:{title:"Primitives",lesson:1,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/primitives"}}},{node:{frontmatter:{title:"Your First Commands",lesson:3,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-commands"}}},{node:{frontmatter:{title:"Your First Cluster",lesson:9,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-cluster"}}},{node:{frontmatter:{title:"Your First Aggregate Saga",lesson:6,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate-saga"}}},{node:{frontmatter:{title:"Subscribers",lesson:6,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/subscribers"}}},{node:{frontmatter:{title:"Your First Events",lesson:4,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-events"}}},{node:{frontmatter:{title:"Your First Read Models",lesson:8,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-read-models"}}},{node:{frontmatter:{title:"Your First Subscribers",lesson:7,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-subscribers"}}},{node:{frontmatter:{title:"Your First Specifications",lesson:5,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-specifications"}}},{node:{frontmatter:{title:"Getting Started",lesson:1,category:"akkatecture",chapter:1,type:"docs"},fields:{slug:"/getting-started"}}}]},postBySlug:{html:'<p>We now need to design the aggregate events that will alert the system that something has happened. Some events that occur in this system according to the <a href="/docs/walkthrough-introduction#business-requirements">business requirements</a>.</p>\n<p>What are some facts that happen in our system:</p>\n<ul>\n<li>Bank account can be opened.</li>\n<li>Money can be sent to a bank account.</li>\n<li>Bank fees for sent money can be deducted from bank account.</li>\n<li>Money can be received by a bank account.</li>\n</ul>\n<p>Lets model these events accordingly.</p>\n<p>The event that represents a bank account being opened</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AccountOpenedEvent</span> <span class="token punctuation">:</span> <span class="token class-name">AggregateEvent</span><span class="token operator">&lt;</span>Account<span class="token punctuation">,</span>AccountId<span class="token operator">></span> \n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token class-name">Money</span> OpeningBalance <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token function">AccountOpenedEvent</span><span class="token punctuation">(</span><span class="token class-name">Money</span> openingBalance<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        OpeningBalance <span class="token operator">=</span> openingBalance<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>The event that represents a bank account having sent money</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MoneySentEvent</span> <span class="token punctuation">:</span> <span class="token class-name">AggregateEvent</span><span class="token operator">&lt;</span>Account<span class="token punctuation">,</span>AccountId<span class="token operator">></span> \n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token class-name">Money</span> Amount <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token class-name">AccountId</span> ReceiverId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token function">MoneySentEvent</span><span class="token punctuation">(</span><span class="token class-name">AccountId</span> receiverId<span class="token punctuation">,</span> <span class="token class-name">Money</span> amount<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Amount <span class="token operator">=</span> amount<span class="token punctuation">;</span>\n        ReceiverId <span class="token operator">=</span> receiverId<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>The event that represents a bank account deducting bank fees</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FeesDeductedEvent</span> <span class="token punctuation">:</span> <span class="token class-name">AggregateEvent</span><span class="token operator">&lt;</span>Account<span class="token punctuation">,</span>AccountId<span class="token operator">></span> \n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token class-name">Money</span> Amount <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token function">FeesDeductedEvent</span><span class="token punctuation">(</span><span class="token class-name">Money</span> amount<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Amount <span class="token operator">=</span> amount<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>The event that represents a bank account receiving money</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MoneyReceivedEvent</span> <span class="token punctuation">:</span> <span class="token class-name">AggregateEvent</span><span class="token operator">&lt;</span>Account<span class="token punctuation">,</span>AccountId<span class="token operator">></span> \n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token class-name">Money</span> Amount <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token class-name">AccountId</span> SenderId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token function">MoneyReceivedEvent</span><span class="token punctuation">(</span><span class="token class-name">AccountId</span> senderId<span class="token punctuation">,</span> <span class="token class-name">Money</span> amount<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Amount <span class="token operator">=</span> amount<span class="token punctuation">;</span>\n        SenderId <span class="token operator">=</span> senderId<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>We need to add each aggregate event applier method to the <a href="/docs/your-first-aggregate#the-account-aggregate">aggregate state</a> as an <code class="language-text">IApply&lt;&gt;</code>.</p>\n<p><code class="language-text">AccountState</code> becomes:</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AccountState</span> <span class="token punctuation">:</span> <span class="token class-name">AggregateState</span><span class="token operator">&lt;</span>Account<span class="token punctuation">,</span> AccountId<span class="token operator">></span><span class="token punctuation">,</span>\n    IApply<span class="token operator">&lt;</span>AccountOpenedEvent<span class="token operator">></span><span class="token punctuation">,</span>\n    IApply<span class="token operator">&lt;</span>MoneySentEvent<span class="token operator">></span><span class="token punctuation">,</span>\n    IApply<span class="token operator">&lt;</span>FeesDeductedEvent<span class="token operator">></span><span class="token punctuation">,</span>\n    IApply<span class="token operator">&lt;</span>MoneyReceivedEvent<span class="token operator">></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token class-name">Money</span> Balance <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">Apply</span><span class="token punctuation">(</span><span class="token class-name">AccountOpenedEvent</span> aggregateEvent<span class="token punctuation">)</span> \n    <span class="token punctuation">{</span>\n        Balance <span class="token operator">=</span> aggregateEvent<span class="token punctuation">.</span>OpeningBalance<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">Apply</span><span class="token punctuation">(</span><span class="token class-name">MoneySentEvent</span> aggregateEvent<span class="token punctuation">)</span> \n    <span class="token punctuation">{</span>\n        Balance <span class="token operator">-</span><span class="token operator">=</span> aggregateEvent<span class="token punctuation">.</span>Amount<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">Apply</span><span class="token punctuation">(</span><span class="token class-name">FeesDeductedEvent</span> aggregateEvent<span class="token punctuation">)</span> \n    <span class="token punctuation">{</span>\n        Balance <span class="token operator">-</span><span class="token operator">=</span> aggregateEvent<span class="token punctuation">.</span>Amount<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">Apply</span><span class="token punctuation">(</span><span class="token class-name">MoneyReceivedEvent</span> aggregateEvent<span class="token punctuation">)</span> \n    <span class="token punctuation">{</span>\n        Balance <span class="token operator">+</span><span class="token operator">=</span> aggregateEvent<span class="token punctuation">.</span>Amount<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<blockquote>\n<p>Notice how events are treated as facts. The only domain logic here is how to apply the event to the aggregate state. If you have <code class="language-text">if-else</code> statements in your state model, reconsider your modelling of events and state. </p>\n</blockquote>\n<p>Head over to the next section on <strong>specifications</strong>.</p>\n<p><a href="/docs/your-first-specifications">NEXT →</a></p>',timeToRead:2,excerpt:"We now need to design the aggregate events that will alert the system that something has happened. Some events that occur in this system…",frontmatter:{title:"Your First Events",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018",category:"akkatecture",tags:["walkthrough","akkatecture","events","csharp","dotnet"]},fields:{slug:"/your-first-events"}}},pathContext:{slug:"/your-first-events",category:"akkatecture"}}}});
//# sourceMappingURL=path---docs-your-first-events-a43a0c1144175497afac.js.map