---
layout: post
title: Site Walkthrough Part 1
---
<!-- add some context from the last blog post here -->
## Introduction

As I start this project, I’ll be documenting my decision making process in detail, hoping to illustrate the pitfalls and advantages of modern web development as a craft. Like Nick Offerman at the woodworking bench, I hope to make people feel welcome and excited to make things, to come up with ideas and execute. I’m not the ultimate woodworker in this metaphor, I’m still learning constantly. But just like making something with your hands is deeply satisfying, there’s something fundamentally positive about solving problems with your mind, and  making something you can show other people. Let’s get started, shall we?


# Part 1 - The Stack


All good projects start by deciding what tools to use. In programming, there are two kinds of tool to think about - the ones that let the the programmer build what they want, and the ones that decide how the computer talks to the user or other computers. 

The first category happens to be a fair bit simpler to explain, while also influencing what choices will be made in the second category, so it’s a good place to start. 

First, we will take is as a given that we want to create a web application. This means the user doesn’t have to install anything, and that we expect a client device with a standard interface of mouse, keyboard, and/or touchscreen to be the way users interact with us. If either of these were not true, we could just as easily make similar decisions but from a different set of domain-specific tools. For example, if your goal is to make a video game with incredible graphics, or an exercise bike that tracks how fast you’re going, these would require very different assumptions and trade-offs. 

Luckily, the 21st century has enabled broad access to cheap and plentiful computing resources, so we aren’t concerned with squeezing the best possible performance out of our hardware. For example, if we needed to write a program for an old TI-83 pocket calculator, we would need to carefully preserve our 24 kB each of ROM and RAM like water in the desert. In a modern smartphone we have on the order of millions of times as much memory, so that means we can focus on tools that make our job easier.

This brings us to the foundation of our stack, the choice of language. It’s only natural to ask at this junction, what is the most popular programming language? The answer, overwhelmingly, is Javascript. [1] This wasn’t true when I was in school, and my college education was largely python and Java, which have fallen to number 2 and 3 respectively. But in my opinion, a new web dev with javascript under their belt will find far more avenues unlocked compared to those or any other options. The reason why is partly circumstantial, but I think the most critical part of Javascript is that the language wants to be flexible enough to describe anything, and in pursuit of this it keeps growing and adapting, just as human language does. My former coworker Jenna Zeigen gave an awesome lecture on this topic that I highly recommend to anyone interested. [2]

You may not be entirely sold on Javascript, and I admit the name is incredible unfortunate because it Is neither related to Java nor is it strictly speaking a Scripting language. Python sounds way cooler. But if you let me work a little bit farther up the stack you’ll see that ‘JS’ as we call it has become a lingua franca for online applications, because in addition to its linguistic superpowers, it is extremely portable and runs well enough on minimal hardware. Many other languages look syntactically very different, but can compile into javascript so they can run easily on the web. [3]

So, if we’re bullish on js, what does this have to do with actually making a website? After all, the internet is made of HTML, right? I still remember my first ‘development setup’, a single file in the old windows 95 notepad.exe program. We write ```<html> <p>hello world</p> </html>```, and saved the file as ‘my_page.html’. Open it up in a browser, and you see a nearly featureless page with those two beautiful words looking back at your. Once you get used to those opening and closing <tag>s, it’s really not very different from a word document!

And indeed, if a single simple, unchanging page is all you need, you may end up writing javascript that ends up compiling down to pure HTML. Very early on, in my high school internship at my mother’s publishing company, I did exactly this, manually writing out the content by hand, painstakingly adjusting the content and refreshing the page each time. Once I was satisfied, I uploaded the html files to a server, which as the name suggests would dispense the files to anyone who pointed their browser to [http://formatllc.com/](http://formatllc.com/). Problem solved, right?

 However, this is extremely laborious and has one major limitation - the only way the webpage changes is when you save a new version of the html file. How can we let the user interact, and change the page?

I think we’ll end on a cliffhanger, for now. Without googling anything, what is your intuitive answer? How would you take html from being a document to being a living, breathing, interactive thing?

End of Part I. Tune in next time to find out what happens!

Footnotes:

1: https://www.zdnet.com/article/programming-language-popularity-javascript-leads-5-million-new-developers-since-2017/


2: https://www.youtube.com/watch?v=tNylHHf2uJk


3: https://github.com/jashkenas/coffeescript/wiki/List-of-languages-that-compile-to-JS
