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

const advertising  = document.querySelectorAll('.promo__adv img'),
      poster       = document.querySelector('.promo__bg'),
      genre        = poster.querySelector('.promo__genre'),
      movieList    = document.querySelector('.promo__interactive-list'),
      movieForm    = document.querySelector('form.add'),
      movieInput   = movieForm.querySelector('.adding__input'),
      formButton   = movieForm.querySelector('button'),
      formCheckbox = movieForm.querySelector('[type="checkbox"]');

poster.style.backgroundImage = 'url(img/bg.jpg)';

genre.textContent = 'Драма';

const removeElements = (list) => {
  list.forEach(listItem => {
    listItem.remove();
  });
};

removeElements(advertising);

const refreshDBList = (list) => {
  movieList.innerHTML = '';

  list.sort();

  list.forEach((film, number) => {

    if (film.length > 21) {
      film = `${film.slice(0, 21)}...`;
    }

    movieList.innerHTML += `
     <li class="promo__interactive-item">${number + 1}. ${film.toUpperCase()}
     <div class="delete"></div>
     </li>
  `;
  });

  document.querySelectorAll('.delete').forEach((btn, i) => {

    btn.addEventListener('click', () => {
      btn.parentElement.remove();

      movieDB.movies.splice(i, 1);

      refreshDBList(movieDB.movies);
    });
  });

};

refreshDBList(movieDB.movies);

formButton.addEventListener('click', (event) => {
  event.preventDefault();

  let newMovie = movieInput.value;

  if (newMovie) {
    movieDB.movies.push(newMovie);

    if (formCheckbox.checked) {
      console.log('Добавляем любимый фильм!');
      formCheckbox.checked = false;
    }

    refreshDBList(movieDB.movies);

    movieInput.value = '';
  }

});

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
