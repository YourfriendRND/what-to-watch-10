import { ChangeEvent, Fragment } from 'react';

type RatingStarProp = {
  starId: number,
  onChangeRating: React.Dispatch<React.SetStateAction<number>>,
  currentRating: number
}

const RatingStar = ({ starId, onChangeRating, currentRating }: RatingStarProp): JSX.Element => {
  const onChangedHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    onChangeRating(Number(evt.target.value));
  };
  return (
    <Fragment>
      <input className="rating__input" id={`star-${starId}`} type="radio" name="rating" value={starId} onChange={onChangedHandler} checked={currentRating === starId} />
      <label className="rating__label" htmlFor={`star-${starId}`}>Rating {starId}</label>
    </Fragment>
  );
};

export default RatingStar;

