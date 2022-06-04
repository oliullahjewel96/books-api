import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Search for books...." />
      <FaSearch className="search-icon" />
    </div>
  );
};

export default Search;
