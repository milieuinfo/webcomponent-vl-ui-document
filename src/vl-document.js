import {vlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';

/**
 * VlDocument
 * @class
 * @classdesc Gebruik de document component om een link naar een bestand toe te voegen dat de gebruiker kan bekijken in de browser of downloaden.
 *
 * @extends HTMLElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-document/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-document/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-document.html|Demo}
 *
 */
export class VlDocument extends vlElement(HTMLElement) {}

define('vl-document', VlDocument);
