type ShowMoreButtonProp = {
  isActive: boolean,
  clickHandler: () => void
};

const ShowMoreButton = ({ isActive, clickHandler }: ShowMoreButtonProp): JSX.Element => (
  isActive
    ? <div className="catalog__more"><button className="catalog__button" type="button" onClick={clickHandler}>Show more</button></div>
    : <div className="catalog__more"></div>
);

export default ShowMoreButton;
