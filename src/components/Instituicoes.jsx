import instituicoesData from "../datasets/instituicoes_pb.json";

function Instituicoes({ setPaginaAtual }) {
  return (
    <main className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h2 className="fw-bold text-danger">
            Top 10 Instituições de Ensino da Paraíba
          </h2>
          <p className="text-muted mb-0">
            Classificação pelo total de matrículas na educação básica (soma das
            etapas solicitadas).
          </p>
        </div>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => setPaginaAtual("home")}
        >
          Voltar à Home
        </button>
      </div>

      <div className="table-responsive shadow-sm rounded">
        <table className="table table-hover table-striped mb-0">
          <thead className="table-dark">
            <tr className="text-center align-middle">
              <th>#</th>
              <th className="text-start">Nome da Instituição</th>
              <th>Município</th>
              <th>Total de Matrículas</th>
              <th>Infantil</th>
              <th>Fundamental</th>
              <th>Médio</th>
              <th>Profissional</th>
              <th>EJA</th>
              <th>Especial</th>
            </tr>
          </thead>
          <tbody>
            {instituicoesData.map((escola, index) => (
              <tr key={escola.co_entidade || index} className="align-middle">
                <td className="text-center fw-bold">{index + 1}º</td>
                <td className="fw-semibold">{escola.no_entidade}</td>
                <td className="text-center">{escola.no_municipio}</td>
                <td className="text-center">
                  <span className="badge bg-danger fs-6">
                    {Number(escola.qt_mat_bas || 0).toLocaleString("pt-BR")}
                  </span>
                </td>
                <td className="text-center">
                  {Number(escola.qt_mat_inf || 0).toLocaleString("pt-BR")}
                </td>
                <td className="text-center">
                  {Number(escola.qt_mat_fund || 0).toLocaleString("pt-BR")}
                </td>
                <td className="text-center">
                  {Number(escola.qt_mat_med || 0).toLocaleString("pt-BR")}
                </td>
                <td className="text-center">
                  {Number(escola.qt_mat_prof || 0).toLocaleString("pt-BR")}
                </td>
                <td className="text-center">
                  {Number(escola.qt_mat_eja || 0).toLocaleString("pt-BR")}
                </td>
                <td className="text-center">
                  {Number(escola.qt_mat_esp || 0).toLocaleString("pt-BR")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Instituicoes;
