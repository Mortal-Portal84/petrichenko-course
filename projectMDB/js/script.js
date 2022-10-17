/* Задания на урок:

 1) Удалить все рекламные блоки со страницы (правая часть сайта)

 2) Изменить жанр фильма, поменять "комедия" на "драма"

 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
 Реализовать только при помощи JS

 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
 Отсортировать их по алфавиту

 5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
  movies: [
    'Логан',
    'Лига справедливости',
    'Ла-ла лэнд',
    'Одержимость',
    'Скотт Пилигрим против...'],
};

// const promoImg = document.querySelectorAll('.promo__adv img');
// const banner = document.querySelector('.promo__bg');
// const filmList = document.querySelector('.promo__interactive-list');
//
// promoImg.forEach(item => {
//   item.remove();
// });
//
// banner.querySelector('.promo__genre').textContent = 'Драма';
// banner.style.backgroundImage = 'url("img/bg.jpg")';
//
// filmList.innerHTML = '';
//
// movieDB.movies.sort();
//
// for (let i = 0; i < movieDB.movies.length; i++) {
//   const listItem = document.createElement('li');
//   listItem.classList.add('promo__interactive-item');
//   filmList.append(listItem)
//
//   listItem.innerHTML = `${i+1}. ${movieDB.movies[i]}`
//
//   const listItemDecoration = document.createElement('div')
//   listItemDecoration.classList.add('delete')
//   listItem.append(listItemDecoration);
// }

const adv       = document.querySelectorAll('.promo__adv img'),
      poster    = document.querySelector('.promo__bg'),
      genre     = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');

adv.forEach(item => {
  item.remove();
});

genre.textContent = 'Драма';

movieList.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((film, number) => {
  movieList.innerHTML += `
     <li class="promo__interactive-item">${number + 1}. ${film}
     <div class="delete"></div>
     </li>
  `;

});
