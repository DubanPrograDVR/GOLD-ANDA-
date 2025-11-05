import "./styles/Tarjetas.css";

const Tarjetas = () => {
  return (
    <>
      <h1 className="titulo-principal">Panel de Tuneles</h1>

      <div className="parent">
        <div className="container-tunel-1">
          <div className="tarjeta-titulo-1">
            <h3>Tunel 1</h3>
            <span>Vacio</span>
          </div>
          <div className="tarjeta-informacion">
            <div className="informacion-contenedor">
              <ul className="elementos-izquierda">
                <li>Fecha Inicio:</li>
                <li>Hora Inicio:</li>
                <li>Pallets completos:</li>
                <li>Duración:</li>
              </ul>
              <ul className="elementos-derecha">
                <li>Ultimo Muestreo</li>
                <li>Temp.Int:</li>
                <li>Temp.Ext:</li>
              </ul>
              <a className="btn" href="">
                Nuevo Ingreso:
              </a>
            </div>
          </div>
        </div>
        <div className="tarjeta-tunel">
          <div className="container-tunel-1">
            <div className="tarjeta-titulo-1">
              <h3>Tunel 3</h3>
              <span>Terminado</span>
            </div>
            <div className="tarjeta-informacion">
              <div className="informacion-contenedor">
                <ul className="elementos-izquierda">
                  <li>Fecha Inicio:</li>
                  <li>Hora Inicio:</li>
                  <li>Pallets completos:</li>
                  <li>Duración:</li>
                </ul>
                <ul className="elementos-derecha">
                  <li>Ultimo Muestreo</li>
                  <li>Temp.Int:</li>
                  <li>Temp.Ext:</li>
                </ul>
                <a className="btn" href="">
                  Nuevo Ingreso:
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="div6">6</div>
        <div className="div7">7</div>
      </div>
    </>
  );
};

export default Tarjetas;
