import "./styles/Tarjetas.css";
import { useNavigate } from "react-router-dom";

const Tarjetas = () => {
  const navigate = useNavigate();

  const handleNuevoIngreso = (tunelNumero: number) => {
    navigate(`/ingreso/${tunelNumero}`);
  };

  const handleVerFolios = (tunelNumero: number) => {
    navigate(`/folios/${tunelNumero}`);
  };

  const handleAgregarFolio = (tunelNumero: number) => {
    navigate(`/agregar-folio/${tunelNumero}`);
  }

  return (
    <>
      <h1 className="titulo-principal" style={{paddingTop: "20px",textDecoration:"underline"}}>Panel de Tuneles</h1>

      <div className="parent">
        <div className="container-tunel-1">
          <div className="tarjeta-titulo-1">
            <h3>Tunel 1</h3>
            <span>Vacio</span>
          </div>
          <div className="tarjeta-informacion-1">
            <div className="informacion-contenedor-1">
              <ul className="elementos-izquierda-1">
                <li>Fecha Inicio:</li>
                <li>Hora Inicio:</li>
                <li>Pallets completos:</li>
                <li>Duración: 01:10</li>
              </ul>
              <ul className="elementos-derecha-1">
                <li>Ultimo muestreo:</li>
                <li>00:00</li>
                <li>Temp. Int: 0.2°C</li>
                <li>Temp. Ext: 0.1°C</li>
              </ul>
            </div>
            <div className="botones-contenedor">
              <button className="btn-gris" onClick={() => handleNuevoIngreso(1)}>Nuevo Ingreso</button>
            </div>
          </div>
        </div>
        <div className="tarjeta-tunel">
          <div className="container-tunel-2">
            <div className="tarjeta-titulo-2">
              <h3>Tunel 2</h3>
              <span>Terminado</span>
            </div>
            <div className="tarjeta-informacion-2">
              <div className="informacion-contenedor-2">
                <ul className="elementos-izquierda-2">
                  <li>Fecha Inicio:</li>
                  <li>Hora Inicio:</li>
                  <li>Pallets completos:</li>
                  <li>Duración: 01:10</li>
                </ul>
                <ul className="elementos-derecha-2">
                  <li>Ultimo muestreo:</li>
                  <li>00:00</li>
                  <li>Temp. Int: 0.2°C</li>
                  <li>Temp. Ext: 0.1°C</li>
                </ul>
              </div>
              <div className="botones-contenedor">
                <button className="btn-verde" onClick={() => handleVerFolios(2)}>Ver folios</button>
                <button className="btn-verde" onClick={() => handleNuevoIngreso(2)}>Nuevo Ingreso</button>
              </div>
            </div>
          </div>
        </div>
        <div className="div6">
          <div className="container-tunel-3">
            <div className="tarjeta-titulo-3">
              <h3>Tunel 3</h3>
              <span>En Proceso</span>
            </div>
            <div className="tarjeta-informacion-3">
              <div className="informacion-contenedor-3">
                <ul className="elementos-izquierda-3">
                  <li>Fecha Inicio:</li>
                  <li>Hora Inicio:</li>
                  <li>Pallets completos:</li>
                  <li>Duración: 02:30</li>
                </ul>
                <ul className="elementos-derecha-3">
                  <li>Ultimo muestreo:</li>
                  <li>00:15</li>
                  <li>Temp. Int: 1.5°C</li>
                  <li>Temp. Ext: 0.8°C</li>
                </ul>
              </div>
              <div className="botones-contenedor">
                <button className="btn-verde" onClick={() => handleVerFolios(3)}>Ver folios</button>
                <button className="btn-verde" onClick={() => handleNuevoIngreso(3)}>Nuevo Ingreso</button>
              </div>
            </div>
          </div>
        </div>
        <div className="div7">
          <div className="container-tunel-4">
            <div className="tarjeta-titulo-4">
              <h3>Tunel 4</h3>
              <span>En Uso</span>
            </div>
            <div className="tarjeta-informacion-4">
              <div className="informacion-contenedor-4">
                <ul className="elementos-izquierda-4">
                  <li>Fecha Inicio:</li>
                  <li>Hora Inicio:</li>
                  <li>Pallets completos:</li>
                  <li>Duración: 01:10</li>
                </ul>
                <ul className="elementos-derecha-4">
                  <li>Ultimo muestreo:</li>
                  <li>00:00</li>
                  <li>Temp. Int: 0.2°C</li>
                  <li>Temp. Ext: 0.1°C</li>
                </ul>
              </div>
              <div className="botones-contenedor">
                <button className="btn-naranja" onClick={() => handleVerFolios(4)}>Ver folios</button>
                <button className="btn-naranja" onClick={() => handleAgregarFolio(4)}>+ Folio</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tarjetas;
