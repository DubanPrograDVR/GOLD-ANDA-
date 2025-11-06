import Navbar from "../Navbar";
import { useParams } from "react-router-dom";
import "./styles/Folio.css";

const Folio = () => {
    const { tunelNumero } = useParams<{ tunelNumero: string }>();

    return (
        <>
            <Navbar />
             <div className="ingreso-container">
            <div className="ingreso-header">
                <h1>Nuevo Folio</h1>
                <span className="tunel-badge">Túnel: {tunelNumero}</span>
            </div>
            
            <form className="ingreso-form">
                <div className="form-row-folio">
                    <div className="form-column-left">
                        <div className="form-group">
                            <label htmlFor="numeroFolio">N° de folio</label>
                            <input 
                                type="text" 
                                id="numeroFolio"
                                name="numeroFolio"
                                placeholder="2,1°C"
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="exportadora">Exportadora</label>
                            <input 
                                type="text" 
                                id="exportadora"
                                name="exportadora"
                                placeholder="1,1°C"
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="embalaje">Embalaje</label>
                            <input 
                                type="text" 
                                id="embalaje"
                                name="embalaje"
                                placeholder="00:00"
                            />
                        </div>
                    </div>
                    
                    <div className="form-column-right">
                        <div className="form-group">
                            <label htmlFor="variedad">Variedad</label>
                            <select id="variedad" name="variedad">
                                <option value=""></option>
                                <option value="variedad1">Variedad 1</option>
                                <option value="variedad2">Variedad 2</option>
                            </select>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="temperaturaInicial">T° Inicial</label>
                            <input 
                                type="number" 
                                id="temperaturaInicial"
                                name="temperaturaInicial"
                            />
                        </div>
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


export default Folio;