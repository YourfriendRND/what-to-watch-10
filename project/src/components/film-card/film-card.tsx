import { Link } from 'react-router-dom';
import { Film } from '../../types/film';
import { Fragment, useState } from 'react';
import VideoPlayer from '../video-player/video-player';

type FilmProp = {
  film: Film,
  isPlayerActive: boolean,
  setActiveFilm: (id: number) => NodeJS.Timeout,
  resetActiveFilm: (id: number, timeout: NodeJS.Timeout | null) => void
};

const FilmCard = ({ film, isPlayerActive, setActiveFilm, resetActiveFilm }: FilmProp): JSX.Element => {
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  return (
    <article className="small-film-card catalog__films-card" id={`${film.id}`}
      onMouseEnter={() => setTimer(setActiveFilm(film.id))}
      onMouseLeave={() => resetActiveFilm(0, timer)}
    >
      {isPlayerActive
        ? <VideoPlayer videoLink={film.previewVideoLink} previewImage={film.previewImage} />
        :
        <Fragment>
          <div className="small-film-card__image">
            <img src={film.previewImage} alt={film.name} width="280" height="175" />
          </div>
          <h3 className="small-film-card__title">
            <Link className="small-film-card__link" to={`films/${film.id}`}>{film.name}</Link>
          </h3>
        </Fragment>}
    </article>);
};

export default FilmCard;
