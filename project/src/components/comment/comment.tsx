import dayjs from 'dayjs';
import { FilmComment } from '../../types/general';

const getSystemDate = (commentDate: string): string => dayjs(commentDate).format('YYYY-MM-DD');

const getHuminizeDateTime = (commentDate: string): string => dayjs(commentDate).format('MMMM DD, YYYY');

type CommentProp = {
  commentItem: FilmComment
}

const Comment = ({ commentItem:{comment, user, rating, date}}: CommentProp): JSX.Element => (
  <div className="film-card__reviews film-card__row">
    <div className="film-card__reviews-col">
      <div className="review">
        <blockquote className="review__quote">
          <p className="review__text">{comment}</p>

          <footer className="review__details">
            <cite className="review__author">{user.name}</cite>
            <time className="review__date" dateTime={getSystemDate(date)}>{getHuminizeDateTime(date)}</time>
          </footer>
        </blockquote>

        <div className="review__rating">{rating}</div>
      </div>
    </div>
  </div>
);

export default Comment;
