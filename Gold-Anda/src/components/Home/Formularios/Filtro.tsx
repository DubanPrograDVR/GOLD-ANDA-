import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import "./styles/Filtro.css";

interface FiltroProps {
  onFilterChange?: (filtros: string[]) => void;
}

const Filtro = ({ onFilterChange }: FiltroProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const filtroRef = useRef<HTMLDivElement>(null);

  const filtrosDisponibles = [
    "Numero de tunel",
    "Exportadora",
    "Embalaje",
    "Folio",
    "Fecha",
    "Duración",
    "Hora",
    "T° Interna",
    "T° Externa"
  ];

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filtroRef.current && !filtroRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (filtro: string) => {
    let newSelectedFilters;
    if (selectedFilters.includes(filtro)) {
      newSelectedFilters = selectedFilters.filter(f => f !== filtro);
    } else {
      newSelectedFilters = [...selectedFilters, filtro];
    }
    
    setSelectedFilters(newSelectedFilters);
    onFilterChange?.(newSelectedFilters);
  };

  return (
    <>
      <div className="Filtro" ref={filtroRef}>
        <div className="filtro-header" onClick={toggleDropdown}>
          <FontAwesomeIcon className="icono-filtro" icon={faFilter} />
          <button className="boton-filtro">
            Filtrar por: 
            {selectedFilters.length > 0 && (
              <span className="filtros-count">({selectedFilters.length})</span>
            )}
          </button>
        </div>
        
        {isOpen && (
          <div className="filtro-dropdown">
            <div className="filtro-header-dropdown">
              <span className="filtro-titulo">Seleccionar columnas:</span>
              {selectedFilters.length > 0 && (
                <button 
                  className="limpiar-filtros"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedFilters([]);
                    onFilterChange?.([]);
                  }}
                >
                  Limpiar todo
                </button>
              )}
            </div>
            {filtrosDisponibles.map((filtro, index) => (
              <div key={index} className="filtro-option">
                <input
                  type="checkbox"
                  id={`filtro-${index}`}
                  checked={selectedFilters.includes(filtro)}
                  onChange={() => handleCheckboxChange(filtro)}
                />
                <label htmlFor={`filtro-${index}`} className="filtro-label">
                  {filtro}
                </label>
              </div>
            ))}
            {selectedFilters.length > 0 && (
              <div className="filtros-seleccionados">
                <small>
                  Mostrando: {selectedFilters.join(", ")}
                </small>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Filtro;
