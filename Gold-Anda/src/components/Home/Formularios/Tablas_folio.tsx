import Navbar from "../Navbar";
import { useParams } from "react-router-dom";
import "./styles/TablasFolio.css";

const TablasFolio = () => {
    const { tunelNumero } = useParams<{ tunelNumero: string }>();

    // Datos de ejemplo para la tabla
    const folios = [
        {
            id: "0000000012",
            exportadora: "Maquelhua",
            embalaje: "EMB25A",
            variedad: "Santina",
            tempInicial: "0.2°C",
            tempExterna: "0.3°C",
            tempInterna: "0.1°C"
        }
    ];

    return (
        <>
            <Navbar />
            <div className="folios-container">
                <div className="folios-header">
                    <h1>Folios</h1>
                    <span className="tunel-badge">Túnel: {tunelNumero}</span>
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
                                <th></th>
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
                                    <td>
                                        <button className="edit-btn">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                                            </svg>
                                        </button>
                                    </td>
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

export default TablasFolio;