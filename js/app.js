const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ' ');
const a = prompt('Назовите один из последних просмотренных фильмов?', ' '),
  b = +prompt('На сколько оцение данный фильм?', ' '),
  c = prompt('Назовите один из последних просмотренных фильмов?', ' '),
  d = +prompt('На сколько оцение данный фильм?', ' ');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
