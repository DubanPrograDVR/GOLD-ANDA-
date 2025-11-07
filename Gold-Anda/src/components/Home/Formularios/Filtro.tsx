import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import "./styles/Filtro.css";

const Filtro = () => {
   const Desplegar_Filtro = () => {}


  return (
    <>
      <div className="Filtro">
        <FontAwesomeIcon className="icono-filtro" icon={faFilter} />
        <button className="boton-filtro">Filtrar por:</button>
      </div>
    </>
  );
};

export default Filtro;
