import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/styles.css";
import logo from "../../img/Gold-Anda.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleHomeClick = () => {
    navigate("/");
    setIsMenuOpen(false);
  };

  const handleHistoricoClick = () => {
    
    setIsMenuOpen(false);
  };

  return (
    <header className="cabeza">
      <nav className="navbar">
        <div className="navbar-brand">
          <img className="imagen-logo" src={logo} alt="Gold Anda Logo" />
          <h1 className="titulo">Gold Anda</h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-links desktop-nav">
          <li>
            <button className="nav-button home-button" onClick={handleHomeClick}>
              <FontAwesomeIcon className="icono-home" icon={faHouse} />
              <span className="button-text">Inicio</span>
            </button>
          </li>
        </ul>

        <div className="navbar-actions">
          <button className="boton-historico desktop-historico" onClick={handleHistoricoClick}>
            <FontAwesomeIcon className="icono-menu" icon={faBars} />
            <span>Histórico</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button className="mobile-menu-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon 
              icon={isMenuOpen ? faTimes : faBars} 
              className="mobile-toggle-icon"
            />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav ${isMenuOpen ? 'mobile-nav-open' : ''}`}>
          <ul className="mobile-nav-links">
            <li>
              <button className="mobile-nav-button" onClick={handleHomeClick}>
                <FontAwesomeIcon className="mobile-nav-icon" icon={faHouse} />
                <span>Inicio</span>
              </button>
            </li>
            <li>
              <button className="mobile-nav-button" onClick={handleHistoricoClick}>
                <FontAwesomeIcon className="mobile-nav-icon" icon={faBars} />
                <span>Histórico</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Overlay */}
        {isMenuOpen && <div className="mobile-overlay" onClick={toggleMenu}></div>}
      </nav>
    </header>
  );
};

export default Navbar;
