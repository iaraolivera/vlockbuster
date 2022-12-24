import styles from "./MovieCard.module.css"
import {Link} from "react-router-dom"
import { getMovieImg } from "../utils/getMovieImg"


export  function MovieCard({movie}) {
  const imageUrl = getMovieImg(movie.poster_path, 300);
    
  return (
    <div>
        <li className={styles.MovieCard} key={movie.id}>
            <Link to={"/movies/" + movie.id}>
            <img width={230} height={345} className={styles.movieImage} src={imageUrl} alt={movie.title}/>
            {movie.title}
            </Link>
            </li>
    </div>
  )
}
