import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { moviesService } from '../services/MoviesService';
import { AppState } from '../AppState';

function MoviePage() {

  const { movieId } = useParams()

  async function getMovie() {
    try {
      // setTimeout(async () => {
      await moviesService.getMovie(movieId)
      // }, 3000)
    }
    catch (error) {
      // Pop.error(error);
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



  return (

    <div className="MoviePage">
      this is the movie page!!!!! {movieId}

      {AppState.movie.title}


    </div>
  )

}
export default observer(MoviePage)