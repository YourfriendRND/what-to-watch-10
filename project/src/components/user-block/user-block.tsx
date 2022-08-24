import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../contants';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const UserBlock = (): JSX.Element => {
  const userAuthStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    <ul className="user-block">
      {userAuthStatus === AuthorizationStatus.Auth
        ?
        <Fragment>
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <Link className="user-block__link" to="/">Sign out</Link>
          </li>
        </Fragment>
        :
        <li className="user-block__item">
          <a className="user-block__link" href="/login">Sign in</a>
        </li>}
    </ul>
  );
};

export default UserBlock;
