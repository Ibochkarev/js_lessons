'use strict';

let age = document.getElementById('age'),
    value = age.value,
    user = new User ('Ivan', 'Petrichenko', value);

class User {
  constructor(surname, name, value) {
    this.surname = surname;
    this.name = name;
    this.value = value;
  }
}

function showUser(surname, name) {
  alert("Пользователь " + this.surname + " " + this.name + ", его возраст " + this.value);
}

showUser.apply(user, ['surname', 'name']);
