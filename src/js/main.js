import './slider';
import modal from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';

document.addEventListener('DOMContentLoaded', () => {
  let modalState = {};

  changeModalState(modalState);
  modal();
  tabs();
  forms(modalState);
});