/*global window, document */

var docModule = (function (docModule, document) {

    "use strict";

    var createCatalogElement = function (title, href) {
            var wrapper,
                anchor;

            wrapper = document.createElement('li');
            anchor = document.createElement('a');

            title = title.replace(/(<([^>]+)>)/ig, '');// stript tags from the title

            anchor.appendChild(document.createTextNode(title));
            anchor.setAttribute('href', href);
            wrapper.appendChild(anchor);

            return wrapper;
        },

        trim = function (str) {
            return str.replace(/^\s+|\s+$/g, '');
        };

    docModule.utils = {
        createCatalogElement: createCatalogElement,
        trim: trim
    };

    return docModule;
}(docModule || {}, document));
