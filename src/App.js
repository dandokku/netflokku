import './App.css';
import Row from './Row'
import NavBar from './NavBar';
import Banner from './Banner'
import requests from './requests'

function App() {
  return (
    <div className="app">

      <NavBar />
      <Banner />
      
      <Row
        isLargeRow
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
