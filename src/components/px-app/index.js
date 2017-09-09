
import {Element as PolymerElement} from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-if';

import globalCss from './../../postcss/global.postcss';
import css from './style.postcss';
import template from './template.html';

import reduxMixin from './../../lib/store/mixin';
import {increment} from './store/actions';

export default class PxApp extends reduxMixin(PolymerElement) {

  static get properties() {
    return {
      name: {
        type: String
      },
      currentCount: {
        type: Number,
        statePath: 'app'
      },
      someProp: {
        type: String,
        value: 'awesome prop',
        observer: '_obsPropChanged'
      },
      showChangedProp: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      }
    };
  }

  static get template() {
    return `<style>${globalCss} ${css}</style> ${template}`;
  }

  constructor() {
    super();
    console.log('Old ready() callback');

    // For testing the observer, remove me.
    setTimeout(() => {
      this.someProp = 'chaaaaaaange';
      this.dispatch(increment());
      // Tested with WCT
      this.dispatchEvent(new CustomEvent('prop-changed'));
    }, 2000);
  }

  _obsPropChanged(value, oldValue) {
    if (oldValue === undefined) {
      return false;
    }

    console.log('Prop changed ->', value, oldValue);
    // For testing the dom-if, remove me.
    setTimeout(() => {
      this.showChangedProp = true;
    }, 2000);
  }
}

window.customElements.define('px-app', PxApp);
