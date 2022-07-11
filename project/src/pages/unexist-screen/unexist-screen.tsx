const UnexistScreen = (): JSX.Element => (
  <div className="user-page">
    <header className="page-header user-page__head">
      <div className="logo">
        <a href="main.html" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <h1 className="page-title user-page__title">404 Not Found</h1>
    </header>

    <div className="user-page__content">
      <div className="unexist-screen-message-wrapper">
        <p className="unexist-screen-message">
          Sorry, we couldn&apos;t find this page {':('}
        </p>
        <a href="main.html" className="back-to-main__link"> Back to main</a>
      </div>
    </div>

    <footer className="page-footer">
      <div className="logo">
        <a href="main.html" className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  </div>
);

export default UnexistScreen;
