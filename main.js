'use strict';

// Practical work 1

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  startQuiz: () => {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (!personalMovieDB.count || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: () => {
    for (let i = 0; i < 2; i++) {
      const lastFilm = prompt('Один из просмотренных фильмов?', '');
      const filmRating = +prompt('На сколько вы оцените его?', '');

      lastFilm && lastFilm.length < 50 && filmRating
      ? personalMovieDB['movies'][lastFilm] = filmRating
      : i--;
    }
  },
  detectPersonalLevel: () => {
    if (personalMovieDB['count'] >= 30) {
      console.log('Вы киноман');
    } else if (personalMovieDB['count'] < 30 && personalMovieDB['count'] >= 10) {
      console.log('Вы классический зритель');
    } else if (personalMovieDB['count'] < 10) {
      console.log('Просмотрено довольно мало фильмов');
    } else {
      console.log('Произошла ошибка');
    }
  },
  showMyDB: () => {
    if (!personalMovieDB['private']) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: () => {
    !personalMovieDB['private']
    ? personalMovieDB['private'] = true
    : personalMovieDB['private'] = false;
  },
  writeYourGenres: () => {
    for (let i = 0; i < 3; i++) {
      const genre = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
      genre ? personalMovieDB['genres'].push(genre)
            : i--;
    }
    personalMovieDB['genres'].forEach((favoriteGenre, genreNumber) => {
      console.log(`Любимый жанр ${genreNumber + 1} - это ${favoriteGenre}`);
    });
  },
};
