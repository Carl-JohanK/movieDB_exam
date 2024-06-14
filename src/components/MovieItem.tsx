import './style/movieItem.css'
import movieType from "../model/movieType";
import { Link } from 'react-router-dom';

type Props = {
    movie: movieType,
    deliteMovie?: (id: string) => void,
    favoriteMovie: (id: string) => void
}

function MovieItem({ movie, deliteMovie, favoriteMovie }: Props) {

    if(deliteMovie !== undefined) return(
        <article className='movie-item'>
            <Link to={`/movie/${movie.imdbid}`} className='link-img'>
                <img src={movie.poster} alt={'poster for' + movie.title} className='poter'/>
            </Link>

            <h5 className='title'>
                <Link to={`/movie/${movie.imdbid}`} className='link-title'>{movie.title}</Link>
            </h5>

            <div className="item-grupping">
                <h6 onClick={() => favoriteMovie(movie.imdbid)} 
                    className={`${movie.is_favorite ? 'un-favorite' : 'favorite'}`}>
                    {movie.is_favorite? '⨉' : '⭐'}</h6>

                <h6 onClick={() => deliteMovie(movie.imdbid)} className='remove'>🚮</h6>
            </div>
        </article>
    )
    else return (
        <article className='movie-detail'>
            <h5 className='title-detail'>{movie.title}</h5>
            <h6 onClick={() => favoriteMovie(movie.imdbid)}
                    className={`${movie.is_favorite ? 'un-favorite' : 'favorite'} favorite-detail`}>
                    {movie.is_favorite? '⨉' : '⭐'}</h6>
            
            <img src={movie.poster} alt={'poster for' + movie.title} className='poter'/>
            <iframe src={movie.trailer_link} className='trailer-link'></iframe>

        </article>
    )
}

export default MovieItem;