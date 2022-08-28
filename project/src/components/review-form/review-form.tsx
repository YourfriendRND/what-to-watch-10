import RatingStar from '../rating-star/rating-star';
import Error from '../error/error';
import { FormEvent, Fragment, useEffect, useRef, useState } from 'react';
import { clearErrorMessage, createComment } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useParams, useNavigate } from 'react-router-dom';
import { CommentTemplate } from '../../types/general';
import { MAX_FILM_RATING } from '../../contants';

const ReviewForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const queryParams = useParams();
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(0);
  const [isCommentSentStatus, setCommentStatus] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const postButtonRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const error = useAppSelector((state) => state.error);

  const commentTamplate: CommentTemplate = {
    filmId: Number(queryParams.id),
    comment: reviewText,
    rating: reviewRating
  };

  const setSubmitButtonDisabled = (isDisabled: boolean): void => {
    if (postButtonRef.current && textAreaRef.current) {
      postButtonRef.current.disabled = isDisabled;
      textAreaRef.current.disabled = isDisabled;
    }
  };

  const submitHandler = (evt: FormEvent) => {
    evt.preventDefault();
    setSubmitButtonDisabled(true);
    dispatch(createComment(commentTamplate));
    setCommentStatus(true);
  };

  useEffect(() => {
    if (isCommentSentStatus && !error) {
      navigate(`/films/${queryParams.id}`);
      return;
    }
    if (error) {
      setSubmitButtonDisabled(false);
      dispatch(clearErrorMessage());
    }
  }, [dispatch, error, queryParams, navigate, isCommentSentStatus]);

  const isPostBtnDisabled = (): boolean => {
    if (reviewText.length < 50 || reviewText.length > 400 || !commentTamplate.rating) {
      return true;
    }
    return false;
  };

  return (
    <Fragment>
      <form action="#" className="add-review__form" onSubmit={submitHandler}>
        <div className="rating">
          <div className="rating__stars">
            {Array.from({ length: MAX_FILM_RATING }, (element, index) => <RatingStar starId={MAX_FILM_RATING - index} onChangeRating={setReviewRating} currentRating={reviewRating} />)}
          </div>
        </div>

        <div className="add-review__text" style={{ background: '#DFDFDF' }}>
          <textarea className="add-review__textarea" ref={textAreaRef} name="review-text" id="review-text" placeholder="Review text" value={reviewText} onChange={(evt) => setReviewText(evt.target.value)}>
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" ref={postButtonRef} type="submit" disabled={isPostBtnDisabled()}>Post</button>
          </div>
        </div>
      </form>
      <Error ></Error>
    </Fragment>
  );
};

export default ReviewForm;
