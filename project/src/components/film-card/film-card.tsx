import { Link } from 'react-router-dom';
import { Film } from '../../types/film';
import { useState } from 'react';

type FilmProp = {
  film: Film
};

const FilmCard = ({ film }: FilmProp): JSX.Element => {
  const [, setActiveFilm] = useState(0);
  return (
    <article className="small-film-card catalog__films-card" id={`${film.id}`} onMouseOver={() => setActiveFilm(film.id)}>
      <div className="small-film-card__image">
        <img src={film.previewImage} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
};

export default FilmCard;
