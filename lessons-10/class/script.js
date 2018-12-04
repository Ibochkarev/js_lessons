'use strict';

class Options {
  constructor(height, width, bg, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }

  createNewDiv(text) {
    let div = document.createElement('div');
    div.style.cssText = `height: ${this.height}px; width: 
    ${this.width}px; background: ${this.bg}; font-size: 
    ${this.fontSize}px; text-align: ${this.textAlign}`;
    div.textContent = text;
    elem.appendChild(div);
  }
}

let elem = document.body;
elem.style.cssText = 'color: red; font-size: 20px; font-weight: bold;';

let div = new Options(700, 1200, '#ccc', 16, 'center').createNewDiv('тут должен быть текст');