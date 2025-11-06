import Navbar from "../Navbar";
import { useParams } from "react-router-dom";

const Ingreso = () => {
    const { tunelNumero } = useParams<{ tunelNumero: string }>();
    
    return (
        <>
        <Navbar />
        <div>
            <h1>Nuevo Ingreso</h1>
            <span>Túnel {tunelNumero}</span>
        </div>
        <div>
            <form action="">
                <div>
                    <label htmlFor="">Nombre Responsable:</label>
                </div>
                <div>
                    <input type="text" />
                </div>

                <div>
                    <label htmlFor="">Hora Inicio</label>
                </div>
            </form>
        </div>
        </>
    )
}

export default Ingreso;