import './style/addMovie.css'
import addMovieType from '../model/addMovieType';

type props = {
    addNewMovie: (addMovie: addMovieType) => void
}

function AddMovie({ addNewMovie }: props) {

    function add(){
        const title = document.querySelector('#title') as HTMLInputElement;
        const poster = document.querySelector('#poster') as HTMLInputElement;
        const trailer = document.querySelector('#trailer') as HTMLInputElement;
    
        const newMovie: addMovieType = {
            "title": title.value,
            "poster": poster.value,
            "trailer_link": trailer.value
        }
        addNewMovie(newMovie)
    }

    return(
        <form action="add-movie" className='add-form'>
            <h1>Movie list</h1>
            <input type="text" className='text-input' id='title' placeholder='enter title...'/>
            <input type="text" className='text-input' id='poster' placeholder='enter poster-link...'/>
            <input type="text" className='text-input' id='trailer' placeholder='enter trailer-link...'/>
            <input type="button" className='submit-btn' value="Add Movie" onClick={add}/>
        </form>
    )
}

export default AddMovie;