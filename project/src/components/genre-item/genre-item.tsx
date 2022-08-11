import { setGenre } from '../../store/action';
import { useAppDispatch } from '../../hooks/index';

type GenreItemProps = {
  genre: string,
};

const GenreItem = ( { genre }: GenreItemProps):JSX.Element => {
  const dispatch = useAppDispatch();
  const handlerGenreClick = () => dispatch(setGenre(genre));

  return (<a href="#/" className="catalog__genres-link" onClick={handlerGenreClick}>{genre}</a>);

};

export default GenreItem;
