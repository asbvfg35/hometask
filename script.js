const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');


const personalMoovieDB = {
  count: numberOfFilms,
  moovies: {},
  actors: {},
  genres: [],
  privat: false,

};
const a = prompt('Один из последних просмотренных ~фильмов', '');
const b = prompt('На сколько оцените его', '');
const c = prompt('Один из последних просмотренных фильмов', '');
const d = prompt('На сколько оцените его', '');

personalMoovieDB.moovies[a] = b;
personalMoovieDB.moovies[c] = d;
console.log(personalMoovieDB);

