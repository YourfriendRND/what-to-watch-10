import { Film } from '../../types/film';
import { SyntheticEvent } from 'react';
import { useAppDispatch } from '../../hooks/index';
import { changeGenre, getUpdatedFilmList } from '../../store/action';

type GenreListProp = {
  currentGenre: string,
  films: Film[]
};

const GenreList = ({currentGenre, films}: GenreListProp): JSX.Element => {
  const dispatch = useAppDispatch();
  const handlerGenreClick = (evt: SyntheticEvent) => {
    evt.preventDefault();
    const checkedGenre = evt.currentTarget.textContent;
    if (checkedGenre) {
      dispatch(changeGenre(checkedGenre));
      dispatch(getUpdatedFilmList());
    }
  };

  const getUniqGenre = ():string[] => {
    const genresCollection = new Set<string>();
    films.forEach((film) => genresCollection.add(film.genre));
    return Array.from(genresCollection);
  };

  return (
    <ul className="catalog__genres-list">
      <li className={currentGenre === 'All genres' ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}>
        <a href="#/" className="catalog__genres-link" onClick={handlerGenreClick}>All genres</a>
      </li>
      {getUniqGenre().map((genre) => (<li key={genre} className={currentGenre === genre ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}><a href="#/" className="catalog__genres-link" onClick={handlerGenreClick}>{genre}</a></li>))}
    </ul>
  );
};

export default GenreList;
