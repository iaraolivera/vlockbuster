import { useEffect, useState } from "react";
import { Pagination } from "../pages/Pagination";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import styles from "./MovieGrid.module.css";
import Loading from "../Components/Loading";
import { useQuery } from "../hooks/useQuery";
import NoResults from "./NoResults";

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const query = useQuery();
  const search = query.get("search");

  const totalMovies = movies.length;
  const [moviePerPage, setMoviePerPage] = useState(8);

  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * moviePerPage;
  const firstIndex = lastIndex - moviePerPage;

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/discover/movie";
    get(searchUrl).then((data) => {
      setMovies(data.results);
      setIsLoading(false);
    });
  }, [search]);

  if (isLoading) {
    return <Loading />;
  }

  if (movies.length === 0) {
    return <NoResults />;
  }
  return (
    <>
      <ul className={styles.movieGrid}>
        {movies
          .map((movie) => <MovieCard key={movie.id} movie={movie} />)
          .slice(firstIndex, lastIndex)}
      </ul>

      <Pagination
        moviePerPage={moviePerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalMovies={totalMovies}
      />
    </>
  );
}
