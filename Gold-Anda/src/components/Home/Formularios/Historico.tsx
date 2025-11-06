import Navbar from "../Navbar";
import "./styles/Historico.css";

const Historico = () => {
    // Datos estáticos para el histórico
    const folios = [
        {
            id: "0000000001",
            exportadora: "AquaChile S.A.",
            embalaje: "Caja 10kg",
            variedad: "Premium",
            tempInicial: "4,2°C",
            tempExterna: "2,1°C",
            tempInterna: "1,8°C"
        },
        {
            id: "0000000002",
            exportadora: "Marine Harvest Chile",
            embalaje: "Caja 15kg",
            variedad: "Superior",
            tempInicial: "3,8°C",
            tempExterna: "1,9°C",
            tempInterna: "1,5°C"
        },
        {
            id: "0000000003",
            exportadora: "Salmones Camanchaca",
            embalaje: "Caja 12kg",
            variedad: "Estándar",
            tempInicial: "4,5°C",
            tempExterna: "2,3°C",
            tempInterna: "2,0°C"
        },
        {
            id: "0000000004",
            exportadora: "Multiexport Foods",
            embalaje: "Caja 8kg",
            variedad: "Premium Plus",
            tempInicial: "3,9°C",
            tempExterna: "2,0°C",
            tempInterna: "1,7°C"
        },
        {
            id: "0000000005",
            exportadora: "Blumar Seafoods",
            embalaje: "Caja 20kg",
            variedad: "Export",
            tempInicial: "4,1°C",
            tempExterna: "2,2°C",
            tempInterna: "1,9°C"
        }
    ];
    return (
        <>
        <Navbar />
        <div className="folios-container">
                <div className="folios-header">
                    <h1>Historico</h1>
                </div>

                <div className="tabla-container">
                    <table className="folios-table">
                        <thead>
                            <tr>
                                <th>N° de Folio</th>
                                <th>Exportadora</th>
                                <th>Embalaje</th>
                                <th>Variedad</th>
                                <th>T° Inicial</th>
                                <th>T° Externa</th>
                                <th>T° Interna</th>
                            </tr>
                        </thead>
                        <tbody>
                            {folios.map((folio, index) => (
                                <tr key={folio.id} className={index % 2 === 0 ? "row-light" : "row-dark"}>
                                    <td>{folio.id}</td>
                                    <td>{folio.exportadora}</td>
                                    <td>{folio.embalaje}</td>
                                    <td>{folio.variedad}</td>
                                    <td>{folio.tempInicial}</td>
                                    <td>{folio.tempExterna}</td>
                                    <td>{folio.tempInterna}</td>
                                </tr>
                            ))}
                            {/* Filas vacías para completar la tabla */}
                            {[...Array(4)].map((_, index) => (
                                <tr key={`empty-${index}`} className={(index + 1) % 2 === 0 ? "row-light" : "row-dark"}>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="pagination">
                    <button className="pagination-btn prev">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                        </svg>
                    </button>
                    <span className="page-numbers">
                        <button className="page-btn active">1</button>
                        <button className="page-btn">2</button>
                        <button className="page-btn">3</button>
                    </span>
                    <button className="pagination-btn next">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}


export default Historico;