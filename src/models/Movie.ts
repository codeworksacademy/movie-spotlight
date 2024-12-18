export type MovieData = {
  id: number
  backdrop_path: string
  title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  vote_average: number
  vote_count: number
}

export class Movie {
  id: number
  _backdropPath: string
  title: string
  overview: string
  popularity: number
  _posterPath: string
  releaseDate: Date
  voteAverage: number
  voteCount: number
  constructor(data: MovieData) {
    this.id = data.id
    this._backdropPath = data.backdrop_path
    this.title = data.title
    this.overview = data.overview
    this.popularity = data.popularity
    this._posterPath = data.poster_path
    this.releaseDate = new Date(data.release_date)
    this.voteAverage = data.vote_average
    this.voteCount = data.vote_count
  }

  get backdropImgUrl() {
    return `url(https://image.tmdb.org/t/p/w500/${this._backdropPath})`
  }

  get posterImgUrl() {
    return 'https://image.tmdb.org/t/p/w500/' + this._posterPath
  }
  get posterHDImgUrl() {
    return 'https://image.tmdb.org/t/p/original/' + this._posterPath
  }
}