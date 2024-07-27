import { useState } from "react";
import s from "../SearchBar/SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
    setQuery("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={s.searchForm}>
        <input
          type="search"
          value={query}
          onChange={handleChange}
          placeholder="Search movies..."
          className={s.input}
        />
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
