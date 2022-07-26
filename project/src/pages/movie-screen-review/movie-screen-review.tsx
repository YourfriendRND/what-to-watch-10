import Logo from '../../components/logo/logo';
import ReviewForm from '../../components/review-form/review-form';
import { Film } from '../../types/film';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UnexistScreen from '../unexist-screen/unexist-screen';
type MovieReviewProp = {
  filmList: Film[],
}

const MovieScreenReview = ({ filmList }: MovieReviewProp): JSX.Element => {
  const queryParam = useParams();
  const targetFilm = filmList.find((film) => film.id === Number(queryParam.id));
  return targetFilm
    ? (
      <section className="film-card film-card--full" style={{ background: targetFilm.backgroundColor }}>
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={targetFilm.backgroundImage} alt={targetFilm?.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <Logo isLightLogo={false} />

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`/films/${queryParam.id}`} className="breadcrumbs__link">{targetFilm.name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link" href="#/">Add review</a>
                </li>
              </ul>
            </nav>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link" href="#/">Sign out</a>
              </li>
            </ul>
          </header>
          <div className="film-card__poster film-card__poster--small">
            <img src={targetFilm.posterImage} alt={`${targetFilm.name} poster`} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <ReviewForm />
        </div>
      </section>)
    : <UnexistScreen />;
};

export default MovieScreenReview;
