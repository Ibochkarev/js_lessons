function calculator() {

  let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),
    personsSum = 0,
    daysSum = 0,
    total = 0,
    counter = document.querySelector('.counter'),
    counterInput = document.querySelectorAll('.counter-block-input');

  totalValue.innerHTML = 0;

  persons.addEventListener('change', function () {
    personsSum = +this.value;

    for (let i = 0; i < place.length; i++) {
      total = ((daysSum + personsSum) * 4000) *
        place.options[place.selectedIndex].value;
    }

    if (personsSum == '' || personsSum == 0 || daysSum == '' || daysSum == 0) {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }

  });

  restDays.addEventListener('change', function () {
    daysSum = +this.value;

    for (let i = 0; i < place.length; i++) {
      total = ((daysSum + personsSum) * 4000) *
        place.options[place.selectedIndex].value;
    }

    if (personsSum == '' || personsSum == 0 || daysSum == '' || daysSum == 0) {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }

  });

  place.addEventListener('change', function () {
    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      let a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  });

  for (let i = 0; i < counterInput.length; i++) {
    counterInput[i].addEventListener('input', () => {
      counterInput[i].value = counterInput[i].value.replace(/(\D)/g, '');
    });
  }
}

export default calculator;