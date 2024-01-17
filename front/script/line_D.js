var ctxD = document.getElementById("myChart1");

var myLineChart = new Chart(ctxD, {
  type: 'line',
  data: {
    labels: ["11:00", "12:00", "12:30", "13:00", "13:30", "14:00", "14:15"],
    datasets: [
      {
        label: '使用席数',
        data: [20, 150, 330, 350, 120, 80, 50, 20],
        borderColor: "rgba(0,0,0,1)",
        backgroundColor: "rgba(0,0,0,0)"
      },
      {
        label: '最大席数',
        data: [300,300,300,300,300,300,300,300],
        borderColor: "rgba(255,0,0,1)",
        backgroundColor: "rgba(0,0,0,0)"
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: '気温（8月1日~8月7日）'
    },
    scales: {
      yAxes: [{
        ticks: {
          suggestedMax: 40,
          suggestedMin: 0,
          stepSize: 10,
          callback: function (value, index, values) {
            return value + '度'
          }
        }
      }]
    },
  }
});
