import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import GenreList from '../genre-list/genre-list';
import FilmList from '../film-list/film-list';
import { Film } from '../../types/film';
import { FILM_LIMIT_ON_MAIN_SCREEN, BASE_GENRE_FILM } from '../../contants';
import ShowMoreButton from '../show-more-button/show-more-button';

type CatalogProp = {
  films: Film[],
  genre: string
};

const Catalog = ({ films, genre }: CatalogProp): JSX.Element => {
  const [filmQuantity, setFilmQuantity] = useState<number>(FILM_LIMIT_ON_MAIN_SCREEN);
  const clickButtonHandler = () => setFilmQuantity(filmQuantity + FILM_LIMIT_ON_MAIN_SCREEN);
  const filmListByGenre = genre !== BASE_GENRE_FILM ? films.filter((film) => film.genre === genre) : films;
  const { pathname } = useLocation();
  useEffect(() => {
    setFilmQuantity(FILM_LIMIT_ON_MAIN_SCREEN);
  }, [genre, pathname]);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenreList currentGenre={genre} films={films} />

      <FilmList films={filmListByGenre.slice(0, filmQuantity)} />

      <ShowMoreButton isActive={filmListByGenre.length > filmQuantity} clickHandler={clickButtonHandler} />
    </section>
  );
};

export default Catalog;
