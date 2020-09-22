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
export class VlDocument extends vlElement(HTMLElement) {
  constructor() {
    super(`
        <style>
            @import '/node_modules/vl-ui-document/dist/style.css';
        </style>
        <div class="vl-col--1-4 vl-col--1-2--m vl-col--1-1--s">
            <a class="vl-document" href="#">
            <div class="vl-document__type">
                <i class="vl-vi vl-vi-document" aria-hidden="true"></i>
                <span class="vl-document__type__text">
                    <slot name="type"></slot>
                </span>
            </div>
            <div class="vl-document__content">
                <div class="vl-document__title vl-link" data-vl-clamp="2">
                    <slot name="title"></slot>
                </div>
                <div class="vl-document__metadata">
                    <slot name="metadata"></slot>
                </div>
            </div>
            </a>
        </div>
    `);
  }
}

define('vl-document', VlDocument);
