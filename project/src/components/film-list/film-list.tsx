import FilmCard from '../film-card/film-card';
import { Film } from '../../types/film';
import { useState } from 'react';


type FilmListProp = {
  films: Film[]
};

const FilmList = ({ films }: FilmListProp): JSX.Element => {
  const [playerActive, setPlayerActive] = useState(0);
  const setActiveFilm = (id: number) => setTimeout(() => setPlayerActive(id), 1000);
  const resetActiveFilm = (id: number, timer: NodeJS.Timeout | null) => {
    setPlayerActive(id);
    if (timer) {
      clearTimeout(timer);
    }
  };
  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmCard key={film.id} film={film} setActiveFilm={setActiveFilm} resetActiveFilm={resetActiveFilm} isPlayerActive={playerActive === film.id}/>)}
    </div>
  );
};


export default FilmList;
