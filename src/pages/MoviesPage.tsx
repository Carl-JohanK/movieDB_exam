import AddMovie from '../components/AddMovie';
import MoviesList from '../components/MoviesList';
import './style/moviesPage.css'
import addMovieType from '../model/addMovieType';
import { Link, Navigate } from 'react-router-dom';

type props = {
    addNewMovie: (newMovie: addMovieType) => void,
    deliteMovie: (id: string) => void,
    favoriteMovie: (id: string) => void,
    logout: () => void
}

function MoviesPage({ addNewMovie, deliteMovie, favoriteMovie, logout }: props) {

    if(sessionStorage.getItem('user') == null) return <Navigate to={'/login'}/>

    return(
        <section className='background-body'>
            <header className="header-img"></header>
            <Link to={'login'}><button className='logout-btn' onClick={logout}>Logout</button></Link>
            <AddMovie addNewMovie={addNewMovie}/>
            <MoviesList deliteMovie={deliteMovie} favoriteMovie={favoriteMovie} />
        </section>
    )
}

export default MoviesPage;