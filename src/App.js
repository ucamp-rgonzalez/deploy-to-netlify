import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Pagina principal</h1>}/>
        <Route path="/usuarios" element={<h1>Pagina Usuarios</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
