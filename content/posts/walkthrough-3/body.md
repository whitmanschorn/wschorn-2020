---
layout: post
title: Site Walkthrough Part 3
---
<!-- add some context from the last blog post here -->
# Part III - rubber meets road. 

From here on out, take my advice with a grain of salt. As an application becomes more specific, the choices made naturally become more subjective. However, I will try to emphasize reasons behind these choices that are universal. 


The first step is to create our code repository (‘repo’) and populate it. For open source projects like mine, GitHub is a perfectly suitable solution. Side note: Some of my recent clients, who have strong security obligations, self-host repos with GitLab, and GitHub’s acquisition by Microsoft gives me reason to mention that GitLab is in fact a perfectly fine substitute with some nice additional features relating to Continuous Integration. 


Since I am working on a blog, I will avoid the most common build tool most javascript developers will be familiar with - webpack. I’ve been working with webpack since 2014, and it’s ubiquitous enough that most developers will probably need to know how to use it at some point. There are also other options, like Parcel, but they rarely involve complex configurations like webpack. If I was building a pure application, rather than a static site, I would most likely use snowpack, a webpack alternative that makes rebundling more efficient. In my experience, the bundler is usually the bottleneck for code iteration, and so it’s extremely worthwhile to spend a few hours reducing the build time as much as possible. Do not underestimate this! Going from a 30 seconds to 10 seconds to 3 seconds build time will make most tasks orders of magnitude more enjoyable, and will keep fatigue and burnout at bay for far longer. 

In this case, I’m going to try out cuttlebelle, a static site generator that runs its own watch process. I have no experience with this library, but the motivation of separating content and code concerns means it will be both easier to maintain and more edifying to work on. When I want to write a new blog post, I only need to write markdown. When I want to change how the site looks, I only need to look at jsx, rather than a one-off templating language. 

After creating the repo in GitHub, our first command simply clones the repo to our machine:

git clone https://github.com/whitmanschorn/wschorn-2020.git

Now we have a readme and license file, but no content. To get that going, let’s follow the cuttlebelle installation steps:

npm install cuttlebelle --global
cuttlebelle init

Okay, now we have some folders to work with!

```
ls
LICENSE        README.md    assets        code        content        site
```

As a first task, let’s add a copyright notice to the footer that always displays the current year. This is a simple task, but it will prove out our ability to incorporate dynamic content into our static page. 

This works well enough, but cuttlebelle is giving us a div which causes a line break when we try to append the current year. 

```
npm install --save styled-components
```



Birdwalking: bash profile.

While working on this, I noticed my shell wasn’t auto-loading bash_profile, which means handy features like GitHub autocompletion aren’t loading. This is easy enough to fix by running 

```
Source ~/.bash_profile
```

Each time I open a new tab, but it’s annoying. I quickly googled around and found how to fix it via this stack overflow

https://stackoverflow.com/questions/25025799/profile-bashrc-and-bash-profile-not-running-on-new-terminal-start-up

In a nutshell, this is an unavoidable part of programming - noticing a minor problem, and finding a solution that removes all the mental load. Just like with build tools, it pays huge dividends to have a developer setup that ‘just works’. 

But back to the site. We now have a working footer!

But it seems like we broke cuttlebelle’s styling of the footer in the process. I prefer to use styled-components when possible, rather than a single monolithic CSS file. So let’s take the styles from the site.css file and put them in our Footer.js component.


Argh. Actually cuttlebelle seems to be unable to build styled components the way it wants. However, this isn’t the end of the world, and there are still smart ways to get around this. Ideally, we would have css-in-js, but a quick look at the cuttlebelle issues board shows this is a feature people have been asking for since 2017. 

Instead, we can just use a JS object to style the footer:

```

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const footerStyles = {
  padding: '10px',
  borderTop: '2px solid #f55555'
};


const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
  <footer style={footerStyles}>Copyright (c) Whitman Schorn {currentYear}, made in NYC.</footer>
);
}

export default Footer;
```

This has some tradeoffs. We don’t get exact CSS syntax, for example we camelCase properties where CSS will use dash-notation (border-top becomes borderTop). On the other hand, we avoid having to import any additional libraries, and know exactly what styles are being applied right in the component, rather than having to go searching for a component-specific or site-wide css file.

In this case, I’m choosing not to fight against the framework, since it’s an acceptable compromise. 

Moving on, let’s imagine what our MVP site looks like, from a sitemap perspective

* Homepage
* About
* Posts
    * Post 1
    * Post 2

We’ve created Home and About pages, and linked them via the footer. But what about blog posts? Another search in the repo issues leads us to an example repo: https://github.com/miran248/cuttlebelle-test

What feels like hours later, I discover that empty markdown files cause issues with the cuttlebelle parser! This is one of those things that requires experimentation and a healthy suspicion of one’s own tools. I was faced with an annoyingly vague JSON parse error when copying over the example code, and then resorted to trying an even simpler example of custom layout components from the cuttlebelle documentation. This worked, so custom layouts were indeed possible. I then continued to change the book component into my desired posts component, until I hit a point where my changes caused the same compiler error - when I removed the body content from the file. I then added a blank line to satisfy the parser, and was faced with another issue: cuttlebelle was able to list all the posts on the homepage, but it was getting confused (dropping page titles) when trying to do the same thing on a blog post page. I noted that the homepage declared the list of posts from its own folder, while the dysfunctional list used a shared resource. So I deleted the shared morePosts markdown file, and made a separate ‘moreListPosts’ component, which was placed in each post folder. This isn’t perfectly DRY, but since shared components are intended to look the same everywhere, it makes sense that cuttlebelle needs the context of the current post to filter that specific entry out of the list of pages. 

