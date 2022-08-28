import { useAppSelector, useAppDispatch } from '../../hooks';
import { AuthorizationStatus, AppPageRoute } from '../../contants';
import { Fragment, SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../store/api-actions';

const UserBlock = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const userAuthStatus = useAppSelector((state) => state.authorizationStatus);
  const logoutClickHandler = (evt:SyntheticEvent) => {
    evt.preventDefault();
    dispatch(logoutUser());
  };

  return (
    <ul className="user-block">
      {userAuthStatus === AuthorizationStatus.Auth
        ?
        <Fragment>
          <li className="user-block__item">
            <div className="user-block__avatar">
              <Link to={AppPageRoute.MyList}>
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </Link>
            </div>
          </li>
          <li className="user-block__item">
            <Link className="user-block__link" to="/" onClick={logoutClickHandler}>Sign out</Link>
          </li>
        </Fragment>
        :
        <li className="user-block__item">
          <Link className="user-block__link" to="/login">Sign in</Link>
        </li>}
    </ul>
  );
};

export default UserBlock;
