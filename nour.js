const ctx = document.getElementById('Chart').getContext('2d');
const gradient = ctx.createLinearGradient(0, 0, 0, 300);
gradient.addColorStop(0, 'rgba(255, 193, 7, 0.3)');   
gradient.addColorStop(1, 'rgba(255, 193, 7, 0.05)'); 

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Team 1','Team 2','Team 3','Team 4','Team 5','Team 6','Team 7','Team 8','Team 9','Team 10','Team 11','Team 12'],
    datasets: [{
      label: "Points",
      data: [4.5, 4.4, 4.3, 4.5, 4.3, 4.4, 4.4, 4.4, 4.1, 4.1, 4.2, 4.6],
      borderColor: '#F1C40F',
      borderWidth: 3,
      fill: true,
      backgroundColor: gradient,
      tension: 0.4,
      pointRadius: 6,
      pointBackgroundColor: '#F1C40F',
      pointBorderColor: '#F1C40F',
      pointHoverRadius: 8,
      pointHoverBorderWidth: 2
    }]
  },

  options: {
    plugins: {
      legend: { display: false }, 

      tooltip: {
        backgroundColor: '#F1C40F',
        titleColor: '#fff',
        bodyColor: '#fff',
        padding: 10,
        bodyFont: { size: 14 },
        cornerRadius: 6
      }
    },

    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: '#999', 
          font: { size: 14 }
        }
      },

      y: {
        beginAtZero: false,
        grid: {
          color: 'rgba(0,0,0,0.05)'
        },
        ticks: {
          display: false 
        }
      }
    }
  }
});


