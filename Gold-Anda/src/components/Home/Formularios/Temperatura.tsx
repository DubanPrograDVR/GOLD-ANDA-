import Navbar from "../Navbar";
import { useParams } from "react-router-dom";
import "./styles/Temperatura.css";

const Temperatura = () => {
    const { folioNumero } = useParams<{ folioNumero: string }>();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí agregarás la lógica para enviar los datos y actualizar la tabla
        console.log("Guardando nueva temperatura para folio:", folioNumero);
    };

    return (
        <>
            <Navbar />
            <div className="temperatura-container">
                <div className="temperatura-header">
                    <h1>Nueva Temperatura</h1>
                    <span className="folio-badge">Folio {folioNumero}</span>
                </div>
                
                <form className="temperatura-form" onSubmit={handleSubmit}>
                    <div className="form-column">
                        <div className="form-group">
                            <label htmlFor="tempExterior1">Temp. exterior</label>
                            <input 
                                type="text" 
                                id="tempExterior1"
                                name="tempExterior1"
                                placeholder="2,1°C"
                                defaultValue="2,1°C"
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="tempExterior2">Temp. exterior</label>
                            <input 
                                type="text" 
                                id="tempExterior2"
                                name="tempExterior2"
                                placeholder="1,1°C"
                                defaultValue="1,1°C"
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="hora">Hora</label>
                            <input 
                                type="time" 
                                id="hora"
                                name="hora"
                                defaultValue="00:00"
                            />
                        </div>

                        <div className="form-group checkbox-group">
                            <label className="checkbox-label">
                                <input 
                                    type="checkbox" 
                                    id="ultimaMedicion"
                                    name="ultimaMedicion"
                                    defaultChecked
                                />
                                <span className="checkmark"></span>
                                Ultima Medición
                            </label>
                        </div>
                    </div>
                    
                    <button type="submit" className="guardar-btn">
                        Guardar
                    </button>
                </form>
            </div>
        </>
    );
};

export default Temperatura;