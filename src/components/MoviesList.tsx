//import './style/addMovie.css'
import useMovieList from '../movies/movie-list'
import MovieItem from './MovieItem';

type props = {
    deliteMovie: (id: string) => void
    favoriteMovie: (id: string) => void
}

function MoviesList({ deliteMovie, favoriteMovie }: props) {
    const { movies } = useMovieList(state => ({
        movies: state.movies
      }));

    return(
        <section className="movies-list">
            {
                movies.map((movie, id) => {
                    return <MovieItem key={id} 
                                      movie={movie} 
                                      deliteMovie={deliteMovie} 
                                      favoriteMovie={favoriteMovie}/>
                })
            }
        </section>
    )
}

export default MoviesList;