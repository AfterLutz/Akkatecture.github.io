---
title: "Identity"
lesson: 2
chapter: 1
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "11/12/2017"
category: "javascript"
type: "lesson"
tags:
    - getting-started
    - nact
    - javascript
    - nodejs
---
<!-- <a class="remix-button" href="https://glitch.com/edit/#!/remix/nact-stateless-greeter" target="_blank">
  <button>
    <img src="/img/code-fork-symbol.svg"/> REMIX
  </button>
</a> -->

> Tip: The remix buttons like the one above, allow you to try out the samples in this guide and make changes to them. 
> Playing around with the code is probably the best way to get to grips with the framework. 

Nact has only been tested to work on Node 8 and above. You can install nact in your project by invoking the following:

```bash
    npm install --save nact
```

This is just for me Csharp Markup test
```csharp
//Create actor system
var system = ActorSystem.Create("useraccount-example");

//Create supervising aggregate manager for UserAccount aggregate root actors
var aggregateManager = system.ActorOf(Props.Create(() => new UserAccountAggregateManager()));

//Build create user account aggregate command with name "foo bar"
var aggregateId = UserAccountId.New;
var createUserAccountCommand = new CreateUserAccountCommand(aggregateId, "foo bar");
            
//Send command, this is equivalent to command.publish() in other cqrs frameworks
aggregateManager.Tell(createUserAccountCommand);
            
//tell the aggregateManager to change the name of the aggregate root to "foo bar baz"
var changeNameCommand = new UserAccountChangeNameCommand(aggregateId, "foo bar baz");
aggregateManager.Tell(changeNameCommand);
```

Once installed, you need to import the start function, which starts and then returns the actor system.

```js
const { start, dispatch, stop, spawnStateless } = require('nact');
const system = start();
```

Once you have a reference to the system, it is now possible to create our first actor. To create an actor you have to `spawn` it.  As is traditional, let us create an actor which says hello when a message is sent to it. Since this actor doesn't require any state, we can use the simpler `spawnStateless` function.

```js
const greeter = spawnStateless(
  system, // parent
  (msg, ctx) => console.log(`Hello ${msg.name}`), // function
  'greeter' // name
);
```

The first argument to `spawnStateless` is the parent, which is in this case the actor system. The [hierarchy](#hierarchy) section will go into more detail about this.

The second argument to `spawnStateless` is a function which is invoked when a message is received.

The third argument to `spawnStateless` is the name of the actor, which in this case is `'greeter'`. The name field is optional, and if omitted, the actor is automatically assigned a name by the system.

To communicate with the greeter, we need to `dispatch` a message to it informing it who we are:

```js
dispatch(greeter, { name: 'Erlich Bachman' });
```

This should print `Hello Erlich Bachman` to the console. 

To complete this example, we need to shutdown our system. We can do this by calling `stop(system)`
The `stop` function also can be used to terminate an actor.

> Note: Stateless actors can service multiple requests at the same time. Statelessness means that such actors do not have to cater for concurrency issues.

