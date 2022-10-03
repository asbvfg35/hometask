"use strict";

const personalMoovieDB = {
  count: 0,
  moovies: {},
  actors: {},
  genres: [],
  privat: false,
};

personalMoovieDB.start = start;
personalMoovieDB.rememberMyFilms = rememberMyFilms;
personalMoovieDB.detectPersonalLevel = detectPersonalLevel;
personalMoovieDB.detectPersonalLevel = detectPersonalLevel;
personalMoovieDB.showMyDB = showMyDB;
personalMoovieDB.writeYourGenres = writeYourGenres;

function start() {
  personalMoovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
  while (personalMoovieDB.count == "" || personalMoovieDB.count == null || isNaN(numberOfFilms)) {
    personalMoovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов', '').trim();
    const b = prompt('На сколько оцените его', '');

    if (a != null && b != null && a.length < 50 && a != '' && b != '') {
      personalMoovieDB.moovies[a] = b;
    } else {
      i--;
    }
  }
}

function detectPersonalLevel() {
  if (personalMoovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMoovieDB.count <= 30) {
    console.log("Вы классический зритель");
  } else if (personalMoovieDB.count > 30) {
    console.log(" Вы - киноман");
  } else console.log("Произошла ошибка");
}

function showMyDB(hiden) {
  if (!hiden) console.log(personalMoovieDB);
}

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMoovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    let prom = personalMoovieDB.genres[i - 1];
    if (prom !== null || prom !== '') {
      personalMoovieDB.genres[i - 1] = prom;
    } else {
      i--;
    }
  }
  personalMoovieDB.genres.forEach((item, i) => console.log(`Любимый жанр ${i + 1} - это ${item}`));
}

personalMoovieDB.toggleVisibleMyDB = function () {
  if (personalMoovieDB.privat) {
    personalMoovieDB.privat = false;
  } else {
    personalMoovieDB.privat = true;
  }
};


