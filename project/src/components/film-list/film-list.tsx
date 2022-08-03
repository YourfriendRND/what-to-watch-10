import FilmCard from '../film-card/film-card';
import { Film } from '../../types/film';

type FilmListProp = {
  films: Film[]
};

const FilmList = ({ films }: FilmListProp): JSX.Element => (
  <div className="catalog__films-list">
    {films.map((film) => <FilmCard key={film.id} film={film} isDefaultView/>)}
  </div>
);

export default FilmList;
