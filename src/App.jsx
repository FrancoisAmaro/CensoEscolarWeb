import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Instituicoes from "./components/Instituicoes";

function App() {
  const [paginaAtual, setPaginaAtual] = useState("home");

  return (
    <>
      <Navbar paginaAtual={paginaAtual} setPaginaAtual={setPaginaAtual} />
      {paginaAtual === "home" ? (
        <Home setPaginaAtual={setPaginaAtual} />
      ) : (
        <Instituicoes setPaginaAtual={setPaginaAtual} />
      )}
    </>
  );
}

export default App;
