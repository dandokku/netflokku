import React, { useEffect, useState } from 'react';
import axios from "./axios";
import './Row.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        // if condition is met, run once and don't run again
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request
        }
        fetchData();
    }, [fetchURL]);

  console.table(movies)
  
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || "").then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'))
      }).catch((error) => console.log(error));
    }
  }

  return (
      <div className="row">
          
        <h2>{title}</h2>

        <div className="row__posters">
              {/* Several row_posters */}

              {/* Map through the movie and dispay it */}

              {movies.map(movie => (
                <img 
                  onClick={() => handleClick(movie)}
                  key={movie.id}
                  className={`row__poster ${isLargeRow && "row__posterLarge"} `} //This code is bsically saying that if the component with the classname of row poster contains a prop called isLargeRow, add an additional class name to it called row_posterLarge
                  src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                  alt={movie.name} 
                  />
              ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      
          

    </div>
  )
}

export default Row
