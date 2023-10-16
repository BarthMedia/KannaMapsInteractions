// + Imports +

// Base
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Custom
import * as utils from './helper/controller/utils';
import * as model from './model';
import view from './view';

// + Declare +
declare global {
  var $: any;
  var ls: any;
  var gsap: any;
  var StudioForm: any;
}

// + Functions +

// Main
const main = async function () {
  // enable encryption globally
  ls.config.encrypt = true;

  // optionally use a different secret key
  ls.config.secret = 420;

  // Set path
  localStorage.setItem('lastVisitedPath', location.pathname);

  // Initialize model
  await model.init();

  // Initialize view
  view(model.state);
};

// + Initialize +
utils.load(
  () => {
    (function t() {
      if ('undefined' != typeof StudioForm) {
        main();
        return;
      }
      setTimeout(t, 4);
    })();
  },
  {
    type: typeof ls,
    src: 'https://cdn.jsdelivr.net/npm/localstorage-slim',
  }
);
