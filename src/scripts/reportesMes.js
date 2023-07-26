import Chart from 'chart.js/auto'

const labels = ['Desarrollo por Gerencia', 'Estatus por área', 'GDP', 'Clasificación', 'Tablas de Gestión', 'Cartera de Casos', 'Prioridades por área', 'Boletín', 'Validaciones Inc.'];

const data = {
    labels: labels,
    datasets: [{
        label: 'Reportes entregados por tipo',
        barPercentage: 0.3,
        barThickness: 20,
        data: [16, 1, 4, 4, 4, 4, 2, 16, 2],
        backgroundColor: '#17CAD1'
    }]
  }

  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        x: {
          beginAtZero: true
        }
      },
      indexAxis: 'y'
    },
  };

  (async function() {
    new Chart(
      document.getElementById('reportesTipo'),
      config
    );
  })();

