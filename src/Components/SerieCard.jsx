import styles from "./MovieCard.module.css"
import {Link} from "react-router-dom"

export  function MovieCard({serie}) {
    const imageUrl="https://image.tmdb.org/t/p/w300"+serie.poster_path;
  return (
    <div>
        <li className={styles.MovieCard} key={serie.id}>
            <Link to={"/tv/" + serie.id}>
            <img width={230} height={345} className={styles.movieImage} src={imageUrl} alt={serie.title}/>
            {serie.title}
            </Link>
            </li>
    </div>
  )
}
