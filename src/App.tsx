import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import useMovieList from './movies/movie-list'
import MoviesPage from './pages/MoviesPage'
import addMovieType from './model/addMovieType'
import MovieDetails from './pages/MovieDetails'
import LoginPage from './pages/LoginPage'
import userModel from './model/userModel'

function App() {
  const [key, setKey] = useState<string>('')
  const { movies, setMovies } = useMovieList(state => ({
    movies: state.movies,
    setMovies: state.setMovies
  }));

  function addNewMovie(newMovie: addMovieType){
    axios.post(`http://localhost:8080/api/movies?key=${key}`, newMovie)
    .then(resp => {
        console.log(resp.data)
    }).catch(e => console.log('error:' + e))
   }

   function deliteMovie(id: string){
    axios.delete(`http://localhost:8080/api/movies/${id}?key=${key}`)
    .then(resp => {
        console.log(resp.data)
    }).catch(e => console.log('error:' + e))
   }

   function favoriteMovie(id: string){
    axios.put(`http://localhost:8080/api/movies/${id}?key=${key}`)
    .then(resp => {
        console.log(resp.data)
    }).catch(e => console.log('error:' + e))
   }

   function registerUser(newUser: userModel){
    axios.post('http://localhost:8080/api/auth/register', newUser)
    .then(() => {
      alert('your acount is added')
    }).catch(res => alert(res.response.data.message))
   }

   function login(user: userModel){
    axios.post('http://localhost:8080/api/auth/login', user)
    .then(resp => {
      sessionStorage.setItem('user', resp.data.user.username)
      
    }).catch(res => alert(res.response.data.message))
   }

   function logout(){
    axios.post('http://localhost:8080/api/auth/logout')
    .then(resp => {
      if(resp.data.success) sessionStorage.clear()
    }).catch(e => console.log('error:' + e))
   }

  useEffect(() => {
    axios.get('http://localhost:8080/api/keys')
    .then(resp => {
        setKey(resp.data.data)
    }).catch(e => console.log('error:' + e))
  }, [])

  function uppdateMovieList(){
    axios.get(`http://localhost:8080/api/movies?key=${key}`)
    .then(resp => {
        setMovies(resp.data.data)
    }).catch(e => console.log('error:' + e))
  }

  useEffect(() => {
    uppdateMovieList()
  }, [key])

  useEffect(() => {
    uppdateMovieList()
  }, [movies])

  return (
    <div className="app">
        <Routes>
            <Route path='/login' element={<LoginPage registerUser={registerUser} login={login} />}/>
            <Route path='/' element={<MoviesPage addNewMovie={addNewMovie}
                                                 deliteMovie={deliteMovie} 
                                                 favoriteMovie={favoriteMovie}
                                                 logout={logout}/>}/>
            <Route path='/movie/:imdbId' element={<MovieDetails favoriteMovie={favoriteMovie}/>}/>
        </Routes>
    </div>
  )
}

export default App
