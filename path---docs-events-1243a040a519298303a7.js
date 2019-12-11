webpackJsonp([0x7b7b9189fcda],{416:function(e,a){e.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Getting Started",lesson:1,category:"akkatecture",chapter:1,type:"docs"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Primitives",lesson:1,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/primitives"}}},{node:{frontmatter:{title:"Walkthrough Introduction",lesson:1,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/walkthrough-introduction"}}},{node:{frontmatter:{title:"Sagas",lesson:1,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/sagas"}}},{node:{frontmatter:{title:"Tips and Tricks",lesson:1,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/tips-and-tricks"}}},{node:{frontmatter:{title:"Aggregates",lesson:2,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/aggregates"}}},{node:{frontmatter:{title:"Your First Aggregate",lesson:2,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Articles",lesson:2,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/articles"}}},{node:{frontmatter:{title:"Events",lesson:3,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/events"}}},{node:{frontmatter:{title:"Your First Commands",lesson:3,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-commands"}}},{node:{frontmatter:{title:"Clustering",lesson:3,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/clustering"}}},{node:{frontmatter:{title:"Videos",lesson:3,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/videos"}}},{node:{frontmatter:{title:"Commands",lesson:4,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/commands"}}},{node:{frontmatter:{title:"Your First Events",lesson:4,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-events"}}},{node:{frontmatter:{title:"Production Readiness",lesson:4,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/production-readiness"}}},{node:{frontmatter:{title:"Specifications",lesson:5,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/specifications"}}},{node:{frontmatter:{title:"Your First Specifications",lesson:5,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-specifications"}}},{node:{frontmatter:{title:"Event Upgrading",lesson:5,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/event-upgrading"}}},{node:{frontmatter:{title:"Subscribers",lesson:6,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/subscribers"}}},{node:{frontmatter:{title:"Your First Aggregate Test",lesson:6,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate-test"}}},{node:{frontmatter:{title:"Testing Aggregates",lesson:6,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/testing-aggregates"}}},{node:{frontmatter:{title:"Scheduled Jobs",lesson:7,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/scheduled-jobs"}}},{node:{frontmatter:{title:"Your First Aggregate Saga",lesson:7,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate-saga"}}},{node:{frontmatter:{title:"Akka",lesson:8,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/akka"}}},{node:{frontmatter:{title:"Your First Subscribers",lesson:8,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-subscribers"}}},{node:{frontmatter:{title:"Configuration",lesson:9,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/configuration"}}},{node:{frontmatter:{title:"Your First Projections",lesson:9,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-projections"}}},{node:{frontmatter:{title:"Walkthrough Ending",lesson:10,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/walkthrough-ending"}}}]},postBySlug:{html:'<p>In an event sourced system like Akkatecture, an aggregate\'s state can be described as a function that applies series of stored events. Functionally speaking, the state is the result of a left fold over the stream of events. Upon aggregate instatiation the aggregate regains its state by replaying the events stored in the event journal. Aggregate events are also published via akka.net\'s <a href="http://getakka.net/api/Akka.Event.EventStream.html">event stream</a>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PingEvent</span> <span class="token punctuation">:</span> <span class="token class-name">AggregateEvent</span><span class="token operator">&lt;</span>PingAggregate<span class="token punctuation">,</span> PingAggregateId<span class="token operator">></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">long</span> TimeSent <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">string</span> Data <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token function">PingEvent</span><span class="token punctuation">(</span>\n    <span class="token keyword">long</span> timeSent<span class="token punctuation">,</span>\n    <span class="token keyword">string</span> data<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        TimeSent <span class="token operator">=</span> timeSent<span class="token punctuation">;</span>\n        Data <span class="token operator">=</span> data<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<blockquote>\n<p>Please make sure to read the section on <a href="/docs/tips-and-tricks#events">event tips and tricks</a> for some additional notes on events, and how to design them.</p>\n</blockquote>\n<h2 id="emitting-events"><a href="#emitting-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Emitting Events</h2>\n<p>In order to emit an event from an aggregate, call the <code class="language-text">AggregateRoot.Emit(...)</code> method which commits the event to the event store and then applies the event to the aggregate state. In akka.net terms it calls the <code class="language-text">PersistentActor.Persist(...)</code> method with a call-back to apply the event to aggregate state after persistence is successful. Below is an example of how it works:</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">bool</span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token class-name">PingCommand</span> command<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">var</span> aggregateEvent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PingEvent</span><span class="token punctuation">(</span>command<span class="token punctuation">.</span>Data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">Emit</span><span class="token punctuation">(</span>aggregateEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token keyword">true</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>If there is a requirement to Emit multiple events as a consequence of a command being handled, there is an <code class="language-text">EmitAll(...)</code> method that guarantees the transaction and consistency boundary of persisting multiple events to the event journal.</p>\n<blockquote>\n<p>In Akkatecture, the act of emitting an event does three things, it persists the event to the event journal, it then applies the event to aggregate state, and finally the aggregate will publish the event as a <code class="language-text">IDomainEvent</code> to the akka.net event stream. Please continue reading about <a href="/docs/events#published-events">published events</a> to understand how aggregate events look like when they get published outside of the aggregate root boundary.</p>\n</blockquote>\n<blockquote>\n<p>Events in Akkatecture are journalled as <code class="language-text">IComittedEvent&lt;,,&gt;</code></p>\n</blockquote>\n<h2 id="applying-events"><a href="#applying-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Applying Events</h2>\n<p>Akkatecture has a rather opinionated way of approaching the application of events. Events that are emitted are only to be applied to its own aggregate state. that makes it rather convienient to isolate the place where aggregate events get applied. To register an aggregate event applyer method on the aggregate state, all you have to do is implement the <code class="language-text">IApply&lt;&gt;</code> interface on your aggregate state.</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PingState</span> <span class="token punctuation">:</span> <span class="token class-name">AggregateState</span><span class="token operator">&lt;</span>PingAggregate<span class="token punctuation">,</span> PingAggregate<span class="token operator">></span><span class="token punctuation">,</span>\n    IApply<span class="token operator">&lt;</span>PingEvent<span class="token operator">></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">private</span> List<span class="token operator">&lt;</span><span class="token keyword">string</span><span class="token operator">></span> Pings <span class="token punctuation">{</span><span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token generic-method"><span class="token function">List</span><span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">Apply</span><span class="token punctuation">(</span><span class="token class-name">PingEvent</span> aggregateEvent<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Pings<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>aggregateEvent<span class="token punctuation">.</span>Data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="replaying-events"><a href="#replaying-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Replaying Events</h2>\n<p>Akkatecture has defined default behaviours to employ when replaying events persisted to the event journal. This behaviour is defined by the <code class="language-text">Recover(...)</code> method on the base <code class="language-text">AggregateRoot&lt;,,&gt;</code> class. Proceed with caution when using <code class="language-text">Become()</code> for actor behaviours as this effectively clears the command and recovery handlers of the actor.</p>\n<blockquote>\n<p>You need to make sure that you have configured a persistent event store before deploying your application to production since the default persistent provider in Akkatecture is using the same default provider that is used in akka.net persistent actors, namely, the in-memory event journal and in-memory snapshot store. Go ahead and look at how this all works in our <a href="/docs/production-readiness#event-store">event store production readiness</a> documentation.</p>\n</blockquote>\n<h2 id="published-events"><a href="#published-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Published Events</h2>\n<p>In domain driven design end event sourcing the application of aggregate events to it\'s state is a means to maintain a consitency boundary. When an aggregate publishes an event, the aggregate is letting the rest of the domain know that something has happened. This event will get picked up by any parties interested in that particular event.</p>\n<blockquote>\n<p>CAP theory comes into play as soon as you publish an event. The "world view" of your other domain entities will be in-consistent with the world view of your aggregates at the time of event publishing. Keep this in mind when designing your system. The best you can hope for is an eventually consistent system within the Akkatecture framework.</p>\n</blockquote>\n<h3 id="domain-events"><a href="#domain-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Domain Events</h3>\n<p>Domain events are aggregate events that have been published. In Akkatecture a domain event looks as follows:</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IDomainEvent</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">//CLR type of the aggregate</span>\n    <span class="token class-name">Type</span> AggregateType <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token comment">//CLR type of the identity</span>\n    <span class="token class-name">Type</span> IdentityType <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token comment">//CLR type of the aggregate event</span>\n    <span class="token class-name">Type</span> EventType <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token comment">//The aggregate sequence number</span>\n    <span class="token keyword">long</span> AggregateSequenceNumber <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token comment">//Metadata bag of any and all event metadata</span>\n    <span class="token class-name">IMetadata</span> Metadata <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token comment">//The timestamp of when the event was published</span>\n    <span class="token class-name">DateTimeOffset</span> Timestamp <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token comment">//The aggregates identity</span>\n    <span class="token class-name">IIdentity</span> <span class="token function">GetIdentity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">//The aggregate event</span>\n    <span class="token class-name">IAggregateEvent</span> <span class="token function">GetAggregateEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>It is important to note here is that the <code class="language-text">AggregateSequenceNumber</code> is the "age" of the aggregate which emitted that particular event at that particular moment in time. So if an aggregate has applied at most 4 events since its first incarnation, then the 4th domain event from that aggregate root will have an <code class="language-text">AggregateSequenceNumber</code> of <code class="language-text">4</code>.</p>\n<h3 id="event-metadata"><a href="#event-metadata" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Event Metadata</h3>\n<p>The <code class="language-text">IMetadata</code> of the domain event, is essentially a dictionary of keys and values of any metadata related to that domain event. You can add anything to this container to be used as a \'bag of tricks\' for your domain. You can add things like telemetry data to this IMetadata container. The container should be seen as a mechanism to allow you to better enrich the domain event without having to add unnecessary or unrelated data contained in the <code class="language-text">IAggregateEvent</code>. The aggregate event should be mostly pure to the aggregate root that emitted the event, but you can add additional information to it via the metadata container.</p>\n<p>To add your own <code class="language-text">IMetadata</code> to your DomainEvent ontop of the Akkatecture defaults, use the <code class="language-text">Emit(aggregateEvent, metadata)</code> method when doing an event emit from withing your aggregate root.</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">Ping</span><span class="token punctuation">(</span><span class="token class-name">PingCommand</span> command<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">//After domain logic passes</span>\n\n    <span class="token keyword">var</span> metadata <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Metadata</span>\n    <span class="token punctuation">{</span>\n        <span class="token punctuation">{</span><span class="token string">"environment"</span><span class="token punctuation">,</span><span class="token string">"staging"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span><span class="token string">"app_version"</span><span class="token punctuation">,</span><span class="token string">"1.0.3"</span><span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    <span class="token function">Emit</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PingEvent</span><span class="token punctuation">(</span>command<span class="token punctuation">.</span>Data<span class="token punctuation">)</span><span class="token punctuation">,</span> metadata<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<blockquote>\n<p>The <code class="language-text">Metadata</code> class works just like a dictionary. You can add things like operation identifiers, build numbers, environment names, deployment regions, performance data, and other things to this metadata container, it is really up to you. The quicker you collect telemetry the better.</p>\n</blockquote>\n<p><a href="/docs/commands">Next, Commands →</a></p>',timeToRead:5,excerpt:"In an event sourced system like Akkatecture, an aggregate's state can be described as a function that applies series of stored events…",frontmatter:{title:"Events",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018",category:"akkatecture",tags:["basic-concepts","akkatecture","csharp","dotnet"]},fields:{slug:"/events"}}},pathContext:{slug:"/events",category:"akkatecture"}}}});
//# sourceMappingURL=path---docs-events-1243a040a519298303a7.js.map