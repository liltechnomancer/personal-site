---
title: Why You Should Learn Functional Programming Today. 
date: "2018-01-22"
---
## An Objective look at Functional Programming.

As some of you may already know, JavaScript has a reputation of dealing with problems such as hype cycles, fads, and "Shiny Object Syndrome". You may begin to experience what we programmers know as "JavaScript Fatigue". But a lot of people are _done_ chasing the hype. They want to focus on becoming more productive developers, and being better equipped with the tools they already know. This series will help you do exactly by understanding the concept known as Functional Programming.

Functional Programming is not another hype train, its not a tool to learn, it doesn't force you to change anything about what you currently know and use. Sure there is the chance that if you get into #FP it _can_ lead to these things. You might start using libraries like Ramda, Folktale, or Immutable JS. However, you have no need to, and if you do it will be because you *want* to. What Functional Programming actually does is help you write **better JavaScript** and you can start today.

### Better JavaScript?

That statement probably made you recoil a bit. You might be thinking "Better is subjective, it's better only in your opinion" but this is not true and I will tell you how. If you are a developer, just by learning Functional Programming, your skills will improve. Even if you primarily use an Object Oriented language (aka OO) and continue to after learning FP, your OO code will improve.

This is because #FP holds incredibly valuable lessons. Within this paradigm are little nuggets of truth that have been lost to many developers over time, and these same little nuggets apply to OO programming as well. Through learning #FP, my own Ruby code improved significantly-- but in order to mine down these golden nuggets of truth, we need to start at the very basics.

### Why JavaScript

JavaScript is not your traditional Object Oriented language, a lot of people _believe_ it to be, but this belief is incorrect. Most OO languages use _'classical inheritance'_ while JavaScript uses _'protypal inheritance.'_ I can already hear you yelling, **BUT HEY! ES6 GAVE US CLASSES!!** No, what ES6 gave us were lies! I mean, yes, they did provide a lot of other cool stuff, but the class thing is a lie. It is a _class-like_ abstraction over JavaScripts true nature, gross old prototypes.

In my opinion prototypes are bad, ES6 classes are bad, `this` is bad, and all of them lead to worse, more confusing code. I am not a *purist*, I work with libraries, developers, and codebases that use all of these consistently. And I don't believe others to be *bad developers* for using them. However, I do believe the systems themselves are bad, and are forcing developers to become lion tamers to their codebase. At their core, they make writing *good code harder*. For this reason I don't use them in the code I write, and if you are willing to learn how I would love to teach you.

### Building Blocks

You can't just start quickly writing fully pure and functional code, it needs to be learned, just as you learned OO-- In small pieces and with practice. The good news is that you can easily start, one piece at a time, in your current production code! Let's start with the most basic concept in #FP, *constants*.

#### What are constants?

Constants are variables that are... well constant. Meaning that you *can not re-assign them*. For example you can normally do the following:
```
var foo = 'bar'
foo = 'baz'
```
This will run fine, however the following will throw an error:
```
const foo = 'bar'
foo = 'baz'
```
Now why the hell would you want this to throw an error? Because this is a great way to communicate that the variable _should not change_ both to yourself and other developers. Take the following example:
```
const dbConnection = connect('path/to/db/')
```
This is a great time to use `const` because you likely do not want `dbConnection` to ever get changed during execution, whether it be on purpose or accidentally. You already have variables in your JS codebase that should be constant. Using `const` to enforce that is reason enough to start using it *today*.

Now, if you have looked into Functional Programming before this article, you may know where I am going with this. You are probably aware, at some point through this series, I will tell you to strive to make *every single variable* a constant. This is true, but you don't need to worry about that right now. 

All you should worry about today is making the variables *you* think should be constant, constants. That is easy enough right? In Part Two I will make sure to cover constants in depth, with explanations on how and why you should make every, or at least most, variables be constants.

### Weekly take-aways
  1. Learning Functional Programming will improve your code, and you can start today.
  2. Make variables **you** believe should be constants, constant.

Follow me on [Twitter](https://www.twitter.com/lvrbrtsn) to know when the next post goes live. 


