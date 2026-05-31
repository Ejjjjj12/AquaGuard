
function updateClock() {
  var now = new Date();
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();
  var ampm = h >= 12 ? 'PM' : 'AM';

  h = h % 12 || 12;
  h = h.toString().padStart(2, '0');
  m = m.toString().padStart(2, '0');
  s = s.toString().padStart(2, '0');

  var timeStr = h + ':' + m + ':' + s + ' ' + ampm;

  document.getElementById('clock').textContent = timeStr;
  document.getElementById('infoTime').textContent = timeStr;
  document.getElementById('lastUpdate').textContent = timeStr;

  var dateStr = now.toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
  document.getElementById('infoDate').textContent = dateStr;
}

setInterval(updateClock, 1000);
updateClock();


var labels = ['00:00','02:00','04:00','06:00','08:00','10:00',
              '12:00','14:00','16:00','18:00','20:00','22:00','24:00'];

var data = [1.5, 1.4, 1.35, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0, 2.1, 2.2, 2.3, 2.35];

var ctx = document.getElementById('chart').getContext('2d');

var gradient = ctx.createLinearGradient(0, 0, 0, 160);
gradient.addColorStop(0, 'rgba(0, 207, 255, 0.2)');
gradient.addColorStop(1, 'rgba(0, 207, 255, 0)');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      data: data,
      fill: true,
      backgroundColor: gradient,
      borderColor: '#00cfff',
      borderWidth: 2,
      pointRadius: 0,
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function(ctx) {
            return ' ' + ctx.parsed.y.toFixed(2) + ' m';
          }
        }
      }
    },
    scales: {
      x: {
        grid: { color: 'rgba(28, 46, 72, 0.6)' },
        ticks: { color: '#3d5a7a', font: { size: 10 } }
      },
      y: {
        min: 0,
        max: 3.5,
        grid: { color: 'rgba(28, 46, 72, 0.6)' },
        ticks: {
          color: '#3d5a7a',
          font: { size: 10 },
          callback: function(v) { return v.toFixed(1); }
        }
      }
    }
  }
});

var level = 2.35;

setInterval(function() {
  level += (Math.random() - 0.48) * 0.02;
  level = Math.max(1.8, Math.min(3.2, level));
  document.getElementById('waterLevel').textContent = level.toFixed(2) + ' m';
}, 3000);

