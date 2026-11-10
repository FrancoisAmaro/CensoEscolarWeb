document.addEventListener("DOMContentLoaded", () => {
  const tabelaCorpo = document.getElementById("tabela-escolas");
  const loading = document.getElementById("loading");

  fetch("src/datasets/instituicoes_pb.json?v=" + Date.now())
    .then((res) => {
      if (!res.ok) throw new Error("Erro HTTP: " + res.status);
      return res.json();
    })
    .then((dados) => {
      if (loading) loading.classList.add("d-none");
      tabelaCorpo.innerHTML = "";

      dados.forEach((escola, i) => {
        const nome = escola.no_entidade || "Não informado";
        const municipio = escola.no_municipio || "Não informado";
        const total = Number(escola.qt_mat_bas || 0);
        const infantil = Number(escola.qt_mat_inf || 0);
        const fundamental = Number(escola.qt_mat_fund || 0);
        const medio = Number(escola.qt_mat_med || 0);
        const profissional = Number(escola.qt_mat_prof || 0);
        const eja = Number(escola.qt_mat_eja || 0);
        const especial = Number(escola.qt_mat_esp || 0);

        const tr = document.createElement("tr");
        tr.className = "align-middle";
        tr.innerHTML = `
          <td class="text-center fw-bold">${i + 1}º</td>
          <td class="fw-semibold">${nome}</td>
          <td class="text-center">${municipio}</td>
          <td class="text-center">
            <span class="badge bg-danger fs-6" style="background-color: #dc3545 !important;">
              ${total.toLocaleString("pt-BR")}
            </span>
          </td>
          <td class="text-center">${infantil.toLocaleString("pt-BR")}</td>
          <td class="text-center">${fundamental.toLocaleString("pt-BR")}</td>
          <td class="text-center">${medio.toLocaleString("pt-BR")}</td>
          <td class="text-center">${profissional.toLocaleString("pt-BR")}</td>
          <td class="text-center">${eja.toLocaleString("pt-BR")}</td>
          <td class="text-center">${especial.toLocaleString("pt-BR")}</td>
        `;
        tabelaCorpo.appendChild(tr);
      });
    })
    .catch((err) => {
      if (loading) {
        loading.className = "alert alert-danger text-center";
        loading.textContent = "Falha ao carregar: " + err.message;
      }
      console.error(err);
    });
});