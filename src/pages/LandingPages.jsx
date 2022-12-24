import { MoviesGrid } from "../Components/MoviesGrid";
import { Search } from "../Components/Search";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";

export function LandingPage() {
  const query = useQuery();
  const search = query.get("search");
  const debounceSearch = useDebounce(search, 300);
  return (
    <>
      <Search />
      <MoviesGrid key={debounceSearch} search={debounceSearch} />
    </>
  );
}
