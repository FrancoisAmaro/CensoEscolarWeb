function Navbar({ paginaAtual, setPaginaAtual }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger shadow-sm">
      <div className="container">
        <a
          className="navbar-brand fw-bold"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            setPaginaAtual("home");
          }}
        >
          Censo Escolar PB
        </a>
        <div className="navbar-nav">
          <a
            className={`nav-link ${paginaAtual === "home" ? "active fw-bold" : ""}`}
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              setPaginaAtual("home");
            }}
          >
            Home
          </a>
          <a
            className={`nav-link ${paginaAtual === "instituicoes" ? "active fw-bold" : ""}`}
            href="#instituicoes"
            onClick={(e) => {
              e.preventDefault();
              setPaginaAtual("instituicoes");
            }}
          >
            Instituições de Ensino
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
