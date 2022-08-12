import { setGenre, resetNumberFilmCard } from '../../store/action';
import { useAppDispatch } from '../../hooks/index';
import { SyntheticEvent } from 'react';

type GenreItemProps = {
  genre: string,
};

const GenreItem = ( { genre }: GenreItemProps):JSX.Element => {
  const dispatch = useAppDispatch();
  const handlerGenreClick = (evt:SyntheticEvent) => {
    evt.preventDefault();
    dispatch(setGenre(genre));
    dispatch(resetNumberFilmCard());
  };

  return (<a href="#/" className="catalog__genres-link" onClick={handlerGenreClick}>{genre}</a>);

};

export default GenreItem;
