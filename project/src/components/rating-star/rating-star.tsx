import { ChangeEvent, Fragment } from 'react';
import { CommentTemplate } from '../../types/general';

type RatingStarProp = {
  starId: number,
  commentTemplate: CommentTemplate
}

const RatingStar = ({ starId, commentTemplate }: RatingStarProp): JSX.Element => {
  const onChangedHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    commentTemplate.rating = Number(evt.target.value);
  };
  return (
    <Fragment>
      <input className="rating__input" id={`star-${starId}`} type="radio" name="rating" value={starId} onChange={onChangedHandler} />
      <label className="rating__label" htmlFor={`star-${starId}`}>Rating {starId}</label>
    </Fragment>
  );
};

export default RatingStar;

