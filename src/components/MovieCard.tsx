import { Link } from 'react-router-dom';
import { Movie } from '../models/Movie';

type MovieCardProps = {
  movie: Movie
}

export default function MovieCard({ movie }: MovieCardProps) {

  return (
    <div className="MovieCard">
      <Link to={`/movies/${movie.id}`}>
        {movie.title}
      </Link>

    </div>
  )

}