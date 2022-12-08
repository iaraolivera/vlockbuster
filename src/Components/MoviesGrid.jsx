import { useEffect, useState } from "react"
import movies from "../api/movies.json"
import { Pagination } from "../pages/Pagination";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard"
import styles from "./MovieGrid.module.css"


export function MoviesGrid(){

const [movies,setMovies]=  useState([]);
const totalMovies= movies.length;
const [moviePerPage, setMoviePerPage]=useState(8);
const [currentPage, setCurrentPage]=useState(1);

const lastIndex =currentPage * moviePerPage;
const firstIndex=lastIndex -moviePerPage;


    useEffect(()=>{
        get("/discover/movie").then((data)=>{
            setMovies(data.results);
        })
        
}, [])

   
    return(
        <>
        <ul className={styles.movieGrid}>
           {movies.map((movie) => 
           <MovieCard key={movie.id} movie={movie} />
           ).slice(firstIndex, lastIndex)}
        </ul>
        <Pagination moviePerPage={moviePerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} totalMovies={totalMovies}/>
        </>
    )
}