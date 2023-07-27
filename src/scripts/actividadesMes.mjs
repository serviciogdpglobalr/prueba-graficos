import Chart from 'chart.js/auto'

  const labels = ['Mayo', 'Junio', 'Julio'];
  const data = {
    labels: labels,
    datasets: [{
        label: 'Actividades Procesadas en el mes',
        barPercentage: 0.3,
        barThickness: 50,
        data: [84, 47, 50],
        backgroundColor: '#17CAD1'
    }]
  }

  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

  (async function() {
    new Chart(
      document.getElementById('actividadesMes'),
      config
    );
  })();