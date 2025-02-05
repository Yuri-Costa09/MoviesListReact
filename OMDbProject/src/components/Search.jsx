import { CiSearch } from "react-icons/ci";

function Search({ value, onChange }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="search films..."
        value={value}
        onChange={onChange}
      />
      <button>
        <CiSearch className="search-icon" />
      </button>
    </div>
  );
}

export default Search;
