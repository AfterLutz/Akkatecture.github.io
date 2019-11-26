webpackJsonp([79135866311530],{415:function(t,e){t.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Getting Started",lesson:1,category:"akkatecture",chapter:1,type:"docs"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Primitives",lesson:1,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/primitives"}}},{node:{frontmatter:{title:"Walkthrough Introduction",lesson:1,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/walkthrough-introduction"}}},{node:{frontmatter:{title:"Sagas",lesson:1,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/sagas"}}},{node:{frontmatter:{title:"Tips and Tricks",lesson:1,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/tips-and-tricks"}}},{node:{frontmatter:{title:"Aggregates",lesson:2,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/aggregates"}}},{node:{frontmatter:{title:"Your First Aggregate",lesson:2,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Articles",lesson:2,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/articles"}}},{node:{frontmatter:{title:"Events",lesson:3,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/events"}}},{node:{frontmatter:{title:"Your First Commands",lesson:3,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-commands"}}},{node:{frontmatter:{title:"Clustering",lesson:3,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/clustering"}}},{node:{frontmatter:{title:"Videos",lesson:3,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/videos"}}},{node:{frontmatter:{title:"Commands",lesson:4,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/commands"}}},{node:{frontmatter:{title:"Your First Events",lesson:4,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-events"}}},{node:{frontmatter:{title:"Production Readiness",lesson:4,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/production-readiness"}}},{node:{frontmatter:{title:"Specifications",lesson:5,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/specifications"}}},{node:{frontmatter:{title:"Your First Specifications",lesson:5,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-specifications"}}},{node:{frontmatter:{title:"Event Upgrading",lesson:5,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/event-upgrading"}}},{node:{frontmatter:{title:"Subscribers",lesson:6,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/subscribers"}}},{node:{frontmatter:{title:"Your First Aggregate Test",lesson:6,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate-test"}}},{node:{frontmatter:{title:"Testing Aggregates",lesson:6,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/testing-aggregates"}}},{node:{frontmatter:{title:"Scheduled Jobs",lesson:7,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/scheduled-jobs"}}},{node:{frontmatter:{title:"Your First Aggregate Saga",lesson:7,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate-saga"}}},{node:{frontmatter:{title:"Akka",lesson:8,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/akka"}}},{node:{frontmatter:{title:"Your First Subscribers",lesson:8,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-subscribers"}}},{node:{frontmatter:{title:"Configuration",lesson:9,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/configuration"}}},{node:{frontmatter:{title:"Your First Projections",lesson:9,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-projections"}}},{node:{frontmatter:{title:"Walkthrough Ending",lesson:10,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/walkthrough-ending"}}}]},postBySlug:{html:'<p>Also sometimes known as event upcasting. At some point you might find the need to replace a event with zero or more events. Some use cases might be:</p>\n<ul>\n<li>A previous application version introduced a domain error in the form of a wrong event being emitted from the aggregate.</li>\n<li>The domain has changed, either from a change in requirements or simply from a better understanding of the domain.</li>\n</ul>\n<p>In the above cases, Akkatecture suggests that you implement an <code class="language-text">AggregateEventUpcaster&lt;,&gt;</code> and then you can add your own upcast implementation by implementing <code class="language-text">IUpcast&lt;,&gt;</code> on the upcaster. Lets do this with an example.</p>\n<p>Imagine we have an OrderAggregate that emits <code class="language-text">ProductAddedEvent</code>s, due to new domain improvements or required it has been deemed necessary to have a new version of that event called <code class="language-text">ProductAddedEventV2</code>. We make changes to the aggregate to emit the new version of the event, but we have a problem in that the old event is persisted in the event journal. To remedy this we will implement a suitable <code class="language-text">AggregateEventUpcaster&lt;,&gt;</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderAggregateEventUpcaster</span> <span class="token punctuation">:</span> <span class="token class-name">AggregateEventUpcaster</span><span class="token operator">&lt;</span>OrderAggregate<span class="token punctuation">,</span> OrderId<span class="token operator">></span><span class="token punctuation">,</span>\n        IUpcast<span class="token operator">&lt;</span>ProductAddedEventV2<span class="token punctuation">,</span> ProductAddedEvent<span class="token operator">></span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">public</span> <span class="token class-name">ProductAddedEventV2</span> <span class="token function">Upcast</span><span class="token punctuation">(</span><span class="token class-name">ProductAddedEvent</span> aggregateEvent<span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ProductAddedEventV2</span><span class="token punctuation">(</span>\n                aggregateEvent<span class="token punctuation">.</span>AggregateId<span class="token punctuation">,</span>\n                <span class="token comment">/* other things to enrich the event */</span>\n                <span class="token keyword">string</span><span class="token punctuation">.</span>Empty<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span></code></pre>\n      </div>\n<p>and then our read journal hocon configuration requires the following to be added to it</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json">akka.persistence <span class="token punctuation">{</span>\n    journal <span class="token punctuation">{</span>\n        plugin = <span class="token string">""</span>akka.persistence.journal.some-plugin<span class="token string">""</span>\n        some-plugin <span class="token punctuation">{</span>\n\t\t\tevent-adapters <span class="token punctuation">{</span>\n                ##fully qualified class name and assembly of the upcaster\n\t\t\t\taggregate-event-upcaster  = <span class="token string">""</span>YourDomain.OrderAggregateEventUpcaster<span class="token punctuation">,</span> YourDomain<span class="token string">""</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t\tevent-adapter-bindings = <span class="token punctuation">{</span>\n\t\t\t\t<span class="token string">""</span>Akkatecture.Aggregates.ICommittedEvent<span class="token punctuation">,</span> Akkatecture<span class="token string">""</span> = aggregate-event-upcaster\n\t\t\t<span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Now in our order aggrege state, we only need to implement the apply method of the new aggregate event</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderState</span> <span class="token punctuation">:</span> <span class="token class-name">AggregateState</span><span class="token operator">&lt;</span>OrderState<span class="token punctuation">,</span> OrderId<span class="token operator">></span><span class="token punctuation">,</span>\n    IApply<span class="token operator">&lt;</span>ProductAddedEventV2<span class="token operator">></span><span class="token punctuation">,</span>\n    IApply<span class="token operator">&lt;</span>ProductRemovedEvent<span class="token operator">></span><span class="token punctuation">,</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token class-name">Products</span> Products <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">private</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">Apply</span><span class="token punctuation">(</span><span class="token class-name">ProductRemovedEvent</span> aggregateEvent<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Products<span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span>aggregateEvent<span class="token punctuation">.</span>Product<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">Apply</span><span class="token punctuation">(</span><span class="token class-name">ProductAddedEventV2</span> aggregateEvent<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Products<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>aggregateEvent<span class="token punctuation">.</span>Product<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<blockquote>\n<p>The event upcaster works as a normal <code class="language-text">IReadEventAdapter</code> from <a href="https://getakka.net/articles/persistence/event-adapters.html">akka.net</a>.</p>\n</blockquote>',timeToRead:2,excerpt:"Also sometimes known as event upcasting. At some point you might find the need to replace a event with zero or more events. Some use cases…",frontmatter:{title:"Event Upgrading",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018",category:"akkatecture",tags:["advanced-concepts","akkatecture","csharp","dotnet"]},fields:{slug:"/event-upgrading"}}},pathContext:{slug:"/event-upgrading",category:"akkatecture"}}}});
//# sourceMappingURL=path---docs-event-upgrading-b74df1a1540804c67655.js.map