All that is to say, you will sometimes spend most of your time wrangling with tools and finding their flaws. If you were programming a pacemaker, this kind of risk might be unacceptable, and building your own solution out of battle-tested C libraries would be the only option, but this path still gave me the desired flexibility and control.

Now, each blog post is represented by a folder with three files: index.yml,  body.md, and posts.md

The first of these files needs a new title and date so that the list of posts can be displayed correctly. The second file is where all of our actual markdown content goes, and the 3rd file doesn’t actually need to change, but is duplicated to ensure the moreListPosts component gets the correct context to display the other posts and not the one we’re currently looking at.


And that’s all, folks! Well functionally, at least. I’m done having to solve tricky puzzles, which is a relief at this point, a sign that I can start listening to a podcast in the background while I tweak CSS and write markdown. Everything else, from styles to additional custom components, will follow the same patterns I have already committed to the code. 

As an experiment, let’s see how long the various parts of this project took, based on my browser history.

10:09am google to see if snowpack can be used to wrap cuttlebelle - it turns out this is not needed, since cuttlebelle provides its own build and watch process

10:22am look up synonyms to try to make the wording of this blog post more varied. 

10:29am google ‘GitHub new repo’, because I don’t have this memorized (that isn’t a bad thing! Many beginners mistake memorization of certain commands for expertise)

10:31 Github asks about which license to use in the repo, so read an article about why GPL is better than the MIT license [1]
[1] https://drewdevault.com/2019/06/13/My-journey-from-MIT-to-GPL.html


10:36 bring up cuttlebelle docs

10:45 look up ‘js current year’ to get the neatest syntax for deriving the year from the javascript date object (again, knowing how to quickly search and find this answer is preferable to memorizing it [2])
[2] https://www.quora.com/How-often-do-professional-programmers-use-Stack-Overflow

10:48am google styled-components and try to shoehorn it in.

10:53am google ‘how to display copyright gpl’

11:10am after breaking my build by importing styled-components, I try looking up another hack to turn my CSS string into inline styles. This involves several more searches and examination of cuttlebelle source code and docs, eventually proving that it’s more trouble than it’s worth. I got for inline styles instead. 

11:21am look up ‘cuttlebelle blog’ in google and GitHub issues, I want to see how other people implemented a set of blog posts rather than just standalone pages

11:35am look up ‘ignore node modules’ since I’m starting to commit files to the repo now and don’t want to include all the dependencies. Again, this is something you commonly do once per project, but it isn’t necessary to memorize how to do it.

11:40am google ‘css remove a underline’ again, a simple CSS rule that I would rather search for than memorize

11:41am looking at Pantone color of the year entries, I find something that catches my eye. The ‘greenery’ color, which I make another search for the hex code of. Now my links are green, rather than blue/purple, and don’t have the underline effect. 

11:49am pause for a 3-minute YouTube video somebody sent me.

11:56 look at several GitHub issues describing how different post systems work

11:56am find the example repo I’ll base the rest of my code off of

12:35pm after half an hour reading through example code and selectively copy-pasting to no success, I search for a markdown validator, but everything checks out. I also look through GitHub issues on the example project, with no luck.

1:10pm After figuring out that the markdown files need a blank line after the variables are declared, I notice an error with the context-passing for the re-used listPosts component, and use JSONLint [3] to make some of my own debugging output more readable

1:36pm this timespan is filled by me clicking back and forth between my own blog pages, trying to figure out what works. And then, with a few more small changes, I’m done!

So in this time span, roughly 3.5 hours, I was able to finish the project. Note that I spent at least 2 of those hours mostly reading documentation and code examples, with a fair amount of that time spent on wild goose chases. I even took a break to watch a funny video! I think this illustrates that progress in web programming is rarely a straight line. In fact, I would say the most apt metaphor comes from a short skit from Malcolm in the middle, where the inimitable Bryan Cranston needs to fix a lightbulb:

https://www.youtube.com/watch?v=AbSehcT19u0

I show this clip to new engineers when they’re frustrated by a seemingly minor task. Hopefully, it adds a bit of levity to what can often be a very frustrating process of exploration and patchwork problem-solving. 

Of course, that doesn’t mean that we can be confident in our solutions, especially as projects grow in complexity. While it might be overkill for my little sight, real-world apps with users that depend on require more robust proof of correctness. Stackoverflow might have your immediate answer for a specific problem, but what if your changes break someone else’s code?


In our next and last installment, we’ll skip most of the css and content fluff and give a full rundown on published to the internet! It’s simultaneously an extremely gratifying step, a fairly simple one, and the most terrifyingly dangerous part to get wrong. 

Also, we’ll go over testing, covering the tools, the tricks, and the philosophy that brought me to a nirvana of true peace that comes from knowing your app works as it’s supposed to, every time you deploy. Stay tuned!

