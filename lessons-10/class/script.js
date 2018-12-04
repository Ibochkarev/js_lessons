'use strict';

class Options {
  constructor(
    height = 'auto',
    width = '700px',
    bg = '#ccc',
    fontSize = '16px',
    textAlign = 'center'
  ) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }

  createNewDiv(elem, text) {
    let div = document.createElement('div');
    div.style.height = this.height;
    div.style.height = this.height;
    div.style.width = this.width;
    div.style.background = this.bg;
    div.style.fontSize = this.fontSize;
    div.style.textAlign = this.textAlign;
    div.textContent = text;
    elem.appendChild(div);
  }
}

let elem = document.body;
elem.style.cssText = 'color: red; font-size: 20px; font-weight: bold;';

let div = new Options().createNewDiv(elem, 'тут должен быть текст');
