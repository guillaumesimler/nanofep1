Project 1 Front End Dev Nanodegree: PROJECT PORTFOLIO


-----
Docummentation - Project Description
-----

This project is part of the Udacity FEND. The aim of the project is to build a developer portfolio to summarize the projectS I madIt was written by Guillaume Simler (guillaume.simler@gmail.com) in Feb. 2016 in accordance to the student's code of honor. 


-----
Used external modules
-----

1. Twitter's Bootstrap
2. Google fonts
3. Picturefill

----
Discussions: Summarry of the comments
----


1. index.hmtl: The logo should be replaced by an SVG (vector graphic) instead of the jpg (raster) used. I found no SVG (for free) at that time, so the JPG will do the job as such.
2. index.html: The "srcset" used could be more elegant. It is once embedded in a source, than an image. It works but I would need to optimize it.
3. index.html: There is a mixture of classes in the "project" containers. The col-md and col-lg are used. Currently the first should nihilales the second -bootstrap doc-, it is rather a plan for a future. Should there be more projects, I might put more projects per row on the lg than on md. For instance 3 projects per rows on large screens and two on medium: class="col-md-6 col-lg-4" 
4. index.html, main.cass, impressum.html, privacy.html: The site is also published in the web (http://www.simler.eu/). It has legal consequences as (i) it is hosted in Germany and (ii) I am a German resident. This explains the bottom navbar (always visible), the "impressum" and "privacy" html files and the specific classes in main.css
