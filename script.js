"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');


const personalMoovieDB = {
  count: numberOfFilms,
  moovies: {},
  actors: {},
  genres: [],
  privat: false,

};

// for (let i = 0; i < 2; i++) {
//   const a = prompt('Один из последних просмотренных фильмов', '');
//   const b = prompt('На сколько оцените его', '');

//   if (a != null && b != null && a.length < 50 && a != '' && b != '') {

//     personalMoovieDB.moovies[a] = b;
//     console.log('done');
//   } else {
//     console.log('Error');
//     i--;
//   }
// }

// console.log(personalMoovieDB);

// if (personalMoovieDB.count < 10) {
//   console.log("Просмотрено довольно мало фильмов");
// } else if (personalMoovieDB.count <= 30) {
//   console.log("Вы классический зритель");
// } else if (personalMoovieDB.count > 30) {
//   console.log(" Вы - киноман");
// } else console.log("Произошла ошибка");

let i = 0;
// while (i < 2) {
//   const a = prompt('Один из последних просмотренных фильмов', '');
//   const b = prompt('На сколько оцените его', '');

//   if (a != null && b != null && a.length < 50 && a != '' && b != '') {

//     personalMoovieDB.moovies[a] = b;
//     console.log('done');
//   } else {
//     console.log('Error');
//     i--;
//   }
//   i++;
// }


do {
  const a = prompt('Один из последних просмотренных фильмов', '');
  const b = prompt('На сколько оцените его', '');

  if (a != null && b != null && a.length < 50 && a != '' && b != '') {

    personalMoovieDB.moovies[a] = b;
    console.log('done');
  } else {
    console.log('Error');
    i--;
  }
  i++;
} while(i < 2)

console.log(personalMoovieDB);