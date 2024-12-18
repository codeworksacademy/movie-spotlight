import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { moviesService } from '../services/MoviesService';
import { AppState } from '../AppState';
import '@assets/scss/pages/MoviePage.scss'
import Pop from '../utils/Pop';

function MoviePage() {

  const { movieId } = useParams()
  const navigate = useNavigate()

  async function getMovie() {
    try {
      // setTimeout(async () => {
      await moviesService.getMovie(movieId)
      // }, 3000)
    }
    catch (error) {
      Pop.error("sorry that movie is not real");
      navigate('/')
    }
  }


  // onMounted && a watch
  useEffect(() => {

    console.log('hey neat', movieId)
    getMovie()

  }, [movieId])

  if (!AppState.movie) {
    return <div>loading.... 🍿</div>
  }

  const movie = AppState.movie



  return (

    <div className="MoviePage container">
      <div className="row my-4">
        <div className="col-12 movie-backdrop" style={{ backgroundImage: movie.backdropImgUrl }}>
          <img src={movie.posterImgUrl} alt={movie.title} />
        </div>
        <div className="col-12 movie-details">
          <div className="d-flex justify-content-between align-items-center">
            <h2>{movie.title}</h2>
            <div className='d-flex gap-2'>
              <span className='badge border border-dark bg-dark'>Released: {movie.releaseDate.toDateString()}</span>
              <span className='badge border border-dark bg-dark'>Rating: {movie.voteAverage}</span>
            </div>
          </div>
          <p className='lead'>{movie.overview}</p>
        </div>
      </div>


    </div>
  )

}
export default observer(MoviePage)