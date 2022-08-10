import { Film } from '../../types/film';
import GenreItem from '../genre-item/genre-item';
import { BASE_GENRE_FILM } from '../../contants';

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

  const genreList = [BASE_GENRE_FILM, ...getUniqGenre()];

  return (
    <ul className="catalog__genres-list">
      {genreList.map((genre) => <GenreItem key={genre} genre={genre} activeGenre={currentGenre}/>)}
    </ul>
  );
};

export default GenreList;
