import { Film } from '../../types/film';
import GenreItem from '../genre-item/genre-item';
import { BASE_GENRE_FILM, MAX_GENRE_COUNT } from '../../contants';

type GenreListProp = {
  currentGenre: string,
  films: Film[]
};

const GenreList = ({currentGenre, films}: GenreListProp): JSX.Element => {
  const getUniqGenre = ():string[] => {
    const genresCollection = new Set<string>();
    films.forEach((film) => genresCollection.add(film.genre));
    return Array.from(genresCollection);
  };

  const genreList = [BASE_GENRE_FILM, ...getUniqGenre()].slice(0, MAX_GENRE_COUNT);

  return (
    <ul className="catalog__genres-list">
      {genreList.map((genre) => <li key={genre} className={currentGenre === genre ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}><GenreItem genre={genre} /></li>)}
    </ul>
  );
};

export default GenreList;
