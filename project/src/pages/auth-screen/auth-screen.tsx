import Logo from '../../components/logo/logo';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginUser } from '../../store/api-actions';
import { useRef, FormEvent, useEffect } from 'react';
import { AuthorizationStatus, AppPageRoute } from '../../contants';
import { useNavigate } from 'react-router-dom';

const AuthScreen = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const authStatus = useAppSelector((store) => store.authorizationStatus);

  const getAuthData = () => {
    if (loginRef.current !== null && passRef.current !== null) {
      return {
        email: loginRef.current.value,
        password: passRef.current.value
      };
    }
  };

  const submitAuthHandler = (evt:FormEvent) => {
    evt.preventDefault();
    const userData = getAuthData();
    if (userData) {
      dispatch(loginUser(userData));
    }
  };

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      navigate(AppPageRoute.Main);
    }
  });

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo isLightLogo={false} />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="" className="sign-in__form" onSubmit={submitAuthHandler}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" ref={loginRef}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" ref={passRef}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <Logo isLightLogo />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

export default AuthScreen;
