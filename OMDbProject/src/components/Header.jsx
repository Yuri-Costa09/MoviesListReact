import Search from "./Search.jsx";

function Header({ valueSearch, onSearchTermChange }) {
  return (
    <div className="header">
      <Search value={valueSearch} onChange={onSearchTermChange} />
    </div>
  );
}

export default Header;
