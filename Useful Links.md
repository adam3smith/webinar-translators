#Helpful Links


##Xpaths and DOM

While there are many complatins about W3Schools, they're [section on Xpaths](http://www.w3schools.com/xpath/) is quite decent. It's focused on XML, but applies equally to HTML. 

Five years ago, Adam Crymble wrote a guide for Zotero translators. Much of it is very dated now, but his sections on [DOM](http://niche-canada.org/member-projects/zotero-guide/chapter4.html) and [Xpath](http://niche-canada.org/member-projects/zotero-guide/chapter5.html) remain excellent (for the latter, instead of the mentioned "Solvent" tool, which no longer works with Firefox) you can simply use Firefox's built-in "Inspect Element."

##Regular Expressions

The page http://www.regular-expressions.info has a good intro as well as a testing tool for javascript regex.

Konrad Lawson wrote a [couple of posts](http://chronicle.com/blogs/profhacker/tag/regex) for Prof Hacker on regex back in 2012.

If you know the basics of regex, [this cheatsheet](http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/) may still come in handy


##Tools

While you _can_ write Zotero translators without [Scaffold](https://www.zotero.org/support/dev/translators/scaffold), you'd be foolish to do so. 

Many sites make POST request to get to citation metadata. [HttpFox](https://addons.mozilla.org/en-US/firefox/addon/httpfox/) helps you figure out what to post.

##Zotero Documentation

Documentation for Zotero translators code is [here](https://www.zotero.org/support/dev/translators/coding).

Documentation for using Eric Hetzner's Framework is [here](https://www.zotero.org/support/dev/translators/framework).

##Examples
- **From the webinar**: [Demographic Research](https://github.com/zotero/translators/blob/master/Demographic%20Research.js) (GET with RIS)

- **Framework Translator**: [Boston Review](https://github.com/zotero/translators/blob/master/Boston%20Review.js)
- **Non-framework Screen Scraper**: [USPTO](https://github.com/zotero/translators/blob/master/Patents%20-%20USPTO.js)
- **Fetch Metadata using GET**" [FigShare](https://github.com/zotero/translators/blob/master/Figshare.js)
- **Fetch Metadata using POST**: [HAPI](https://github.com/zotero/translators/blob/master/Hispanic-American%20Periodical%20Index%20%28Beta%29.js)
- **Rely on Embedded Metadata**: [Institute of Physics](https://github.com/zotero/translators/blob/master/Institute%20of%20Physics.js)
- **Retrieve custom JSON format from API and import**: [DPLA](https://github.com/zotero/translators/blob/master/DPLA.js)
- **Import Translator**: [MARCXML](https://github.com/zotero/translators/blob/master/MARCXML.js) (Import translators are very ideosyncratic depending on the import format. This one is particularly simple to show the general structure).






