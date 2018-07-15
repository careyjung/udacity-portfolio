# Udacity FSWD Portfolio Project #

## Design Notes ##

I wanted to separate content from presentation as much as
possible. Most html I've seen is nearly impossible to read, because
it's filled with various container divs and what-not that have nothing
to do with the content, but are there just to satisfy some layout
purpose. In the past, this has been unavoidable because of the
limitations of CSS, but with flex and grid layouts, it seems to me we
can now keep the layout junk out of the html and in the css where it
belongs. At least for simple designs like this one.

So, if you look at my index.html, I think you'll agree that it's very
minimal and easy to read. The only containers in it are semantic
blocks that reflect the logical structure of the content. No
additional wrapper containers needed; just five logical sections:
header, nave, banner, main, and footer. Nested within the main section
are <article>'s, which reflect the structure of the content, but no
additional container divs were needed.

I started off using flexbox's for everything, but it seemed like every
time I did, there was something I wanted to control in the cross
dimension that was difficult. So I taught myself grid layout (mostly
from the [MDN grid tutorial](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)), and
switched to that for most everything. The only flexbox remaining is in
the footer.

## Implementation Notes ##

* I have only tested this in Chrome -- but in DevTools on various
  screen sizes. So it should be fully responsive, but will likely not
  work on older browsers, in particular, those that don't support grid
  layout. Or I might have gotten lucky, I don't know. I'm already
  about 40 hours into this project, so I just didn't have time for
  full testing, and I wanted to focus on the goal of learning flex and
  grid layouts and creating a responsive design.
  
* index.html and main.css both pass W3C validation checks, with the
  exception of line 98 in main.css. Couldn't figure out what was wrong
  with that, but it worked.

## Interesting Things I've Learned ##

* Grid area names can't be numbers, like "11 12 13". They must satisfy
  the same requirements as CSS variable names.

* Grid area names follow DOM scoping rules. This means, e.g., that you
  can have nested grids inside other grids and name the respective
  grid areas without worrying about name collision. For example, you
  can have an area named 'title' in one grid, and an area named
  'title' in another sibling or parent grid, and they won't interfere
  with each other, because the objects in each grid don't "see" the
  other objects or grids.

* By default, a grid will fill its entire container. If it's at the
  top level, i.e., under <body>, it will fill the screen width. This
  confused me at first, but you can see it by putting a border on it
  or looking at it with the Chrome inspector. It will NOT, however,
  fill the screen height.

* Grid-gap only sets padding between grid rows/columns, not between
  rows and the container edge. So to provide consistent spacing
  everywhere, you need to set grid-gap and the container's padding to
  the same value.
  
## Cool Resources I've Discovered ##

* Dummy image sites that make it easy to put an image of any size in
  your html for development or testing purposes, so you don't have to
  waste time hunting around for an appropriate image until after
  you've implemented your layout. My favorite such site is
  [dummyimage.com](dummyimage.com). Note that I have left all my dummy
  images in place for this project.

* Ditto for dummy text-generation sites. My favorite is [dummytextgenerator.com](dummytestgenerator.com)

* [Mozilla Developer Network](developer.mozilla.org) (or MDN for
  short): I practically lived there during this project. Their Grid
  Layout guide is great, as is all their other CSS and html
  documentation.
  
* Emacs web-mode and markdown-mode: I've been using Emacs for a long
  time, but hadn't done much web dev with it. This project afforded me
  the opportunity to hunt down and find a good mode kit for
  it. web-mode handles html and css and everything between and
  beyond. markdown-mode handles Markdown well and has a special sub
  mode for Github Markdown -- like this document.

* [watch.rb](brettterpstra.com) by Brett Terpstra: This is a simple
  Ruby script that watches a specified directory for file changes and
  when it detects them, refreshes any matching browser pages open on
  that directory. With this program watching my project directory,
  every time I saved either my html or css file, it would refresh the
  Chrome tab that I had open on my index.html file. So the standard
  edit/test procedure for me now looks like this:
  
  * Start Emacs and open index.html
  * Start watch.rb, monitoring my project folder
  * Open index.html in Chrome
  * Open Chrome Devtools on the index.html tab (I typically have it
    open in a separate window, so it doesn't confine my test page.)
  * Repeat until perfect:
    * Edit my html or css
    * Save changes (the browser tab then refreshes automatically)
    * Look at changes in the browser





