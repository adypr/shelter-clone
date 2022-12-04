export const domElem = (selector) => document.querySelector(selector);
export const domList = (selector) => document.querySelectorAll(selector);

export const addEvent = (...args) => args[0].addEventListener(...args.slice(1));
export const removeEvent = (...args) => args[0].removeEventListener(...args.slice(1));

export const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
