import { useEffect, useState } from "react";
import { moviesService } from '../services/MoviesService';
import Pop from '../utils/Pop';
import { AppState } from '../AppState';
import { observer } from 'mobx-react';
import MovieCard from '../components/MovieCard';
function HomePage() {

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


  return (
    <div className="home-page">

      {AppState.movies.map(m => <MovieCard movie={m} key={m.id} />)}


    </div>
  )
}

export default observer(HomePage)

