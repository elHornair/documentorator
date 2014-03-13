/*global window, document */

var docModule = (function (docModule, document) {

    "use strict";

    var utils = docModule.utils,
        addHeaders = function () {
            var i,
                header,
                mainChapters = document.getElementById('main').getElementsByTagName('h1');

            for (i = 0; i < mainChapters.length; i++) {
                header = document.createElement('div');
                header.setAttribute('class', 'title-current');
                header.appendChild(document.createTextNode(mainChapters[i].textContent));

                // insert header node after chapter heading
                mainChapters[i].parentNode.insertBefore(header, mainChapters[i].nextSibling);
            }
        };

    docModule.chapter = {
        addHeaders: addHeaders
    };

    return docModule;
}(docModule || {}, document));
