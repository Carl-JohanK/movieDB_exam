import { Link, Navigate, useParams } from "react-router-dom";
import MovieItem from "../components/MovieItem";
import useMovieList from "../movies/movie-list";
import { useEffect, useState } from "react";
import movieType from "../model/movieType";

type props = {
    favoriteMovie: (id: string) => void
}

function MovieDetails({ favoriteMovie }: props){
    const [movieDetail, setMovieDetail] = useState<movieType | null>(null);
    const { movies } = useMovieList(state => ({
        movies: state.movies
      }));

      const { imdbId } = useParams();

      useEffect(() => {
        if(imdbId !== undefined){
            const foundMovie = movies.find(m => m.imdbid == imdbId)
            if(foundMovie !== undefined) setMovieDetail(foundMovie)
        }
      }, [movies])
      
      if(sessionStorage.getItem('user') == null) return <Navigate to={'/login'}/>
      
      else if(movieDetail == null) return <h1>movie was not found</h1>

    return(
        <section className="background-body">
            <Link to={'/'}><header className="header-img"></header></Link>
            <MovieItem movie={movieDetail} favoriteMovie={favoriteMovie}/>
        </section>
    )
}
export default MovieDetails;