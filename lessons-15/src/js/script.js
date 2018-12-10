import calculator from './parts/calculator.js';
import forms from './parts/forms.js';
import slider from './parts/slider.js';
import modal from './parts/modal.js';
import tabs from './parts/tabs.js';
import timer from './parts/timer.js';

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  calculator();
  forms();
  modal();
  slider();
  tabs();
  timer();
});