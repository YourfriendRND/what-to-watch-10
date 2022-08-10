import { SyntheticEvent } from 'react';
import { setGenre } from '../../store/action';
import { useAppDispatch } from '../../hooks/index';

type GenreItemProps = {
  genre: string,
  activeGenre: string
};

const GenreItem = ( { genre, activeGenre }: GenreItemProps):JSX.Element => {
  const dispatch = useAppDispatch();
  const handlerGenreClick = (evt: SyntheticEvent) => {
    evt.preventDefault();
    const checkedGenre = evt.currentTarget.textContent;
    if (checkedGenre) {
      dispatch(setGenre(checkedGenre));
    }
  };

  return (<li className={activeGenre === genre ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}><a href="#/" className="catalog__genres-link" onClick={handlerGenreClick}>{genre}</a></li>);

};

export default GenreItem;
