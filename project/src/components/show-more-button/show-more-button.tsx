import { useAppDispatch } from '../../hooks/index';
import { setNumberFilmCard } from '../../store/action';

type ShowMoreButtonProp = {
  isActive: boolean
};

const ShowMoreButton = ({ isActive }: ShowMoreButtonProp): JSX.Element => {
  const dispatch = useAppDispatch();
  const clickButtonHandler = () => dispatch(setNumberFilmCard());
  return isActive ?
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={clickButtonHandler}>Show more</button>
    </div>
    : <div className="catalog__more"></div>;
};

export default ShowMoreButton;
