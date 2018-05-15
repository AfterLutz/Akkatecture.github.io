webpackJsonp([7809046766390],{395:function(n,a){n.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Aggregates",lesson:2,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/aggregates"}}},{node:{frontmatter:{title:"Akka",lesson:5,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/akka"}}},{node:{frontmatter:{title:"Commands",lesson:4,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/commands"}}},{node:{frontmatter:{title:"Events",lesson:3,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/events"}}},{node:{frontmatter:{title:"Subscribers",lesson:6,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/subscribers"}}},{node:{frontmatter:{title:"Configuration",lesson:7,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/configuration"}}},{node:{frontmatter:{title:"Primitives",lesson:1,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/primitives"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Clustering",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/clustering"}}},{node:{frontmatter:{title:"Sagas",lesson:1,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/sagas"}}},{node:{frontmatter:{title:"Production Readiness",lesson:4,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/production-readiness"}}},{node:{frontmatter:{title:"Articles",lesson:2,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/articles"}}},{node:{frontmatter:{title:"Tips and Tricks",lesson:1,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/tips-and-tricks"}}},{node:{frontmatter:{title:"Getting Started",lesson:1,category:"akkatecture",chapter:1,type:"docs"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Your First Aggregate",lesson:1,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate"}}},{node:{frontmatter:{title:"Your First Aggregate Saga",lesson:4,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate-saga"}}},{node:{frontmatter:{title:"Your First Read Model",lesson:3,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-read-model"}}},{node:{frontmatter:{title:"Your First Subscriber",lesson:2,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-subscriber"}}},{node:{frontmatter:{title:"Videos",lesson:3,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/videos"}}}]},postBySlug:{html:'<p>Commands are the basic value objects, or models, that represent write operations that you can perform in your domain.</p>\n<p>As an example, one might implement create this command for initiating a bank transfer from.</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TransferMoneyCommand</span> <span class="token punctuation">:</span> <span class="token class-name">Command</span><span class="token operator">&lt;</span>AccountAggregate<span class="token punctuation">,</span> AccountId<span class="token operator">></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token class-name">Money</span> Amount <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> DestinationAccountId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token function">UserUpdatePasswordCommand</span><span class="token punctuation">(</span>\n        <span class="token class-name">AccountId</span> id<span class="token punctuation">,</span>\n        <span class="token class-name">AccountId</span> destinationAccountId<span class="token punctuation">,</span>\n        <span class="token class-name">Money</span> amount<span class="token punctuation">)</span>\n        <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Amount <span class="token operator">=</span> amount<span class="token punctuation">;</span>\n        DestinationAccountId <span class="token operator">=</span> destinationAccountId<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<blockquote>\n<p>Note that the Money class is merely a value object created to hold the password and do basic validation. Read the article regarding value objects for more information. Also, you don’t have to use the default Akkatecture <code class="language-text">Command&lt;,&gt;</code> implementation, you can create your own, it merely have to implement the <code class="language-text">ICommand&lt;,&gt;</code> interface.</p>\n</blockquote>\n<p>A command by itself doesn’t do anything and will be swollowed by the underlying actor as unprocessed. To make a command work, you need to implement at least command handler which is responsible for invoking the aggregate\'s command handler.</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp">    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AccountAggregate</span> <span class="token punctuation">:</span> <span class="token class-name">AggregateRoot</span><span class="token operator">&lt;</span>AccountAggregate<span class="token punctuation">,</span> AccountAggregateId<span class="token punctuation">,</span> AccountState<span class="token operator">></span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">public</span> <span class="token function">AccountAggregate</span><span class="token punctuation">(</span><span class="token class-name">AccountAggregateId</span> aggregateId<span class="token punctuation">)</span>\n            <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span>aggregateId<span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token generic-method"><span class="token function">Command</span><span class="token punctuation">&lt;</span><span class="token class-name">TransferMoneyCommand</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>Execute<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">public</span> <span class="token keyword">bool</span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token class-name">TransferMoneyCommand</span> command<span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n          <span class="token keyword">if</span><span class="token punctuation">(</span>State<span class="token punctuation">.</span>Balance <span class="token operator">&lt;</span> command<span class="token punctuation">.</span>Amount<span class="token punctuation">)</span>\n          <span class="token punctuation">{</span>\n            <span class="token comment">//Domain Error, not enough money to send</span>\n          <span class="token punctuation">}</span>\n          <span class="token keyword">if</span><span class="token punctuation">(</span>Id <span class="token operator">==</span> command<span class="token punctuation">.</span>DestinationAccountId<span class="token punctuation">)</span>\n          <span class="token punctuation">{</span>\n            <span class="token comment">//Domain Error, cant send money to yourself</span>\n          <span class="token punctuation">}</span>\n\n          <span class="token function">Emit</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MoneyTransferedEvent</span><span class="token punctuation">(</span>command<span class="token punctuation">.</span>Amount<span class="token punctuation">,</span> command<span class="token punctuation">.</span>DestinationAccountId<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n          <span class="token comment">//tell akkas underlying actor that you handled the command</span>\n          <span class="token keyword">return</span> <span class="token keyword">true</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="ensure-idempotency"><a href="#ensure-idempotency" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Ensure Idempotency</h2>\n<p>Detecting duplicate operations can be hard, especially if you have a distributed application, or simply a web application. Consider the following simplified scenario.</p>\n<ol>\n<li>The user wants to send her money.</li>\n<li>The user fills in the "send money form".</li>\n<li>As user is impatient, or by accident, the user submits the for twice.</li>\n<li>The first web request completes, is validated, and the money is sent. However, as the browser is waiting on the first web request, this result is ignored</li>\n<li>The second web request either transfers money again since there is enough balance, or  throws a domain error as there is no more balance left in the account.</li>\n<li>The user is presented with a error on the web page, or has accidently sent money twice when she only meant to send it once.</li>\n</ol>\n<p>Since Akkatectures design decision dictates that aggregate roots exist as a singleton, we can deal with idempotency at the aggregate level.</p>\n<p>We can redesign our command to look like this</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TransferMoneyCommand</span> <span class="token punctuation">:</span> <span class="token class-name">Command</span><span class="token operator">&lt;</span>AccountAggregate<span class="token punctuation">,</span> AccountId<span class="token operator">></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token class-name">Money</span> Amount <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> DestinationAccountId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token function">UserUpdatePasswordCommand</span><span class="token punctuation">(</span>\n        <span class="token class-name">AccountId</span> id<span class="token punctuation">,</span>\n        <span class="token class-name">ISourceId</span> sourceId<span class="token punctuation">,</span>\n        <span class="token class-name">AccountId</span> destinationAccountId<span class="token punctuation">,</span>\n        <span class="token class-name">Money</span> amount<span class="token punctuation">)</span>\n        <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> sourceId<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Amount <span class="token operator">=</span> amount<span class="token punctuation">;</span>\n        DestinationAccountId <span class="token operator">=</span> destinationAccountId<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Note the use of the other <code class="language-text">protected</code> constructor of <code class="language-text">Command&lt;,&gt;</code> that takes a <code class="language-text">ISourceId</code> in addition to the aggregate root identity. This sourceId can be supplied from outside the aggregate boundary eg the API surface.\nYou can then use a circular buffer or "list of processed" commands within your aggregate root to reject previously seen commands.</p>\n<h2 id="easier-isourceid-calculation"><a href="#easier-isourceid-calculation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Easier ISourceId calculation</h2>\n<p>Ensuring the correct calculation of the command <code class="language-text">ISourceId</code> can be somewhat cumbersome, which is why Akkatecture provides another base command you can use, the <code class="language-text">DistinctCommand&lt;,&gt;</code>. By using the <code class="language-text">DistinctCommand&lt;,&gt;</code> you merely have to implement the <code class="language-text">GetSourceIdComponents()</code> and providing the <code class="language-text">IEnumerable&lt;byte[]&gt;</code> that makes the command unique. The bytes is used to create a deterministic GUID to be used as an ISourceId.</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TransferMoneyCommand</span> <span class="token punctuation">:</span> <span class="token class-name">DistinctCommand</span><span class="token operator">&lt;</span>AccountAggregate<span class="token punctuation">,</span> AccountId<span class="token operator">></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token class-name">Money</span> Amount <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> DestinationAccountId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token function">UserUpdatePasswordCommand</span><span class="token punctuation">(</span>\n        <span class="token class-name">AccountId</span> id<span class="token punctuation">,</span>\n        <span class="token class-name">ISourceId</span> sourceId<span class="token punctuation">,</span>\n        <span class="token class-name">AccountId</span> destinationAccountId<span class="token punctuation">,</span>\n        <span class="token class-name">Money</span> amount<span class="token punctuation">)</span>\n        <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Amount <span class="token operator">=</span> amount<span class="token punctuation">;</span>\n        DestinationAccountId <span class="token operator">=</span> destinationAccountId<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">protected</span> <span class="token keyword">override</span> IEnumerable<span class="token operator">&lt;</span><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span> <span class="token function">GetSourceIdComponents</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n      <span class="token keyword">yield</span> <span class="token keyword">return</span> Amount<span class="token punctuation">.</span><span class="token function">GetBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">yield</span> <span class="token keyword">return</span> DestinationAccountId<span class="token punctuation">.</span><span class="token function">GetBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>The <code class="language-text">GetBytes()</code> merely returns the <code class="language-text">Encoding.UTF8.GetBytes(...)</code> of the value object.</p>',timeToRead:3,excerpt:"Commands are the basic value objects, or models, that represent write operations that you can perform in your domain. As an example, one…",frontmatter:{title:"Commands",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018",category:"akkatecture",tags:["basic-concepts","akkatecture","csharp","dotnet"]},fields:{slug:"/commands"}}},pathContext:{slug:"/commands",category:"akkatecture"}}}});
//# sourceMappingURL=path---docs-commands-84b0f00b015407a18d3b.js.map