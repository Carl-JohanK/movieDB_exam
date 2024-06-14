import { create } from "zustand";
import movieType from "../model/movieType";

type movieList = {
    movies: movieType[],
    setMovies: (setMovies : movieType[]) => void,
}

const useMovieList = create<movieList>((set) => ({
    movies: [],
    setMovies: (setMovies) => {
        set({movies: setMovies})
    },
}))

export default useMovieList;