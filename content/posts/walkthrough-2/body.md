---
layout: post
title: Site Walkthrough Part 2
---
<!-- add some context from the last blog post here -->
# Part II - Prometheus and the DOM

The key answer here is in html's `<script>` tag, which as you may have guessed, allows javascript to run in the page and make changes to the HTML in real time. 

For example, let’s say you have “hello, world” in a webpage, a text input box, and a button. The HTML might look like this:

```
<html>
<input type=“text” id=“name"></input>
<button type=“submit” id=“go”>go!</button>
<p id=“greeting>Hello, World</p>
</html>
```

You want the application to let the user type in their name, so that the user says “Hello, {name}” instead of just a generic greeting. How can we do this?

Early on, a website might have a small simple script that says (in pseudocode)

Listen for when the user hits the button with ID 'go',
Retrieve the contents of the input box with ID 'name' and store it in variable x
Remove the old text with id 'greeting', and add to the document a new block of text that says “Hello, {x}!” With the id 'greeting'

This may seem small, but it’s a building block that will eventually allow us to make some very interesting web applications. The tricky part is being able to specify which button and input box we care about, and keeping track of the text we want to replace. But if you were willing to keep track of that yourself, then in 2013 jQuery was the library for you! This is where I got my professional start, and some people still maintain jQuery applications today. I won’t get into the details, but as a project gets larger and more ambitious it quickly becomes very difficult to manage all the interrelated bits of jQuery. The next framework we’ll talk about is, in my view, nothing sort of an epiphany. 

To reach that point, it’s helpful to first understand how jQuery works. The power under the hood is called the DOM (Document Object Model) [^1], and explaining this is a likely question in any entry-level frontend programmer interview. The basic idea is that HTML, rather than being a string of random symbols, is actually a tree. Starting from the root node of the `<html>` tag, we can draw new child nodes for each tag nested within, and then new branches and nodes for the children contained within those tags, until we get to bare bits of text or images, videos, css file, and so on. I remember learning about this only after months of tree searching, sorting and manipulation algorithms for my computer science major, and at the time I had no idea it would be crucial to how I make a living!

The pseudo-code above does this by carefully managing the “id” tag on each element. As you can imagine, it’s crucial to make sure there are no ambiguous cases where multiple object have the same ID. If you do this carefully, your jQuery will happily traverse the tree and make exactly the changes you specify.

jQuery was a rough and ready Swiss-army knife for modifying the Dom, letting you append or remove bits according to rules. Once you combine your HTML document and stick a few bits of jQuery between `<script>` tags, you’ll quickly have an interactive page. But around my 2nd year of frontend, we started hearing about a new way of using javascript and the DOM. It was a fancy new system created by Facebook, and promised to do away with all the headaches of crossed wires and ambiguity that jQuery was prone to. Enter React.

The key innovation of React was to not just selectively slice up the DOM. Rather than keeping track of bits of html, react declaratively states what should exist, and how it should behave. When the application runs, React has a complete picture of the DOM in memory, and automatically reconciles updates to the state of the application, and refreshed the HTML in your browser, all without having to search for DOM elements yourself.  Putting together a set of components in this paradigm, we would, when ‘rendered’ by react, produce a DOM and all of the relevant logic to change it. 

So the react pseudocode might read something more like this (in pseudocode)

```
Component HelloName

This component has a variable called name, initially set to ‘World’
This component has a reference called ‘inputRef'
This component has a method called setName, it reads from inputRef and updates the value of name 

This component renders the following:

<html>
<input ref={inputRef} type=“text"></input>
<button onSubmit={setName}>go</button>
</html>
```

This may seem like overkill for such a small objective, if anything it’s more verbose. But the crucial thing to realize is that this react component is self-contained, and other react components don’t need to worry about accidentally affecting HelloName in any way at all! Instead, the parent component is responsible only for deciding its own children, and providing them with relevant bits of data that tells them exactly what to render. This enables cleaner code that is far easier to debug, and once you’ve got the mindset of react component down you’ll never want to go back to the lawless chaos of jQuery. Furthermore, because React is virtually updating everything automatically, you don’t have to worry about the particulars of finding, removing, and replacing a particular part of the DOM - you just declare the behaviors, and react does the heavy lifting for you.


Having decided on React, I’ve never looked back. Anything that tempts me into switching tends to embrace the same paradigm with a few niceties of syntax, which the React team aggressively absorbs and integrates into the next edition. I’ll share you a detailed history of things, but rest assured the newer version of react is always simpler, cleaner, and more intuitive to read, just like javascript. 

Okay, I think that’s enough for now. Next time, we’ll talk about some more tangible parts of our tooling, and actually building our first hello, world of the Whitman 2020 Website!



[^1] 
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
