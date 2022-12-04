import '@babel/polyfill';
import 'normalize.css';
import '../base/base';
import './main.scss';
import '../hero/hero';
import '../friends-short/friends-short';
import {
  domElem, domList, addEvent, removeEvent
} from '../base/base';
import PETS from '../base/friends';
import { addToolsClickHandler } from '../modal/modal';

window.onload = function () {
  addToolsClickHandler('.friends-short__container');
};
