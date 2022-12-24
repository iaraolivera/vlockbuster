import styles from "./MovieDetails.module.css"
import {useParams} from "react-router-dom"
import { useEffect, useState } from "react"
import { get } from "../utils/httpClient"
import Loading from "../Components/Loading";

import { getMovieImg } from "../utils/getMovieImg";

export function MovieDetails(){
    const{movieId}=useParams();
    const [isLoading, setIsLoading]=useState(true);
    const[movie, setMovie]=useState(null)
   

    useEffect(()=>{
        setIsLoading(true);
        get("/movie/" + movieId).then(data=>{
            setMovie(data) 
            setIsLoading(false);
        })
    },[movieId]);
    if(isLoading){
        return <Loading/>
    }

    const imageUrl = getMovieImg(movie.poster_path, 500);


    return(
        <div className={styles.detailsContainer}>
            <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title}/>
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p className={styles.firstItem}><strong>{movie.title}</strong></p>
                <p><strong>{movie.genres.map(genre => genre.name).join(", ")}</strong></p>
                <p><strong>Description: </strong>{movie.overview}</p>
                
            </div>
            
        </div>
    )

}