webpackJsonp([0x737ee0414335],{434:function(s,n){s.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Aggregates",lesson:2,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/aggregates"}}},{node:{frontmatter:{title:"Event Upgrading",lesson:5,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/event-upgrading"}}},{node:{frontmatter:{title:"Commands",lesson:4,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/commands"}}},{node:{frontmatter:{title:"Clustering",lesson:3,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/clustering"}}},{node:{frontmatter:{title:"Production Readiness",lesson:4,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/production-readiness"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Sagas",lesson:1,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/sagas"}}},{node:{frontmatter:{title:"Events",lesson:3,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/events"}}},{node:{frontmatter:{title:"Configuration",lesson:8,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/configuration"}}},{node:{frontmatter:{title:"Akka",lesson:7,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/akka"}}},{node:{frontmatter:{title:"Testing Actors",lesson:6,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/testing-actors"}}},{node:{frontmatter:{title:"Your First Aggregate",lesson:2,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate"}}},{node:{frontmatter:{title:"Primitives",lesson:1,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/primitives"}}},{node:{frontmatter:{title:"Walkthrough Ending",lesson:9,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/walkthrough-ending"}}},{node:{frontmatter:{title:"Walkthrough Introduction",lesson:1,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/walkthrough-introduction"}}},{node:{frontmatter:{title:"Your First Commands",lesson:3,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-commands"}}},{node:{frontmatter:{title:"Your First Aggregate Saga",lesson:6,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate-saga"}}},{node:{frontmatter:{title:"Your First Read Models",lesson:8,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-read-models"}}},{node:{frontmatter:{title:"Subscribers",lesson:6,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/subscribers"}}},{node:{frontmatter:{title:"Your First Events",lesson:4,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-events"}}},{node:{frontmatter:{title:"Specifications",lesson:5,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/specifications"}}},{node:{frontmatter:{title:"Your First Specifications",lesson:5,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-specifications"}}},{node:{frontmatter:{title:"Your First Subscribers",lesson:7,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-subscribers"}}},{node:{frontmatter:{title:"Getting Started",lesson:1,category:"akkatecture",chapter:1,type:"docs"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Videos",lesson:3,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/videos"}}},{node:{frontmatter:{title:"Articles",lesson:2,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/articles"}}},{node:{frontmatter:{title:"Tips and Tricks",lesson:1,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/tips-and-tricks"}}}]},postBySlug:{html:'<p>If we look back at our task requirements, the last one states that;\n<em>The bank would like to keep track of how much money it has gained as revenue as a result of the transaction fees.</em></p>\n<p>One way to satisfy this requirement is to use a <code class="language-text">DomainEventSubscriber</code> that Subscribes to the <code class="language-text">FeesDeductedEvent</code> domain event, which then tells the persistence mechanism to store the result so that it can later be read by a <code class="language-text">ReadModel</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token comment">//Walkthrough.Domain/Subscribers/Revenue/RevenueSubscriber.cs</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RevenueSubscriber</span> <span class="token punctuation">:</span> <span class="token class-name">DomainEventSubscriber</span><span class="token punctuation">,</span>\n    ISubscribeTo<span class="token operator">&lt;</span>Account<span class="token punctuation">,</span>AccountId<span class="token punctuation">,</span>FeesDeductedEvent<span class="token operator">></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token class-name">IActorRef</span> RevenueRepository <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>    \n    <span class="token keyword">public</span> <span class="token function">RevenueSubscriber</span><span class="token punctuation">(</span><span class="token class-name">IActorRef</span> revenueRepository<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        RevenueRepository <span class="token operator">=</span> revenueRepository<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n        \n    <span class="token keyword">public</span> <span class="token class-name">Task</span> <span class="token function">Handle</span><span class="token punctuation">(</span>IDomainEvent<span class="token operator">&lt;</span>Account<span class="token punctuation">,</span> AccountId<span class="token punctuation">,</span> FeesDeductedEvent<span class="token operator">></span> domainEvent<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> command <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AddRevenueCommand</span><span class="token punctuation">(</span>domainEvent<span class="token punctuation">.</span>AggregateEvent<span class="token punctuation">.</span>Amount<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        RevenueRepository<span class="token punctuation">.</span><span class="token function">Tell</span><span class="token punctuation">(</span>command<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            \n        <span class="token keyword">return</span> Task<span class="token punctuation">.</span>CompletedTask<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Our mock revenue repository is going to be modelled as an actor, but typically this would be a type of persistent storage that applies to your use case.</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token comment">//Walkthrough.Domain/Repositories/RevenueRepository.cs</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RevenueRepository</span> <span class="token punctuation">:</span> <span class="token class-name">ReceiveActor</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token class-name">Money</span> Revenue <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">private</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Money</span><span class="token punctuation">(</span><span class="token number">0.00</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">public</span> <span class="token keyword">int</span> Transactions <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">private</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token function">RevenueRepository</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token generic-method"><span class="token function">Receive</span><span class="token punctuation">&lt;</span><span class="token class-name">AddRevenueCommand</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>Handle<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token generic-method"><span class="token function">Receive</span><span class="token punctuation">&lt;</span><span class="token class-name">GetRevenueQuery</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>Handle<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">private</span> <span class="token keyword">bool</span> <span class="token function">Handle</span><span class="token punctuation">(</span><span class="token class-name">AddRevenueCommand</span> command<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Revenue <span class="token operator">=</span> Revenue <span class="token operator">+</span> command<span class="token punctuation">.</span>AmountToAdd<span class="token punctuation">;</span>\n        Transactions<span class="token operator">++</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token keyword">true</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">private</span> <span class="token keyword">bool</span> <span class="token function">Handle</span><span class="token punctuation">(</span><span class="token class-name">GetRevenueQuery</span> query<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> readModel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RevenueReadModel</span><span class="token punctuation">(</span>Revenue<span class="token punctuation">,</span> Transactions<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        Sender<span class="token punctuation">.</span><span class="token function">Tell</span><span class="token punctuation">(</span>readModel<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token keyword">true</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>This repository handles a <code class="language-text">AddRevenueCommand</code> which is just a data transfer object (dto) that holds the amount of money to add to the current revenue. The repository also handles a query <code class="language-text">GetRevenueQuery</code>. You can now see a hint of how the read/query side of an Akkatecture application might work. On to the next section on <strong>read models</strong>.</p>\n<p><a href="/docs/your-first-read-models">Next →</a></p>',timeToRead:1,excerpt:"If we look back at our task requirements, the last one states that;\n The bank would like to keep track of how much money it has gained as…",frontmatter:{title:"Your First Subscribers",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018",category:"akkatecture",tags:["walkthrough","akkatecture","subscriber","csharp","dotnet"]},fields:{slug:"/your-first-subscribers"}}},pathContext:{slug:"/your-first-subscribers",category:"akkatecture"}}}});
//# sourceMappingURL=path---docs-your-first-subscribers-3cb0a3df9953f71c33b1.js.map