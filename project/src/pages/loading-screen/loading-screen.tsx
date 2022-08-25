import Logo from '../../components/logo/logo';
import './loading-screen.css';

const LoadingScreen = (): JSX.Element => (
  <div className="user-page">
    <header className="page-header user-page__head">
      <Logo isLightLogo={false} />

    </header>

    <div className="user-page__content">
      <div className="loading-process">
        <p className='loading-text'>Loading...</p>
      </div>
    </div>

    <footer className="page-footer">
      <Logo isLightLogo />

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  </div>
);

export default LoadingScreen;
