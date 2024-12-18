import { Link } from 'react-router-dom';
import { Movie } from '../models/Movie';

type MovieCardProps = {
  movie: Movie
}

export default function MovieCard({ movie }: MovieCardProps) {

  return (
    <div className="MovieCard">
      <div>
        <Link to={"movies/" + movie.id}>
          <img className='img-fluid rounded shadow' src={movie.posterImgUrl} alt={movie.title} title={movie.title} />
        </Link>
      </div>
    </div>
  )

}