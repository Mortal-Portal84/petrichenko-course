'use strict';

// Practical work 1
let numberOfFilms;

const startQuiz = () => {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  while (!numberOfFilms || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
};

startQuiz();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

const rememberMyFilms = () => {
  for (let i = 0; i < 2; i++) {
    const lastFilm = prompt('Один из просмотренных фильмов?', '');
    const filmRating = +prompt('На сколько вы оцените его?', '');

    lastFilm && lastFilm.length < 50 && filmRating
    ? personalMovieDB['movies'][lastFilm] = filmRating
    : i--;
  }
};

rememberMyFilms();

const detectPersonalLevel = () => {
  if (personalMovieDB['count'] >= 30) {
    console.log('Вы киноман');
  } else if (personalMovieDB['count'] < 30 && personalMovieDB['count'] >= 10) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB['count'] < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else {
    console.log('Произошла ошибка');
  }
};

detectPersonalLevel();

const showMyDB = () => {
  if (!personalMovieDB['private']) {
    console.log(personalMovieDB);
  }
};

showMyDB();

const writeYourGenres = () => {
  for (let i = 0; i < 3; i++) {
    personalMovieDB['genres'].push(prompt(`Ваш любимый жанр под номером ${i + 1}`, ''));
  }
};

writeYourGenres();

