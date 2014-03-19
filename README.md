# Documentorator

## What is this?
Documentorator is a small [Symfony2](http://www.symfony.com) application for generating nice looking documentation
PDFs with web technologies. It's built on top of [PrincePDF](http://www.princexml.com/) which does most of the work, frankly.
Documentorator basically provides a nice template structure, a standard design and some common documentation
functionality like a table of contents, bibliography, table of figures, etc. for your documentation. You can easily
create large text documents (100+ pages) with Documentorator and of course have everything under version control.
Documentorator is a by-product of my bachelor thesis where I used it for writing my report.

## Prerequisites
You need PHP 5.4 and [PrincePDF](http://www.princexml.com/) installed on your system to use this project

## Setup instructions
* Clone the repository:

        git clone https://github.com/elHornair/documentorator.git

* Install the dependencies (You might need to [install composer](https://getcomposer.org/download/) first):

        composer install

* Setup a virtual host called `documentorator.lo` pointing to your projects web directory
* Visit [the documentorator page](http://documentorator.lo/app_dev.php) in the browser

## Compile your first document
The project comes with a small Shell script for compiling your document into a PDF and directly opening it. To compile
your main document, run the following command:

    ./scripts/generatePDF.sh

In addition to the main document, you might also have standalone documents like an abstract or your curriculum. Compile
it by passing the name of the standalone document to the Shell script:

    ./scripts/generatePDF.sh abstract
    ./scripts/generatePDF.sh curriculum

## First steps
Have a look at `src/ElHornair/DocumentoratorBundle/Resources/views/index.html.twig`. Everything starts there, so best
look at all the files that are included in this file. Once you're working on a big document and are testing stuff,
it's a good idea to comment certain chapters there for faster compiling. The project also includes a styleguide
explaining all basic elements of the standard documentation.

## Adapting stuff
Documentorator provides a skeleton and a basic, academically looking styling. Of course you can adapt the design
using CSS/LESS. In case you want to adapt the template structure, have a look at the [Twig](http://www.twig.sensiolabs.org/)
templating language. If you want to add new functionality, look at the existing JavaScript files and adapt them to your
needs or add new ones.
If you want to add more standalone documents, add a new route to
`src/ElHornair/DocumentoratorBundle/Resources/config/routing.yml` and create an according template.

## Can't I just use MS Word [LaTeX](http://www.latex-project.org) for my documentations?
* Short answer: yes
* Long answer: When I wrote my bachelor thesis, I wanted to have my documentation under version control so that I would
have a clean protocol of my work (so Word is out). I remembered writing docs in [LaTeX](http://www.latex-project.org/)
as exhausting and generally don't like WYSIWYG editors like [LyX](http://www.lyx.org/) (because you never really get
what you see). Since I'm a strong believer of web technologies and I was already fluent in HTML, I've decided to write
my thesis in HTML and Prince turned out to be a great tool for this. If HTML is not your thing, or you're already fluent
in LaTeX, there is no benefit for you to use Documentorator. Also it's worth mentioning that CSS is still somewhat
limited in terms of text formatting if you compare it to LaTeX, but [things are
improving](http://dev.w3.org/csswg/css-text-3).

## Kudos
Thanks a lot to [Fabian](https://github.com/fabian) and his class mates for the idea and for implementing a POC for this
approach. A lot of the code in this repository is inspired by (or bluntly copy&pasted from) their POC.
