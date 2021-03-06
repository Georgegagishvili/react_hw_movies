import { useEffect, useState } from 'react';
import MovieCard from '../../movie/movie-card/MovieCard';
function SimilarMovies({ id, movie }) {
  const [movies, setMovies] = useState(null);

  const fetchData = () => {
    fetch('https://yts.mx/api/v2/movie_suggestions.json?movie_id=' + id, {
      method: 'GET',
    })
      .then(function (response) {
        if (response.status !== 200) {
          throw response.status;
        }
        return response.json();
      })
      .then(function (responseData) {
        setMovies(responseData.data.movies);
      })
      .catch(function (error) {
        if (error === 404) {
          console.log('Page Not found', error);
        } else {
          console.log('Server Error');
        }
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div class="movie-wrapper">
      <span>მსგავსი ფილმები:</span>
      {/* <!-- SINGLE MOVIE WRAPPER --> */}
      <div id="suggestions" class="movie-single-wrapper">
        {movies && movies.map((movie) => <MovieCard movie={movie} />)}
      </div>
      {/* <!-- SINGLE MOVIE WRAPPER --> */}
    </div>
  );
}

export default SimilarMovies;
