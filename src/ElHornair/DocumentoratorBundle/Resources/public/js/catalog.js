/*global window, document */

var docModule = (function (docModule, document) {

    "use strict";

    var utils = docModule.utils,
        generateCatalog = function (catalogContainer, referencedElements, idPrefix, itemLabel) {
            var i,
                id;

            for (i = 0; i < referencedElements.length; i++) {
                id = idPrefix + i;
                referencedElements[i].setAttribute('id', id);// set id of target element, so we can link to it
                catalogContainer.appendChild(
                    utils.createCatalogElement(itemLabel + ' ' + (i + 1) + ': ' + referencedElements[i].innerHTML, '#' + id)
                );
            }
        },

        generateFigureCatalog = function () {
            generateCatalog(
                document.getElementById('fig_catalog'),
                document.getElementById('content').getElementsByTagName('figcaption'),
                'fig-caption-id',
                'Abbildung'
            );
        },

        generateTableCatalog = function () {
            generateCatalog(
                document.getElementById('table_catalog'),
                document.getElementById('content').getElementsByTagName('caption'),
                'table-caption-id',
                'Tabelle'
            );
        },

        createSourceElement = function (content) {
            var wrapper = document.createElement('li');
            wrapper.appendChild(document.createTextNode(content));

            return wrapper;
        },

        getSortedSources = function (originalSources) {
            var i,
                sortedKeys = [],
                sortedSources = [];

            for (i in originalSources) {
                if (originalSources.hasOwnProperty(i)) {
                    sortedKeys.push(i);
                }
            }

            sortedKeys.sort();

            for (i in sortedKeys) {
                if (sortedKeys.hasOwnProperty(i)) {
                    sortedSources.push(originalSources[sortedKeys[i]]);
                }
            }

            return sortedSources;
        },

        generateSourceCatalog = function () {
            var i,
                catalogContainer = document.getElementById('source_catalog'),
                sources = document.getElementById('content').getElementsByClassName('footnote-source'),
                catalogElement,
                label,
                labelElement,
                catalogArray = [];

            for (i = 0; i < sources.length; i++) {
                catalogElement = createSourceElement('');

                // add label
                label = utils.trim(sources[i].childNodes[0].nodeValue);
                labelElement = document.createElement('span');
                labelElement.appendChild(document.createTextNode(label));
                labelElement.className = 'footnote-source-label';
                catalogElement.appendChild(labelElement);

                // add details
                catalogElement.appendChild(sources[i].getElementsByClassName('footnote-source-additional')[0]);

                // log a warning if the label already exists in the catalog
                if (catalogArray[label] !== undefined) {
                    console.log('Warning: You have a colliding catalog element - ' + label);
                }

                catalogArray[label] = catalogElement;
            }

            catalogArray = getSortedSources(catalogArray);

            for (i = 0; i < catalogArray.length; i++) {
                catalogContainer.appendChild(catalogArray[i]);
            }
        };

    docModule.catalog = {
        generateFigureCatalog: generateFigureCatalog,
        generateTableCatalog: generateTableCatalog,
        generateSourceCatalog: generateSourceCatalog
    };

    return docModule;
}(docModule || {}, document));
