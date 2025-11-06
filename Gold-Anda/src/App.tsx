import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Home/Navbar";
import Tarjetas from "./components/Home/Tarjetas";
import Ingreso from "./components/Home/Formularios/Ingreso";

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
      </Routes>
    </Router>
  );
}

export default App;
