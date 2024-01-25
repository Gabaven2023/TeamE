var ctxK = document.getElementById("myChart2");

var myLineChart = new Chart(ctxK, {
  type: 'line',
  data: {
    labels: ["08:15","10:00","11:00","12:00","12:30","13:00","13:45","17:15","17:45","18:15","18:30","19:00","19:15"],
    datasets: [
      {
        label: '使用席数',
        data: [20,40,60,180,220,130,120,80,120,150,160,120,50],
        borderColor: "rgba(0,0,0,1)",
        backgroundColor: "rgba(0,0,0,0)"
      },
      {
        label: '最大席数',
        data: [200,200,200,200,200,200,200,200,200,200,200,200,200,200,200],
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
          callback: function(value, index, values){
            return  value +  '度'
          }
        }
      }]
    },
  }
});
