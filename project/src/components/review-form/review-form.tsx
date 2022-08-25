import RatingStar from '../rating-star/rating-star';
import { FormEvent, useRef, useState } from 'react';
import { createComment } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { CommentTemplate } from '../../types/general';
import { MIN_FILM_RATING, MAX_FILM_RATING } from '../../contants';

const ReviewForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const queryParams = useParams();
  const [reviewText, setReviewText] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const postButtonRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  const commentTamplate:CommentTemplate = {
    filmId: Number(queryParams.id),
    comment: reviewText,
    rating: MIN_FILM_RATING
  };

  const submitHandler = (evt:FormEvent) => {
    evt.preventDefault();
    dispatch(createComment(commentTamplate));
    if (postButtonRef.current && textAreaRef.current) {
      postButtonRef.current.disabled = true;
      textAreaRef.current.disabled = true;
    }
    navigate(`/films/${queryParams.id}`);
  };

  return (
    <form action="#" className="add-review__form" onSubmit={submitHandler}>
      <div className="rating">
        <div className="rating__stars">
          {Array.from({length: MAX_FILM_RATING}, (element, index) => <RatingStar starId={MAX_FILM_RATING - index} commentTemplate={commentTamplate} />)}
        </div>
      </div>

      <div className="add-review__text" style={{ background: '#DFDFDF' }}>
        <textarea className="add-review__textarea" ref={textAreaRef} name="review-text" id="review-text" placeholder="Review text" value={reviewText} onChange={(evt) => setReviewText(evt.target.value)}>
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" ref={postButtonRef} type="submit">Post</button>
        </div>
      </div>
    </form>
  );
};

export default ReviewForm;
