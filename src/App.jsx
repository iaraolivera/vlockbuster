import { MoviesGrid } from "./Components/MoviesGrid";
import styles from "./App.module.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  
} from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPages";


export function App() {
  return (
    <Router>
        <header>
          <Link to="/">
            <h1 className={styles.title}>Vlockbuster</h1>
            </Link>
        </header>
        <main>
        <Routes>
          <Route exact path="/movies/:movieId" element={<MovieDetails/>}>
          </Route>
          <Route path="/" element={<LandingPage/>}>
            
          </Route>
        </Routes>
        </main>
    </Router>
  )
}

