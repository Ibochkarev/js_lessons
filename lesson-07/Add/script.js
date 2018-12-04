'use strict';

let btn = document.querySelector('.startBtn'),
  box = document.querySelector('.box');

function Animate() {
  let pos = 0;

  let id = setInterval(frame, 10);

  function frame() {
    if (pos == 300) {
      clearInterval(id);
    } else {
      pos++;
      box.style.top = pos + 'px';
    }
  }
}

btn.addEventListener('click', Animate);