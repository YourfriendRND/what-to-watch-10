import { Fragment } from 'react';
import { Film } from '../../types/film';
import { TabsTypes } from '../../contants';
import { TabView } from '../../types/general';

type TabsProp = {
  targetFilm: Film,
  tab: TabView
};

const getRunTime = (runTime: number):string => {
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

const Tabs = ({ targetFilm, tab }: TabsProp): JSX.Element => {
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
                {targetFilm.starring.map((star, index, arr) => index !== arr.length - 1 ? <>{`${star},`} <br/></> : <>{star} <br/></>)}
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
      return (
        <div className="film-card__reviews film-card__row">
          <div className="film-card__reviews-col">
            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&apos;s funniest and most exquisitely designed films in years.</p>

                <footer className="review__details">
                  <cite className="review__author">Kate Muir</cite>
                  <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
                </footer>
              </blockquote>

              <div className="review__rating">8,9</div>
            </div>
          </div>
        </div>);
    }
    default: {
      return (<Fragment>
        <div className="film-rating">
          <div className="film-rating__score">{targetFilm.rating}</div>
          <p className="film-rating__meta">
            <span className="film-rating__level">Very good</span>
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
