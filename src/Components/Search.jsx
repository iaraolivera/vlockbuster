import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

export const Search = () => {
  const query = useQuery();
  const search = query.get("search");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className={styles.busquedaContenedor}
      role="search"
      onSubmit={handleSubmit}>
      <div className={styles.CajaBusqueda}>
        <FaSearch size={22} className={`btn m-0 ${styles.botonBusqueda}`} />
        <input
          className={`text-light  ${styles.inputBusqueda}`}
          type="search"
          value={search}
          onChange={(e) => {
            const value = e.target.value;
            navigate("/?search=" + value, { replace: true });
          }}
          placeholder="Buscar"
          aria-label="Search"
        />
      </div>
    </form>
  );
};
