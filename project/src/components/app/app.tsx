import MainScreen from '../../pages/main-screen/main-screen';

type MainPromoFilm = {
  title: string,
  genre: string,
  year: number
}

function App({title, genre, year}: MainPromoFilm): JSX.Element {
  return (
    <div>
      <MainScreen title={title} genre={genre} year={year}/>
    </div>
  );
}

export default App;
