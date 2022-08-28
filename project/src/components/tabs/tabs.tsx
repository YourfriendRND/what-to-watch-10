import { Fragment } from 'react';
import Comment from '../comment/comment';
import { Film } from '../../types/film';
import { FilmGrade, TabsTypes, HIGH_FILM_GRADE } from '../../contants';
import { TabView } from '../../types/general';
import { useAppSelector } from '../../hooks';

type TabsProp = {
  targetFilm: Film,
  tab: TabView
};

const getRunTime = (runTime: number): string => {
  const oneHour = 60;
  const minMinuteInterval = 10;
  const hours = Math.trunc(runTime / oneHour);
  const minutes = runTime % oneHour;
  if (minutes > 0 && minutes >= minMinuteInterval) {
    return `${hours}h ${minutes}m`;
  }
  if (minutes > 0 && minutes < minMinuteInterval) {
    return `${hours}h 0${minutes}m`;
  }
  return `${hours}h`;
};

const getFilmGrade = (rating: number): string => {
  const filmGrade = Object.keys(FilmGrade).find((grade) => {
    const [min, max] = FilmGrade[grade];
    if (rating >= min && rating < max) {
      return grade;
    }
    return undefined;
  });
  return filmGrade ? filmGrade : HIGH_FILM_GRADE;
};

const Tabs = ({ targetFilm, tab }: TabsProp): JSX.Element => {
  const comments = useAppSelector((state) => state.comments);

  switch (tab) {
    case TabsTypes.DETAILS: {
      return (
        <div className="film-card__text film-card__row">
          <div className="film-card__text-col">
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Director</strong>
              <span className="film-card__details-value">{targetFilm.director}</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Starring</strong>
              <span className="film-card__details-value">
                {targetFilm.starring.map((star, index, arr) => index !== arr.length - 1 ? <>{`${star},`} <br /></> : <>{star} <br /></>)}
              </span>
            </p>
          </div>
          <div className="film-card__text-col">
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Run Time</strong>
              <span className="film-card__details-value">{getRunTime(targetFilm.runTime)}</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Genre</strong>
              <span className="film-card__details-value">{targetFilm.genre}</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Released</strong>
              <span className="film-card__details-value">{targetFilm.released}</span>
            </p>
          </div>
        </div>);
    }
    case TabsTypes.REVIEW: {
      return <Fragment>{comments.map((commentItem) => <Comment key={commentItem.id} commentItem={commentItem} />)}</Fragment>;
    }
    default: {
      return (<Fragment>
        <div className="film-rating">
          <div className="film-rating__score">{targetFilm.rating}</div>
          <p className="film-rating__meta">
            <span className="film-rating__level">{getFilmGrade(targetFilm.rating)}</span>
            <span className="film-rating__count">{targetFilm.scoresCount} ratings</span>
          </p>
        </div>

        <div className="film-card__text">
          <p>{targetFilm.description}</p>
          <p className="film-card__director"><strong>Director: {targetFilm.director}</strong></p>
          <p className="film-card__starring"><strong>Starring: {targetFilm.starring.join(', ')} and other</strong></p>
        </div></Fragment>);
    }
  }
};

export default Tabs;
