/*global window, document */

var docModule = (function (docModule, document) {
    "use strict";

    docModule.init = function () {
        docModule.toc.generateToc();
        docModule.chapter.addHeaders();
        docModule.catalog.generateFigureCatalog();
        docModule.catalog.generateTableCatalog();
        docModule.catalog.generateSourceCatalog();
    };

    return docModule;
}(docModule || {}, document));

window.onload = docModule.init;