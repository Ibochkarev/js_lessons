window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

  const hideTabContent = a => {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  };

  hideTabContent(1);

  const showTabContent = b => {
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

  const getTimeRemaining = endtime => {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor(t / (1000 * 60 * 60));

    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (hours < 10) {
      hours = '0' + hours;
    }

    return {
      total: t,
      hours: hours,
      minutes: minutes,
      seconds: seconds
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
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
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
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
  };

  let form = document.querySelector('.main-form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div'),
    form2 = document.getElementById('form'),
    inputsGroups = document.querySelectorAll('input');

  inputsGroups.forEach(function (item) {
    if (item.type == 'tel') {
      item.addEventListener('keydown', function (e) {
        if (!/\d|\+/gm.test(e.key) && e.keyCode != 8) {
          e.preventDefault();
        }
        if (item.value.indexOf('+') != -1 && e.key == '+') {
          e.preventDefault();
        }
      });
    }
  });

  statusMessage.classList.add('status');

  /*   [form, form2].forEach(function(item) {
      item.addEventListener('submit', function(event) {
        event.preventDefault();
        item.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader(
          'Content-type',
          'application/json; charset=utf-8'
        );

        let formData = new FormData(item);

        let obj = {};

        formData.forEach(function(value, key) {
          obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function() {
          if (request.readyState < 4) {
            //statusMessage.innerHTML = message.loading;
            statusMessage.innerHTML = '';
            let img = document.createElement('img');
            img.src = 'img/ajax-loader.gif';
            statusMessage.appendChild(img);
          } else if (request.readyState == 4 && request.status == 200) {
            statusMessage.innerHTML = '';
            let success = document.createElement('img');
            success.src = 'img/checked.png';
            success.width = 32;
            success.height = 32;
            statusMessage.appendChild(success);
          } else {
            //statusMessage.innerHTML = message.failure;
            statusMessage.innerHTML = '';
            let failure = document.createElement('img');
            failure.src = 'img/cancel.png';
            failure.width = 32;
            failure.height = 32;
            statusMessage.appendChild(failure);
          }
        });

        for (let i = 0; i < input.length; i++) {
          input[i].value = '';
        }
      });
    }); */

  [form, form2].forEach(function (item) {
    item.addEventListener('submit', function (event) {
      event.preventDefault();
      item.appendChild(statusMessage);

      let formData = new FormData(item);

      function postData(data) {
        return new Promise(function (resolve, reject) {

          let request = new XMLHttpRequest();

          request.open('POST', 'server.php');
          request.setRequestHeader(
            'Content-type',
            'application/x-www-form-urlencoded'
          );

          request.onreadystatechange = function () {
            if (request.readyState < 4) {
              //statusMessage.innerHTML = message.loading;
              resolve();
            } else if (request.readyState === 4) {
              if (request.status == 200 && request.readyState == 4) {
                resolve();
              } else {
                reject();
              }
            }
          };
          request.send(data);
        });

      }

      function cleanInput() {
        for (let i = 0; i < inputsGroups.length; i++) {
          inputsGroups[i].value = "";
        }
      }
      postData(formData).then(() => statusMessage.innerHTML = message.loading)
        .then(() => statusMessage.innerHTML = message.success)
        .catch(() => statusMessage.innerHTML = message.failure)
        .then(() => cleanInput());
    });
  });
});