import FilmCard from '../film-card/film-card';
import { Film } from '../../types/film';

type FilmListProp = {
  films: Film[],
  maxFilmsNumber: number
};

const FilmList = ({ films, maxFilmsNumber }: FilmListProp): JSX.Element => (
  <div className="catalog__films-list">
    {films.map((film) => <FilmCard key={film.id} film={film} isDefaultView />).slice(0, maxFilmsNumber)}
  </div>
);

export default FilmList;
