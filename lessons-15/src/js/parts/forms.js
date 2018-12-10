function forms() {

  let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
  };

  let form = document.querySelector('.main-form'),
    input = document.querySelectorAll('input[type=tel]'),
    statusMessage = document.createElement('div'),
    form2 = document.getElementById('form'),
    inputsGroups = document.querySelectorAll('input');

  input.forEach(function (item) {
    item.addEventListener('keydown', function (e) {
      if (!/\d|\+/gm.test(e.key) && e.keyCode != 8) {
        e.preventDefault();
      }
      if (item.value.indexOf('+') != -1 && e.key == '+') {
        e.preventDefault();
      }
    });
  });

  statusMessage.classList.add('status');

  [form, form2].forEach(function (item) {
    item.addEventListener('submit', function (event) {
      event.preventDefault();
      item.appendChild(statusMessage);
      let input = item.getElementsByTagName('input');

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
        for (let i = 0; i < input.length; i++) {
          input[i].value = '';
        }
      }
      postData(formData)
        .then(() => (statusMessage.innerHTML = message.loading))
        .then(() => (statusMessage.innerHTML = message.success))
        .catch(() => (statusMessage.innerHTML = message.failure))
        .then(() => cleanInput());
    });
  });

}

export default forms;