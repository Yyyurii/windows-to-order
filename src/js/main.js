import './slider';
import modal from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';

document.addEventListener('DOMContentLoaded', () => {
  let modalState = {};
  let deadline = '2022-07-01';

  changeModalState(modalState);
  modal();
  tabs();
  forms(modalState);
  timer('.container1', deadline);
});