import Navbar from "../Navbar";
import Filtro from "./Filtro";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import "./styles/TablasFolio.css";

const TablasFolio = () => {
    const { tunelNumero } = useParams<{ tunelNumero: string }>();
    const navigate = useNavigate();
    const [filtrosSeleccionados, setFiltrosSeleccionados] = useState<string[]>([]);

    const handleEditTemperatura = (folioNumero: string) => {
        navigate(`/temperatura/${folioNumero}`);
    };

    // Filtros específicos para folios
    const filtrosFolios = [
        "N° de Folio",
        "Exportadora",
        "Embalaje",
        "Variedad",
        "T° Inicial",
        "T° Externa",
        "T° Interna"
    ];

    // Mapeo de nombres de filtros a propiedades del objeto
    const filtroMapping: Record<string, keyof typeof folios[0]> = {
        "N° de Folio": "id",
        "Exportadora": "exportadora",
        "Embalaje": "embalaje",
        "Variedad": "variedad",
        "T° Inicial": "tempInicial",
        "T° Externa": "tempExterna",
        "T° Interna": "tempInterna"
    };

    // Datos de ejemplo para la tabla
    const folios = [
        {
            id: "0000000012",
            exportadora: "Maquehua",
            embalaje: "EMB25A",
            variedad: "Santina",
            tempInicial: "0.2°C",
            tempExterna: "0.3°C",
            tempInterna: "0.1°C"
        },
        {
            id: "0000000013",
            exportadora: "AquaChile S.A.",
            embalaje: "EMB30B",
            variedad: "Premium",
            tempInicial: "0.5°C",
            tempExterna: "0.4°C",
            tempInterna: "0.2°C"
        },
        {
            id: "0000000014",
            exportadora: "Marine Harvest Chile",
            embalaje: "EMB20C",
            variedad: "Superior",
            tempInicial: "0.3°C",
            tempExterna: "0.2°C",
            tempInterna: "0.1°C"
        },
        {
            id: "0000000015",
            exportadora: "Salmones Camanchaca",
            embalaje: "EMB35A",
            variedad: "Estándar",
            tempInicial: "0.4°C",
            tempExterna: "0.5°C",
            tempInterna: "0.3°C"
        },
        {
            id: "0000000016",
            exportadora: "Blumar Seafoods",
            embalaje: "EMB28D",
            variedad: "Export",
            tempInicial: "0.6°C",
            tempExterna: "0.3°C",
            tempInterna: "0.2°C"
        }
    ];

    // Función para manejar cambios en los filtros
    const handleFilterChange = (nuevosFiltros: string[]) => {
        setFiltrosSeleccionados(nuevosFiltros);
    };

    // Datos filtrados basados en las columnas seleccionadas
    const foliosFiltrados = useMemo(() => {
        if (filtrosSeleccionados.length === 0) {
            return folios; // Si no hay filtros seleccionados, mostrar todos los datos
        }

        // Crear un objeto con solo las propiedades seleccionadas
        return folios.map(folio => {
            const folioFiltrado: any = {};
            filtrosSeleccionados.forEach(filtro => {
                const propiedad = filtroMapping[filtro];
                if (propiedad) {
                    folioFiltrado[propiedad] = folio[propiedad];
                }
            });
            return { ...folio, ...folioFiltrado };
        });
    }, [filtrosSeleccionados, folios]);

    // Determinar qué columnas mostrar
    const columnasVisibles = useMemo(() => {
        if (filtrosSeleccionados.length === 0) {
            return Object.keys(filtroMapping); // Mostrar todas las columnas
        }
        return filtrosSeleccionados;
    }, [filtrosSeleccionados]);

    return (
        <>
            <Navbar />
            <div className="folios-container">
                <div className="folios-header">
                    <h1>Folios</h1>
                    <span className="tunel-badge">Túnel: {tunelNumero}</span>
                </div>

                <Filtro 
                    filtrosDisponibles={filtrosFolios}
                    onFilterChange={handleFilterChange}
                />

                <div className="tabla-container">
                    <table className="folios-table">
                        <thead>
                            <tr>
                                {columnasVisibles.map((columna) => (
                                    <th key={columna}>{columna}</th>
                                ))}
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {foliosFiltrados.map((folio, index) => (
                                <tr key={folio.id} className={index % 2 === 0 ? "row-light" : "row-dark"}>
                                    {columnasVisibles.map((columna) => {
                                        const propiedad = filtroMapping[columna];
                                        const valor = propiedad ? folio[propiedad] : "";
                                        
                                        // Determinar el tipo de dato para aplicar estilos especiales
                                        let dataType = "";
                                        if (columna.includes("T°") || valor.includes("°C")) {
                                            dataType = "temperature";
                                        }
                                        
                                        return (
                                            <td 
                                                key={`${folio.id}-${columna}`}
                                                data-type={dataType}
                                            >
                                                {valor}
                                            </td>
                                        );
                                    })}
                                    <td data-type="action">
                                        <button className="edit-btn" onClick={() => handleEditTemperatura(folio.id)}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '4px'}}>
                                                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                                            </svg>
                                            Editar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {/* Filas vacías para completar la tabla */}
                            {[...Array(Math.max(0, 4 - foliosFiltrados.length))].map((_, index) => (
                                <tr key={`empty-${index}`} className={(foliosFiltrados.length + index) % 2 === 0 ? "row-light" : "row-dark"}>
                                    {columnasVisibles.map((columna) => (
                                        <td key={`empty-${index}-${columna}`}></td>
                                    ))}
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