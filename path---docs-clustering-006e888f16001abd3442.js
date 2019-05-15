webpackJsonp([57217333813249],{415:function(t,e){t.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Getting Started",lesson:1,category:"akkatecture",chapter:1,type:"docs"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Primitives",lesson:1,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/primitives"}}},{node:{frontmatter:{title:"Walkthrough Introduction",lesson:1,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/walkthrough-introduction"}}},{node:{frontmatter:{title:"Sagas",lesson:1,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/sagas"}}},{node:{frontmatter:{title:"Tips and Tricks",lesson:1,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/tips-and-tricks"}}},{node:{frontmatter:{title:"Aggregates",lesson:2,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/aggregates"}}},{node:{frontmatter:{title:"Your First Aggregate",lesson:2,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Articles",lesson:2,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/articles"}}},{node:{frontmatter:{title:"Events",lesson:3,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/events"}}},{node:{frontmatter:{title:"Your First Commands",lesson:3,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-commands"}}},{node:{frontmatter:{title:"Clustering",lesson:3,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/clustering"}}},{node:{frontmatter:{title:"Videos",lesson:3,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/videos"}}},{node:{frontmatter:{title:"Commands",lesson:4,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/commands"}}},{node:{frontmatter:{title:"Your First Events",lesson:4,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-events"}}},{node:{frontmatter:{title:"Production Readiness",lesson:4,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/production-readiness"}}},{node:{frontmatter:{title:"Specifications",lesson:5,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/specifications"}}},{node:{frontmatter:{title:"Your First Specifications",lesson:5,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-specifications"}}},{node:{frontmatter:{title:"Event Upgrading",lesson:5,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/event-upgrading"}}},{node:{frontmatter:{title:"Subscribers",lesson:6,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/subscribers"}}},{node:{frontmatter:{title:"Your First Aggregate Test",lesson:6,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate-test"}}},{node:{frontmatter:{title:"Testing Aggregates",lesson:6,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/testing-aggregates"}}},{node:{frontmatter:{title:"Akka",lesson:7,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/akka"}}},{node:{frontmatter:{title:"Your First Aggregate Saga",lesson:7,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate-saga"}}},{node:{frontmatter:{title:"Configuration",lesson:8,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/configuration"}}},{node:{frontmatter:{title:"Your First Subscribers",lesson:8,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-subscribers"}}},{node:{frontmatter:{title:"Your First Projections",lesson:9,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-projections"}}},{node:{frontmatter:{title:"Walkthrough Ending",lesson:10,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/walkthrough-ending"}}}]},postBySlug:{html:'<p>To get clustering working in Akkatecture, you need to install Akkatecture\'s companion package called <code class="language-text">Akkatecture.Clustering</code> to your .net project. This library includes some factories to get your clustered actorsystem going, without doing any changes to your domain code (as it should be). To install the NuGet package from package manager command prompt:</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token comment">//Add the Akkatecture.Clustering package to your project named FirstAkkatectureProject.</span>\nPM<span class="token operator">></span> Install<span class="token operator">-</span><span class="token class-name">Package</span> Akkatecture<span class="token punctuation">.</span>Clustering <span class="token operator">-</span><span class="token class-name">ProjectName</span> FirstAkkatectureProject</code></pre>\n      </div>\n<p>To start an aggregate manager in a clustered environment, you need to use the <code class="language-text">ClusterFactory&lt;,,&gt;.StartAggregateCluster(...)</code> method as follows:</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token comment">//on worker node</span>\n<span class="token keyword">var</span> userAccountAggregateManagerCluster <span class="token operator">=</span> ClusterFactory<span class="token operator">&lt;</span>UserAccountAggregateManager<span class="token punctuation">,</span> UserAccountAggregate<span class="token punctuation">,</span> UserAccountId<span class="token operator">></span>\n    <span class="token punctuation">.</span><span class="token function">StartAggregateCluster</span><span class="token punctuation">(</span>actorSystem<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>The above method invocation will start the actual cluster on that particular node, in addition to returning an <code class="language-text">IActorRef</code>. It is usually suitable to do this on beefy worker nodes which are responsible for carrying out the more intense units of computation in your application.</p>\n<p>To start a proxy to the aggregate manager in a clustered environment, you need to use the <code class="language-text">ClusterFactory&lt;,,&gt;.StartAggregateClusterProxy(...)</code> method as follows:</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token comment">//on clientside node</span>\n<span class="token keyword">var</span> userAccountAggregateManagerProxy <span class="token operator">=</span> ClusterFactory<span class="token operator">&lt;</span>UserAccountAggregateManager<span class="token punctuation">,</span> UserAccountAggregate<span class="token punctuation">,</span> UserAccountId<span class="token operator">></span>\n    <span class="token punctuation">.</span><span class="token function">StartAggregateClusterProxy</span><span class="token punctuation">(</span>actorSystem<span class="token punctuation">,</span> proxyRoleName<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>This will start a proxy into a <code class="language-text">userAccountAggregateManagerCluster</code>. The reference returned by this factory method is a reference to the actual cluster. One would typically proxy commands into a cluster from a client application (api or console or desktop app). All commands for that aggregate manager sent through that proxy reference will be sharded accordingly.</p>\n<p>Similarly, to start an aggregate saga manager in a clustered environment, use the <code class="language-text">ClusterFactory&lt;,,,&gt;.StartAggregateSagaCluster(...)</code> to instantiate the saga manager:</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token comment">//on worker node</span>\nClusterFactory<span class="token operator">&lt;</span>MoneyTransferSagaManager<span class="token punctuation">,</span> MoneyTransferSaga<span class="token punctuation">,</span> MoneyTransferSagaId<span class="token punctuation">,</span> MoneyTransferSagaLocator<span class="token operator">></span>\n    <span class="token punctuation">.</span><span class="token function">StartAggregateSagaCluster</span><span class="token punctuation">(</span>actorSystem<span class="token punctuation">,</span>moneyTransferSagaFactory<span class="token punctuation">,</span> proxyRoleName<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>We usually do not need to get a reference to proxy into the aggregate saga manager because they are invoked through domain events. If you instantiate a saga cluster on the worker that would be enough.</p>\n<p>Clustering is a huge concept with many moving parts, in the meantime, refer to the akka.net documentation on clustering if you want more configuration power. If you want to see a working Akkatecture clustering sample, have a look at the <a href="https://github.com/Lutando/Akkatecture/tree/master/examples/cluster">cluster sample</a> Which makes use of <code class="language-text">Akkatecture.Cluster</code> factory methods.</p>',timeToRead:2,excerpt:"To get clustering working in Akkatecture, you need to install Akkatecture's companion package called   to your .net project. This library…",frontmatter:{title:"Clustering",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018",category:"akkatecture",tags:["advanced-concepts","akkatecture","csharp","dotnet"]},fields:{slug:"/clustering"}}},pathContext:{slug:"/clustering",category:"akkatecture"}}}});
//# sourceMappingURL=path---docs-clustering-006e888f16001abd3442.js.map