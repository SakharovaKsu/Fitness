import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import './modules/init-tab';
import {initPlayer} from './modules/init-player';
import {getSlider} from './modules/get-slider';
import {scrollPage} from './modules/scroll-page';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  scrollPage();

  // Modules
  // ---------------------------------

  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initPlayer();
    getSlider();
    const form = new Form();
    window.form = form;
    form.init();
  });
});
