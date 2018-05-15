webpackJsonp([0xfa562cd16c94],{424:function(t,e){t.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Specifications",lesson:5,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/specifications"}}},{node:{frontmatter:{title:"Event Upgrading",lesson:5,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/event-upgrading"}}},{node:{frontmatter:{title:"Articles",lesson:2,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/articles"}}},{node:{frontmatter:{title:"Clustering",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/clustering"}}},{node:{frontmatter:{title:"Production Readiness",lesson:4,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/production-readiness"}}},{node:{frontmatter:{title:"Videos",lesson:3,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/videos"}}},{node:{frontmatter:{title:"Tips and Tricks",lesson:1,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/tips-and-tricks"}}},{node:{frontmatter:{title:"Commands",lesson:4,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/commands"}}},{node:{frontmatter:{title:"Primitives",lesson:1,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/primitives"}}},{node:{frontmatter:{title:"Getting Started",lesson:1,category:"akkatecture",chapter:1,type:"docs"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Akka",lesson:7,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/akka"}}},{node:{frontmatter:{title:"Events",lesson:3,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/events"}}},{node:{frontmatter:{title:"Your First Aggregate Saga",lesson:7,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate-saga"}}},{node:{frontmatter:{title:"Your First Read Models",lesson:9,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-read-models"}}},{node:{frontmatter:{title:"Your First Subscribers",lesson:8,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-subscribers"}}},{node:{frontmatter:{title:"Subscribers",lesson:6,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/subscribers"}}},{node:{frontmatter:{title:"Your First Cluster",lesson:10,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-cluster"}}},{node:{frontmatter:{title:"Sagas",lesson:1,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/sagas"}}},{node:{frontmatter:{title:"Walkthrough Introduction",lesson:1,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/walkthrough-introduction"}}},{node:{frontmatter:{title:"Configuration",lesson:8,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/configuration"}}},{node:{frontmatter:{title:"Aggregates",lesson:2,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/aggregates"}}},{node:{frontmatter:{title:"Your First Aggregate",lesson:2,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate"}}},{node:{frontmatter:{title:"Your First Commands",lesson:3,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-commands"}}},{node:{frontmatter:{title:"Your First Events",lesson:4,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-events"}}},{node:{frontmatter:{title:"Your First Specifications",lesson:6,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-specifications"}}}]},postBySlug:{html:'<p>Lets design a domain using Akkatecture. The walkthrough is designed to get you familiar with Akkatecture, akka.net, cqrs and event sourcing, and a few patterns that come with that. The walkthrough is in \'tutorial\' style and requires your attention in order to get the most of it. The walkthrough will cover most of what akkatecture has to offer. </p>\n<p>Pre-requisites - <em>some</em> knowledge of akka, cqrs and event sourcing is required to fully get the most out of the walkthrough.</p>\n<p>The walkthrough will cover:</p>\n<ul>\n<li>Modelling a simple domain.</li>\n<li>Designing an aggregate root.</li>\n<li>Implementing commands and command handlers.</li>\n<li>Reasoning about events and aggregate state.</li>\n<li>Creating domain event subscribers.</li>\n<li>Building an aggregate saga.</li>\n<li>Writing a simple client application.</li>\n<li>Making your domain distributed across networked nodes.</li>\n</ul>\n<h1 id="let-us-begin"><a href="#let-us-begin" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Let Us Begin</h1>\n<p>The task is for you to try and model a bank that allows you to transfer money from one account to another account. The bank has their own arbitrary business rules that you have to codify</p>\n<p><strong>Task</strong> - An investor with huge pockets wants to start her own bank. She wants to open it in europe and wants to allow customers to create bank accounts for free with a non-negative starting balance. The bank does not deal in overdrafts or loaning. The bank wants to allow customers to transfer their money between accounts within the bank. The transaction fee for a successful money deposit is €0.25. The minimum amount of money allowed to transfer is €1.00. Which means that the minimum amount of money allowed to exit a bank account is €1.25. The bank fee is flat regardless of the amount of money being transferred. The bank would like to keep track of how much money it has gained as revenue as a result of the transaction fees.</p>\n<p>In the walkthrough we will implement this bank together step by step starting with the aggregate. Lets begin with <a href="/docs/your-first-aggregate">designing your first aggregate</a>.</p>',timeToRead:1,excerpt:"Lets design a domain using Akkatecture. The walkthrough is designed to get you familiar with Akkatecture, akka.net, cqrs and event sourcing…",frontmatter:{title:"Walkthrough Introduction",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018",category:"akkatecture",tags:["walkthrough","akkatecture","introduction","csharp","dotnet"]},fields:{slug:"/walkthrough-introduction"}}},pathContext:{slug:"/walkthrough-introduction",category:"akkatecture"}}}});
//# sourceMappingURL=path---docs-walkthrough-introduction-6d8d838fd6a26e11bf0e.js.map