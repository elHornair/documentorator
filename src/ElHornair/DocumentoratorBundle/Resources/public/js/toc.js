/*global window, document */

var docModule = (function (docModule, document) {

    "use strict";

    var utils = docModule.utils,
        generateToc = function () {
            var tocContainer = document.getElementById('toc'),
                specialChapters = document.getElementsByClassName('chapter-special'),
                mainChapters = document.getElementById('content').getElementsByTagName('h1'),
                subChapters,
                specialChapterHeading,
                tocChapter,
                tocSubChapterList,
                tocSubChapter,
                tocThirdLevelChapterList,
                tocThirdLevelChapter,
                nextTag,
                id,
                i,
                j,
                k;

            // special chapters at the beginning
            for (i = 0; i < specialChapters.length; i++) {
                id = 'chapter-special-' + i;

                specialChapterHeading = specialChapters[i].getElementsByTagName('h1');
                specialChapterHeading = specialChapterHeading[0];

                tocChapter = utils.createCatalogElement(specialChapterHeading.innerHTML, '#' + id);
                tocChapter.setAttribute('class', 'toc-special');
                specialChapterHeading.setAttribute('id', id);// set id of target element, so we can link to it

                tocContainer.appendChild(tocChapter);
            }

            // TODO: refactor this so it's recursive and the depth is dynamic

            // loop through main chapters
            for (i = 0; i < mainChapters.length; i++) {
                id = 'chapter-' + i;
                subChapters = mainChapters[i].parentNode.getElementsByTagName('h2');

                tocChapter = utils.createCatalogElement(mainChapters[i].innerHTML, '#' + id);
                mainChapters[i].setAttribute('id', id);// set id of target element, so we can link to it
                tocSubChapterList = document.createElement('ol');

                // loop through subchapters
                for (j = 0; j < subChapters.length; j++) {
                    id = 'chapter-' + i + '-' + j;

                    tocSubChapter = utils.createCatalogElement(subChapters[j].innerHTML, '#' + id);
                    subChapters[j].setAttribute('id', id);// set id of target element, so we can link to it
                    tocThirdLevelChapterList = document.createElement('ol');

                    nextTag = subChapters[j].nextSibling;
                    k = 0;

                    while (nextTag !== null &&
                           nextTag !== undefined &&
                           nextTag.tagName !== 'H2') {// stop at the end of the subchapter
                        if (nextTag.tagName === 'H3') {
                            id = 'chapter-' + i + '-' + j + '-' + k;
                            tocThirdLevelChapter = utils.createCatalogElement(nextTag.innerHTML, '#' + id);
                            nextTag.setAttribute('id', id);// set id of target element, so we can link to it
                            tocThirdLevelChapterList.appendChild(tocThirdLevelChapter);
                            k += 1;
                        }
                        nextTag = nextTag.nextSibling;
                    }

                    tocSubChapter.appendChild(tocThirdLevelChapterList);
                    tocSubChapterList.appendChild(tocSubChapter);
                }

                tocChapter.appendChild(tocSubChapterList);
                tocContainer.appendChild(tocChapter);
            }
        };

    docModule.toc = {
        generateToc: generateToc
    };

    return docModule;
}(docModule || {}, document));
