import Navbar from "../Navbar";
import "./styles/Historico.css";
import Filtro from "./Filtro";
import { useState, useMemo } from "react";

const Historico = () => {
  const [filtrosSeleccionados, setFiltrosSeleccionados] = useState<string[]>([]);

  // Datos estáticos para el histórico
  const folios = [
    {
      numeroTunel: "TUN-001",
      exportadora: "AquaChile S.A.",
      embalaje: "Caja 10kg",
      folio: "0000000001",
      fecha: "15/11/2024",
      duracion: "2h 30m",
      hora: "08:30",
      tempInterna: "1,8°C",
      tempExterna: "2,1°C",
    },
    {
      numeroTunel: "TUN-002",
      exportadora: "Marine Harvest Chile",
      embalaje: "Caja 15kg",
      folio: "0000000002",
      fecha: "15/11/2024",
      duracion: "3h 15m",
      hora: "10:45",
      tempInterna: "1,5°C",
      tempExterna: "1,9°C",
    },
    {
      numeroTunel: "TUN-003",
      exportadora: "Salmones Camanchaca",
      embalaje: "Caja 12kg",
      folio: "0000000003",
      fecha: "16/11/2024",
      duracion: "2h 45m",
      hora: "14:20",
      tempInterna: "2,0°C",
      tempExterna: "2,3°C",
    },
    {
      numeroTunel: "TUN-001",
      exportadora: "Multiexport Foods",
      embalaje: "Caja 8kg",
      folio: "0000000004",
      fecha: "16/11/2024",
      duracion: "1h 50m",
      hora: "16:15",
      tempInterna: "1,7°C",
      tempExterna: "2,0°C",
    },
    {
      numeroTunel: "TUN-004",
      exportadora: "Blumar Seafoods",
      embalaje: "Caja 20kg",
      folio: "0000000005",
      fecha: "17/11/2024",
      duracion: "4h 10m",
      hora: "09:00",
      tempInterna: "1,9°C",
      tempExterna: "2,2°C",
    },
    {
      numeroTunel: "TUN-002",
      exportadora: "Pesquera San José",
      embalaje: "Caja 18kg",
      folio: "0000000006",
      fecha: "18/11/2024",
      duracion: "3h 20m",
      hora: "11:30",
      tempInterna: "1,6°C",
      tempExterna: "2,0°C",
    },
    {
      numeroTunel: "TUN-003",
      exportadora: "Ventisqueros S.A.",
      embalaje: "Caja 14kg",
      folio: "0000000007",
      fecha: "18/11/2024",
      duracion: "2h 15m",
      hora: "15:45",
      tempInterna: "1,4°C",
      tempExterna: "1,8°C",
    },
    {
      numeroTunel: "TUN-001",
      exportadora: "Trusal S.A.",
      embalaje: "Caja 12kg",
      folio: "0000000008",
      fecha: "19/11/2024",
      duracion: "3h 00m",
      hora: "07:15",
      tempInterna: "1,7°C",
      tempExterna: "2,1°C",
    },
  ];

  // Mapeo de nombres de filtros a propiedades del objeto
  const filtroMapping: Record<string, keyof typeof folios[0]> = {
    "Numero de tunel": "numeroTunel",
    "Exportadora": "exportadora",
    "Embalaje": "embalaje",
    "Folio": "folio",
    "Fecha": "fecha",
    "Duración": "duracion",
    "Hora": "hora",
    "T° Interna": "tempInterna",
    "T° Externa": "tempExterna"
  };

  // Función para manejar cambios en los filtros
  const handleFilterChange = (nuevosFiltros: string[]) => {
    setFiltrosSeleccionados(nuevosFiltros);
  };

  // Función para convertir fecha DD/MM/YYYY a objeto Date
  const parseDate = (fechaStr: string): Date => {
    const [day, month, year] = fechaStr.split('/').map(num => parseInt(num));
    return new Date(year, month - 1, day); // month - 1 porque Date usa meses de 0-11
  };

  // Datos filtrados basados en las columnas seleccionadas
  const foliosFiltrados = useMemo(() => {
    let datosOrdenados = [...folios];

    // Si se incluye la fecha en los filtros, ordenar por fecha descendente (más reciente primero)
    if (filtrosSeleccionados.includes("Fecha")) {
      datosOrdenados = datosOrdenados.sort((a, b) => {
        const fechaA = parseDate(a.fecha);
        const fechaB = parseDate(b.fecha);
        
        // Ordenar descendente (más reciente primero)
        if (fechaA.getTime() !== fechaB.getTime()) {
          return fechaB.getTime() - fechaA.getTime();
        }
        
        // Si las fechas son iguales, ordenar por hora descendente
        const [horaA, minutoA] = a.hora.split(':').map(num => parseInt(num));
        const [horaB, minutoB] = b.hora.split(':').map(num => parseInt(num));
        const tiempoA = horaA * 60 + minutoA;
        const tiempoB = horaB * 60 + minutoB;
        
        return tiempoB - tiempoA;
      });
    }

    if (filtrosSeleccionados.length === 0) {
      return datosOrdenados; // Si no hay filtros seleccionados, mostrar todos los datos ordenados
    }

    // Crear un objeto con solo las propiedades seleccionadas
    return datosOrdenados.map(folio => {
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
      <Filtro onFilterChange={handleFilterChange} />

      <div className="folios-container">
        <div className="tabla-container">
          <div className="folios-header">
            <h1>Historico</h1>
          </div>
          <table className="folios-table">
            <thead>
              <tr>
                {columnasVisibles.map((columna) => {
                  const headerNames: Record<string, string> = {
                    "Numero de tunel": "N° de Túnel",
                    "Exportadora": "Exportadora", 
                    "Embalaje": "Embalaje",
                    "Folio": "Folio",
                    "Fecha": "Fecha",
                    "Duración": "Duración",
                    "Hora": "Hora",
                    "T° Interna": "T° Interna",
                    "T° Externa": "T° Externa"
                  };
                  return (
                    <th key={columna}>
                      {headerNames[columna] || columna}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {foliosFiltrados.map((folio, index) => (
                <tr
                  key={folio.folio}
                  className={index % 2 === 0 ? "row-light" : "row-dark"}
                >
                  {columnasVisibles.map((columna) => {
                    const propiedad = filtroMapping[columna];
                    return (
                      <td key={`${folio.folio}-${columna}`}>
                        {propiedad ? folio[propiedad] : ""}
                      </td>
                    );
                  })}
                </tr>
              ))}
              {/* Filas vacías para completar la tabla */}
              {[...Array(Math.max(0, 4 - foliosFiltrados.length))].map((_, index) => (
                <tr
                  key={`empty-${index}`}
                  className={(foliosFiltrados.length + index) % 2 === 0 ? "row-light" : "row-dark"}
                >
                  {columnasVisibles.map((columna) => (
                    <td key={`empty-${index}-${columna}`}></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <button className="pagination-btn prev">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <span className="page-numbers">
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
          </span>
          <button className="pagination-btn next">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Historico;
