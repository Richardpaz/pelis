import { HiOutlineSearch } from "react-icons/hi";
import "../styles/Header.css";
export function Header() {
  return (
    <header className="header">
      <h1>InfoPelis</h1>
      <div className="search-bar">
        <input type="text" placeholder="Buscar..." />

        <button className="search-button">
          <HiOutlineSearch />
        </button>
      </div>
    </header>
  );
}
