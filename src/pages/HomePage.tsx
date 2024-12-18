import { useEffect } from "react";
import { moviesService } from '../services/MoviesService';
import Pop from '../utils/Pop';
import { AppState } from '../AppState';
import { observer } from 'mobx-react';
import MovieCard from '../components/MovieCard';
import MovieSearch from '../components/MovieSearch';


export default function HomePage() {

  async function getMovies() {
    try {
      await moviesService.discoverMovies()
    }
    catch (error) {
      Pop.error(error as Error);
    }
  }

  function onMounted() {
    getMovies()
  }

  // this is an onmounted
  useEffect(onMounted, [])

  const MovieList = observer(() => AppState.movies.map(m =>
    <div className='col-md-4 my-3' key={m.id}>

      <MovieCard movie={m} />
    </div>
  )
  )


  return (
    <div className="home-page container">

      <div className="row">
        <div className="col-8 m-auto">
          <MovieSearch />
        </div>
      </div>

      <div className="row">
        <MovieList />
      </div>




    </div>
  )
}

