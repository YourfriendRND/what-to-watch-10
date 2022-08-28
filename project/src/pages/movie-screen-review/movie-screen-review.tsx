import Logo from '../../components/logo/logo';
import ReviewForm from '../../components/review-form/review-form';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UnexistScreen from '../unexist-screen/unexist-screen';
import UserBlock from '../../components/user-block/user-block';
import { useAppSelector } from '../../hooks';

const MovieScreenReview = (): JSX.Element => {
  const queryParam = useParams();
  const currentFilm = useAppSelector((state) => state.currentFilm);

  if (!currentFilm) {
    return <UnexistScreen />;
  }

  return (
    <section className="film-card film-card--full" style={{ background: currentFilm.backgroundColor }}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={currentFilm.backgroundImage} alt={currentFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo isLightLogo={false} />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${queryParam.id}`} className="breadcrumbs__link">{currentFilm.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to="">Add review</Link>
              </li>
            </ul>
          </nav>

          <UserBlock />

        </header>
        <div className="film-card__poster film-card__poster--small">
          <img src={currentFilm.posterImage} alt={`${currentFilm.name} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm />
      </div>
    </section>);
};

export default MovieScreenReview;
