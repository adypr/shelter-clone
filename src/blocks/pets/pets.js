import '@babel/polyfill';
import 'normalize.css';
import './pets.scss';
import '../friends-full/friends-full';
import '../header/header';

import {
  domElem, domList, addEvent, removeEvent
} from '../base/base';

import { Modal, addToolsClickHandler } from '../modal/modal';

window.onload = function () {
  addToolsClickHandler('.friends-full__container');
};
