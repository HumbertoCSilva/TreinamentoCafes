
  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");

    function activateTab(hash) {
      links.forEach(link => {
        if (link.getAttribute("href") === hash) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });

      sections.forEach(section => {
        if ("#" + section.id === hash) {
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
      });
    }

    // Evento ao clicar nos links
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = this.getAttribute("href");
        history.pushState(null, null, target);
        activateTab(target);
      });
    });

    // Ativar aba inicial baseada na URL ou padrão
    const initialHash = window.location.hash || "#introducao";
    activateTab(initialHash);
  });


  // códigos para ps gráficos

  
 window.addEventListener('DOMContentLoaded', () => {
  const ctxProducao = document.getElementById('graficoProducao')?.getContext('2d');
  if (ctxProducao) {
    new Chart(ctxProducao, {
      type: 'bar',
      data: {
        labels: ['Brasil', 'Colômbia', 'Etiópia', 'Honduras', 'Guatemala'],
        datasets: [{
          label: 'Produção (milhões de sacas)',
          data: [61, 11.5, 8.3, 6.2, 3.6],
          backgroundColor: '#795548'
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true },
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  const ctxConsumo = document.getElementById('graficoConsumo')?.getContext('2d');
  if (ctxConsumo) {
    new Chart(ctxConsumo, {
      type: 'bar',
      data: {
        labels: ['Finlândia', 'Noruega', 'Islândia', 'Dinamarca', 'Suécia'],
        datasets: [{
          label: 'Consumo (kg per capita)',
          data: [12, 9.9, 9, 8.7, 8.2],
          backgroundColor: '#3e2723'
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true },
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }
});

document.getElementById('btnSalvarPDF')?.addEventListener('click', function () {
  const elemento = document.body; // ou outro container, como document.getElementById("conteudo")

  const opcoes = {
    margin:       0.5,
    filename:     'pagina_cafe.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opcoes).from(elemento).save();
});
