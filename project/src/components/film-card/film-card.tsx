import { Link } from 'react-router-dom';
import { Film } from '../../types/film';
import { Fragment, useState, useCallback } from 'react';
import VideoPlayer from '../video-player/video-player';
import { PREVIEW_VIDEO_PLAYER_DELAY } from '../../contants';

type FilmProp = {
  film: Film,
};

const FilmCard = ({ film }: FilmProp): JSX.Element => {
  const [timer, setTimer] = useState<number | null>(null);
  const [isPlayerActive, setPlayerActive] = useState(false);

  const handleMouseEnter = useCallback(() => {
    const timeout = window.setTimeout(() => {
      setPlayerActive(true);
    }, PREVIEW_VIDEO_PLAYER_DELAY);

    setTimer(timeout);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!timer) {
      return;
    }
    window.clearTimeout(timer);

    setPlayerActive(false);
  }, [timer]);

  return (
    <article className="small-film-card catalog__films-card" id={`${film.id}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
