import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Home/Navbar";
import Tarjetas from "./components/Home/Tarjetas";
import Ingreso from "./components/Home/Formularios/Ingreso";
import TablasFolio from "./components/Home/Formularios/Tablas_folio";
import Folio from "./components/Home/Formularios/Folio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Tarjetas />
          </>
        } />
        <Route path="/ingreso/:tunelNumero" element={<Ingreso />} />
        <Route path="/folios/:tunelNumero" element={<TablasFolio />} />
        <Route path="/agregar-folio/:tunelNumero" element={<Folio />} />
      </Routes>
    </Router>
  );
}

export default App;
