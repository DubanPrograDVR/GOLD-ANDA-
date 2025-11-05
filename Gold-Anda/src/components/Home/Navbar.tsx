import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBars } from "@fortawesome/free-solid-svg-icons";
import "./styles/styles.css";
import logo from "../../img/Gold-Anda.png";

const Navbar = () => {
  return (
    <>
      <header className="cabeza">
        <nav className="navbar">
          <img className="imagen-logo" src={logo} alt="" />
          <ul className="nav-links" >
            <li >
              <a href="">
                <FontAwesomeIcon
                  className="icono-home"
                  icon={faHouse}
                  size="2x"
                />
              </a>
            </li>
          </ul>
          <a className="boton-historico" href="">
            <FontAwesomeIcon className="icono-menu" icon={faBars} size="2x" />
            Historico
          </a>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
