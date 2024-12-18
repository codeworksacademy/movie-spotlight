import { logger } from "../utils/Logger.js"
import { movieApi } from "./AxiosService.js"
import { Movie, MovieData } from "../models/Movie"
import { AppState } from "../AppState.js"

type MoviesResponse = {
  page: number
  results: MovieData[]
  total_pages: number
  total_results: number
}

class MoviesService {

  async discoverMovies() {
    const response = await movieApi.get('discover/movie')
    logger.log('DISCOVERED MOVIES 🎥', response.data)
    this.handleResponseData(response.data)
  }
  async changeDiscoverPage(pageNumber: number) {
    const response = await movieApi.get(`discover/movie?page=${pageNumber}`)
    logger.log('CHANGED DISCOVER PAGE', response.data)
    this.handleResponseData(response.data)
  }

  async searchMovies(searchQuery: string) {
    const response = await movieApi.get(`search/movie?query=${searchQuery}`)
    logger.log('SEARCHED MOVIES 🔍', response.data)
    this.handleResponseData(response.data)
  }

  async changeSearchPage(pageNumber: number, searchQuery: string) {
    const response = await movieApi.get(`search/movie?query=${searchQuery}&page=${pageNumber}`)
    logger.log('CHANGED SEARCH PAGE 🔍', response.data)
    this.handleResponseData(response.data)
  }

  handleResponseData(responseData: MoviesResponse) {
    const movies = responseData.results.map((movieData: MovieData) => new Movie(movieData))
    console.log(movies)
    AppState.movies = movies
    // AppState.currentPage = responseData.page
    // AppState.totalPages = responseData.total_pages
    // AppState.totalResults = responseData.total_results
  }

  clearMovies() {
    // AppState.movies = []
    // AppState.currentPage = 0
    // AppState.totalPages = 0
  }
}

export const moviesService = new MoviesService()