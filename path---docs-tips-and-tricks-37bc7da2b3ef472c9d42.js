webpackJsonp([40985414794637],{404:function(e,t){e.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Aggregates",lesson:2,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/aggregates"}}},{node:{frontmatter:{title:"Akka",lesson:5,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/akka"}}},{node:{frontmatter:{title:"Commands",lesson:4,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/commands"}}},{node:{frontmatter:{title:"Events",lesson:3,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/events"}}},{node:{frontmatter:{title:"Subscribers",lesson:6,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/subscribers"}}},{node:{frontmatter:{title:"Configuration",lesson:7,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/configuration"}}},{node:{frontmatter:{title:"Primitives",lesson:1,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/primitives"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Clustering",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/clustering"}}},{node:{frontmatter:{title:"Sagas",lesson:1,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/sagas"}}},{node:{frontmatter:{title:"Production Readiness",lesson:4,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/production-readiness"}}},{node:{frontmatter:{title:"Articles",lesson:2,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/articles"}}},{node:{frontmatter:{title:"Tips and Tricks",lesson:1,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/tips-and-tricks"}}},{node:{frontmatter:{title:"Getting Started",lesson:1,category:"akkatecture",chapter:1,type:"docs"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Your First Aggregate",lesson:1,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate"}}},{node:{frontmatter:{title:"Your First Aggregate Saga",lesson:4,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate-saga"}}},{node:{frontmatter:{title:"Your First Read Model",lesson:3,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-read-model"}}},{node:{frontmatter:{title:"Your First Subscriber",lesson:2,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-subscriber"}}},{node:{frontmatter:{title:"Videos",lesson:3,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/videos"}}}]},postBySlug:{html:'<p>Whenever creating an application that uses cqrs and   event sourcing there are several\nthings you need to keep in mind to make it easier and minimize the\npotential bugs, and headaches.</p>\n<h2 id="events"><a href="#events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Events</h2>\n<p>Make sure that when your aggregate events are JSON serialized, they\nproduce clean JSON as it makes it easier to work with and enable you to\neasier deserialize the events in the future. Make sure that the events have:</p>\n<ul>\n<li>No type information</li>\n<li>No runtime information</li>\n</ul>\n<p>Here\'s an example of good clean event JSON produced from a create user\nevent.</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n    <span class="token property">"Username"</span><span class="token operator">:</span> <span class="token string">"root"</span><span class="token punctuation">,</span>\n    <span class="token property">"PasswordHash"</span><span class="token operator">:</span> <span class="token string">"1234567890ABCDEF"</span><span class="token punctuation">,</span>\n    <span class="token property">"EMail"</span><span class="token operator">:</span> <span class="token string">"root@example.org"</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><strong>Keep Aggregate Events As Slim As Possible</strong></p>\n<p>A good rule of thumb is to minimize the amount of noisey data that can exist in the aggregate event. If your state event applying method uses all of the event member variables on invokation, then you have a good event. adding bloat and extra data to events waters down how true the events are. Events embody \'facts which happened\' in your domain. If you add unessacary \'facts\' that dont pertain to that event in your event model, then that event becomes less \'fact-y\'.</p>\n<p><strong>Idempotent Apply Methods</strong></p>\n<p>Your apply methods should be functional and idempotent, meaning the application of the same event over the state object multiple times should produce the same result as if it were applied only once.</p>\n<p><strong>Keep Old Event Types</strong></p>\n<p>Keep in mind, that you need to keep the event types in your code for as long as these events are in the event source, which in most cases are <em>forever</em> as storage is cheap and information, i.e., your domain events, are expensive. Distinguish between old event types and broken event types with high scrutiny as these are the fundamental building blocks of your domain.</p>\n<p>However, you should still clean your code, have a look at how you can\n<code class="language-text">upgrade and version your events &lt;event-upgrade&gt;</code> for details on\nhow Akkatecture supports you in this.</p>\n<h2 id="unit-testing"><a href="#unit-testing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Unit Testing</h2>\n<p>Unit test your aggregates and sagas in isolation from one another. By using black box style  testing you can follow this approach.</p>\n<p><strong>Aggregate Testing</strong></p>\n<ul>\n<li>Arrange - setup the aggregate actor, listen to the aggregate actors possible emitted events.</li>\n<li>Act - send the aggregate actor a command.</li>\n<li>Assert - check to see if the aggregate actor emits the domain event as desired.</li>\n</ul>\n<p> <strong>Saga Testing</strong></p>\n<ul>\n<li>Arrange - setup the saga actor, listen to the saga actors issued commands by mocking its actor reference to a test probe actor</li>\n<li>Act - send the saga actor a domain event.</li>\n<li>Assert - check to see if the saga actor tells the probe actor the desired command.</li>\n</ul>\n<p>It will be most advantageous to learn akka.net\'s <a href="http://getakka.net/articles/actors/testing-actor-systems.html">test kit</a></p>\n<h2 id="make-your-domain-expressive"><a href="#make-your-domain-expressive" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Make Your Domain Expressive</h2>\n<p>Your domain code is your business model codified. Make sure that you apply the principle of a ubiquitous language to your domain by being explicit but terse in your naming conventions, this leads to a far more enjoyable developer expirience for those who share the code base. With the fall in popularity of UML diagrams and other forms of non-code business domain models, code written in a ddd way is your business domain model.</p>\n<h2 id="plan-for-uncertainty--inconsistency"><a href="#plan-for-uncertainty--inconsistency" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Plan For Uncertainty &#x26; Inconsistency</h2>\n<p>Note about message guarantees, message based systems etc</p>',timeToRead:3,excerpt:"Whenever creating an application that uses cqrs and   event sourcing there are several\nthings you need to keep in mind to make it easier and…",frontmatter:{title:"Tips and Tricks",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018",category:"akkatecture",tags:["further-self-study","akkatecture","csharp","dotnet"]},fields:{slug:"/tips-and-tricks"}}},pathContext:{slug:"/tips-and-tricks",category:"akkatecture"}}}});
//# sourceMappingURL=path---docs-tips-and-tricks-37bc7da2b3ef472c9d42.js.map