"use strict";

let numberOfFilms;
function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMoovieDB = {
  count: numberOfFilms,
  moovies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов', '');
    const b = prompt('На сколько оцените его', '');

    if (a != null && b != null && a.length < 50 && a != '' && b != '') {

      personalMoovieDB.moovies[a] = b;

    } else {

      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMoovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMoovieDB.count <= 30) {
    console.log("Вы классический зритель");
  } else if (personalMoovieDB.count > 30) {
    console.log(" Вы - киноман");
  } else console.log("Произошла ошибка");
}

detectPersonalLevel();

function showMyDB(hiden) {
  if (!hiden) console.log(personalMoovieDB);
}

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMoovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`)
  }
}

