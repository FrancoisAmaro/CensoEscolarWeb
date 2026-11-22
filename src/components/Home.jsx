function Home({ setPaginaAtual }) {
  const slides = [
    {
      img: "/img/banner1.jpg",
      alt: "Inclusão Digital e Educação",
      titulo: "Investimento na Educação Básica",
      descricao: "Acompanhamento de indicadores educacionais na Paraíba.",
    },
    {
      img: "/img/banner2.jpg",
      alt: "Salas de Aula",
      titulo: "Infraestrutura Escolar",
      descricao: "Acompanhamento de instalações físicas e recursos pedagógicos.",
    },
    {
      img: "/img/banner3.jpg",
      alt: "Estudantes",
      titulo: "Comunidade Escolar",
      descricao: "Mapeamento de estudantes e turmas em todo o estado.",
    },
    {
      img: "/img/banner4.jpg",
      alt: "Ensino Técnico",
      titulo: "Educação Profissional e EJA",
      descricao: "Estatísticas de matrículas para formação técnica e continuada.",
    },
    {
      img: "/img/banner5.jpg",
      alt: "Gestão e Planejamento",
      titulo: "Transparência de Dados",
      descricao: "Acesso público e estruturado aos números oficiais do INEP.",
    },
    {
      img: "/img/banner6.jpg",
      alt: "Educação Básica",
      titulo: "Censo Escolar da Paraíba",
      descricao: "Mapeamento das escolas e matrículas de toda a rede paraibana.",
    },
  ];

  return (
    <main className="container my-5">
      <div
        id="censoCarousel"
        className="carousel slide shadow rounded mb-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#censoCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner rounded">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={slide.img}
                className="d-block w-100"
                style={{ height: "420px", objectFit: "cover" }}
                alt={slide.alt}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                <h5>{slide.titulo}</h5>
                <p>{slide.descricao}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#censoCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#censoCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Próximo</span>
        </button>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title text-danger">Sobre a Aplicação</h5>
              <p className="card-text">
                Projeto desenvolvido na disciplina de Programação Web para extração
                e apresentação dos dados abertos do INEP.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title text-danger">Volume de Dados</h5>
              <p className="card-text">
                Base processada com mais de 5.600 escolas paraibanas mapeadas
                entre as redes pública e privada.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title text-danger">Top 10 Instituições</h5>
              <p className="card-text">
                Consulte o ranking das dez instituições de ensino com maior volume
                de matrículas totais no estado.
              </p>
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => setPaginaAtual("instituicoes")}
              >
                Ver Ranking
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
