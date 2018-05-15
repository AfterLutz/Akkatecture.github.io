webpackJsonp([3656523201944],{423:function(t,s){t.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Articles",lesson:1,category:"javascript",chapter:5,type:"lesson"},fields:{slug:"/articles"}}},{node:{frontmatter:{title:"Video Content",lesson:2,category:"javascript",chapter:5,type:"lesson"},fields:{slug:"/video-content"}}},{node:{frontmatter:{title:"Getting Started",lesson:1,category:"javascript",chapter:2,type:"lesson"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Clustering",lesson:1,category:"javascript",chapter:4,type:"lesson"},fields:{slug:"/clustering"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"javascript",chapter:4,type:"lesson"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Sagas",lesson:1,category:"javascript",chapter:4,type:"lesson"},fields:{slug:"/sagas"}}},{node:{frontmatter:{title:"Production Readiness",lesson:4,category:"javascript",chapter:4,type:"lesson"},fields:{slug:"/production-readiness"}}},{node:{frontmatter:{title:"Aggregates",lesson:3,category:"javascript",chapter:1,type:"lesson"},fields:{slug:"/aggregates"}}},{node:{frontmatter:{title:"Akka",lesson:6,category:"javascript",chapter:1,type:"lesson"},fields:{slug:"/akka"}}},{node:{frontmatter:{title:"Commands",lesson:5,category:"javascript",chapter:1,type:"lesson"},fields:{slug:"/commands"}}},{node:{frontmatter:{title:"Configuration",lesson:8,category:"javascript",chapter:1,type:"lesson"},fields:{slug:"/configuration"}}},{node:{frontmatter:{title:"Events",lesson:4,category:"javascript",chapter:1,type:"lesson"},fields:{slug:"/events"}}},{node:{frontmatter:{title:"Identity",lesson:2,category:"javascript",chapter:1,type:"lesson"},fields:{slug:"/identity"}}},{node:{frontmatter:{title:"Introduction",lesson:1,category:"javascript",chapter:1,type:"lesson"},fields:{slug:"/introduction"}}},{node:{frontmatter:{title:"Your First Aggregate",lesson:1,category:"javascript",chapter:3,type:"lesson"},fields:{slug:"/your-first-aggregate"}}},{node:{frontmatter:{title:"Subscribers",lesson:7,category:"javascript",chapter:1,type:"lesson"},fields:{slug:"/subscribers"}}},{node:{frontmatter:{title:"Your First Read Model",lesson:3,category:"javascript",chapter:3,type:"lesson"},fields:{slug:"/your-first-read-model"}}},{node:{frontmatter:{title:"Your First Subscriber",lesson:2,category:"javascript",chapter:3,type:"lesson"},fields:{slug:"/your-first-subscriber"}}},{node:{frontmatter:{title:"Your First Aggregate Saga",lesson:4,category:"javascript",chapter:3,type:"lesson"},fields:{slug:"/your-first-aggregate-saga"}}}]},postBySlug:{html:'<p>Sometimes actors accumulate a lot of persisted events. This is problematic because it means that it can take a potentially long time for an actor to recover. For time-sensitive applictions, this would make nact an unsuitable proposition. Snapshotting is a way to skip replaying every single event. When a persistent actor starts up again, nact checks to see if there are any snapshots available in the <em>snapshot store</em>. Nact selects the latest snapshot. The snapshot contains the sequence number at which it was taken. The snapshot is passed as the initial state to the actor, and only the events which were persisted after the snapshot are replayed. </p>\n<p>To modify the user contacts service to support snapshotting, we refactor the code to the following:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token punctuation">{</span> messages <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'nact\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">spawnUserContactService</span> <span class="token operator">=</span> <span class="token punctuation">(</span>parent<span class="token punctuation">,</span> userId<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">spawnPersistent</span><span class="token punctuation">(</span>\n  parent<span class="token punctuation">,</span>\n  <span class="token comment">// Same function as before</span>\n  <span class="token keyword">async</span> <span class="token punctuation">(</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> contacts<span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> msg<span class="token punctuation">,</span> ctx<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token template-string"><span class="token string">`contacts:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>userId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">,</span>\n  userId<span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> snapshotEvery<span class="token punctuation">:</span> <span class="token number">20</span> <span class="token operator">*</span> messages <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>The final argument to <code class="language-text">spawnPersistent</code> is the actor properties object. Here we are using <code class="language-text">snapshotEvery</code> to instruct nact to make a snapshot every 20 messages.</p>',timeToRead:1,excerpt:"Sometimes actors accumulate a lot of persisted events. This is problematic because it means that it can take a potentially long time for an…",frontmatter:{title:"Your First Read Model",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"11/12/2017",category:"javascript",tags:["getting-started","nact","javascript","nodejs"]},fields:{slug:"/your-first-read-model"}}},pathContext:{slug:"/your-first-read-model",category:"javascript"}}}});
//# sourceMappingURL=path---lesson-javascript-your-first-read-model-c72597e6542e7f06f967.js.map