import Navbar from "../Navbar";
import { useParams } from "react-router-dom";
import "./styles/Ingreso.css";

const Ingreso = () => {
    const { tunelNumero } = useParams<{ tunelNumero: string }>();
    
    return (
        <>
        <Navbar />
        <div className="ingreso-container">
            <div className="ingreso-header">
                <h1 style={{textDecoration:"underline 3px #ef9d40 ", fontWeight:400}}>Nuevo Ingreso</h1>
                <span className="tunel-badge">Túnel: {tunelNumero}</span>
            </div>
            
            <form className="ingreso-form">
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="nombreResponsable">Nombre responsable</label>
                        <input 
                            type="text" 
                            id="nombreResponsable"
                            name="nombreResponsable"
                            placeholder="00:00"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="horaInicio">Hora Inicio</label>
                        <input 
                            type="time" 
                            id="horaInicio"
                            name="horaInicio"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="temperaturaSeteo">T° Seteo</label>
                        <input 
                            type="number" 
                            id="temperaturaSeteo"
                            name="temperaturaSeteo"
                        />
                    </div>
                </div>
                
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="planta">Planta</label>
                        <select id="planta" name="planta">
                            <option value="maquelhua-rosario">Maquelhua/Rosario</option>
                            <option value="otra-planta">Otra Planta</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="fechaInicio">Fecha inicio</label>
                        <input 
                            type="date" 
                            id="fechaInicio"
                            name="fechaInicio"
                            defaultValue="2025-11-01"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="especie">Especie</label>
                        <input 
                            type="text" 
                            id="especie"
                            name="especie"
                        />
                    </div>
                </div>
                
                <div className="form-row">
                    <div className="form-group full-width">
                        <label htmlFor="palletsCompletos">Pallets Completos</label>
                        <input 
                            type="number" 
                            id="palletsCompletos"
                            name="palletsCompletos"
                        />
                    </div>
                </div>
                
                <button type="submit" className="guardar-btn">
                    Guardar
                </button>
            </form>
        </div>
        </>
    )
}

export default Ingreso;