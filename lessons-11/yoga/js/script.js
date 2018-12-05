window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

  const hideTabContent = (a) => {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  };

  hideTabContent(1);

  const showTabContent = (b) => {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  };

  info.addEventListener('click', function (event) {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  // Timer
  let deadline = '2018-12-5';

  const getTimeRemaining = (endtime) => {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor(t / (1000 * 60 * 60));

    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }

    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  };

  const setClock = (id, endtime) => {
    let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds');

    const updateClock = () => {
      let t = getTimeRemaining(endtime);
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;

      if (t.total <= 0) {
        clearInterval(timeInterval);
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
      }
    };
    let timeInterval = setInterval(updateClock, 1000);
  };

  setClock('timer', deadline);

  // Modal

  let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

  more.addEventListener('click', function () {
    overlay.style.display = 'block';
    this.classList.add('none');
    document.body.style.overflow = 'hidden';
  });

  close.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  });

  // Modal on click buttons in tabs

  let infoWrapper = document.querySelector('.info');

  infoWrapper.addEventListener('click', function (event) {
    let target = event.target;
    if (target && target.classList.contains('description-btn')) {
      overlay.style.display = 'block';
      target.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    }
  });

  //Forms

  let message = {
    loading: "Загрузка...",
    success: "Спасибо! Скоро мы с вами свяжемся!",
    failure: "Что-то пошло не так..."
  };

  let form = document.querySelector('.main-form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div'),
    form2 = document.querySelector('#form'),
    input2 = form2.getElementsByTagName('input'),
    inputPhone = document.getElementsByName('phone');
  statusMessage.classList.add('status');

  console.log(inputPhone);

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.appendChild(statusMessage);

    let request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    let formData = new FormData(form);

    let obj = {};

    formData.forEach(function (value, key) {
      obj[key] = value;
    });
    let json = JSON.stringify(obj);

    request.send(json);

    request.addEventListener('readystatechange', function () {
      if (request.readyState < 4) {
        //statusMessage.innerHTML = message.loading;
        statusMessage.innerHTML = "";
        let img = document.createElement("img");
        img.src = "img/ajax-loader.gif";
        statusMessage.appendChild(img);
      } else if (request.readyState == 4 && request.status == 200) {
        statusMessage.innerHTML = "";
        let success = document.createElement("img");
        success.src = "img/checked.png";
        success.width = 32;
        success.height = 32;
        statusMessage.appendChild(success);
      } else {
        //statusMessage.innerHTML = message.failure;
        statusMessage.innerHTML = "";
        let alarm = document.createElement("img");
        alarm.src = "img/cancel.png";
        alarm.width = 32;
        alarm.height = 32;
        statusMessage.appendChild(alarm);
      }
    });

    for (let i = 0; i < input.length; i++) {
      input[i].value = '';
    }
  });

  form2.addEventListener('submit', function (event) {
    event.preventDefault();
    form2.appendChild(statusMessage);

    let request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    let formData = new FormData(form2);

    let obj = {};

    formData.forEach(function (value, key) {
      obj[key] = value;
    });
    let json = JSON.stringify(obj);

    request.send(json);

    request.addEventListener('readystatechange', function () {
      if (request.readyState < 4) {
        //statusMessage.innerHTML = message.loading;
        statusMessage.innerHTML = "";
        let img = document.createElement("img");
        img.src = "img/ajax-loader.gif";
        statusMessage.appendChild(img);
      } else if (request.readyState == 4 && request.status == 200) {
        statusMessage.innerHTML = "";
        let success = document.createElement("img");
        success.src = "img/checked.png";
        success.width = 32;
        success.height = 32;
        statusMessage.appendChild(success);
      } else {
        //statusMessage.innerHTML = message.failure;
        statusMessage.innerHTML = "";
        let alarm = document.createElement("img");
        alarm.src = "img/cancel.png";
        alarm.width = 32;
        alarm.height = 32;
        statusMessage.appendChild(alarm);
      }
    });

    for (let i = 0; i < input2.length; i++) {
      input2[i].value = '';
    }
  });

  for (let i = 0; i < inputPhone.length; i++) {
    inputPhone[i].addEventListener('input', () => {
      inputPhone[i].value = inputPhone[i].value.replace(/[^\+?\d]/g, '');
    });
  }
});