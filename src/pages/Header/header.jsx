import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div className="container_manager_header">
      <header>
        <Link className="link_header" to="/update">Atualização</Link>
      </header>
    </div>
  );
}
export default Header;
