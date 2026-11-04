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
        const nome = escola.NO_ENTIDADE || "Não informado";
        const municipio = escola.NO_MUNICIPIO || "Não informado";
        const total = Number(escola.QT_MAT_BAS || 0);
        const fund = Number(escola.QT_MAT_FUND || 0);
        const med = Number(escola.QT_MAT_MED || 0);
        const prof = Number(escola.QT_MAT_PROF || 0);

        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td class="text-center fw-bold">${i + 1}º</td>
          <td class="fw-semibold">${nome}</td>
          <td>${municipio}</td>
          <td class="text-center">
            <span class="badge bg-danger fs-6" style="background-color: #dc3545 !important;">
              ${total.toLocaleString("pt-BR")}
            </span>
          </td>
          <td class="text-center">${fund.toLocaleString("pt-BR")}</td>
          <td class="text-center">${med.toLocaleString("pt-BR")}</td>
          <td class="text-center">${prof.toLocaleString("pt-BR")}</td>
        `;
        tabelaCorpo.appendChild(tr);
      });
    })
    .catch((err) => {
      if (loading) {
        loading.className = "alert alert-danger text-center";
        loading.textContent = "Falha ao carregar os dados: " + err.message;
      }
      console.error(err);
    });
});