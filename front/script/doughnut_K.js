var ctx2 = document.getElementById('myChart2');

const full2 = 200;
var used2 = 180;
var over2 = 0;

if (used2 > full2) {
  over2 = used2 - full2;
}

function calculateBackgroundColor2() {
  if ((used2 / full2) * 100 < 30) {
    return 'rgb(134, 239, 113)';
  } else if ((used2 / full2) * 100 < 70) {
    return 'rgb(246, 240, 72)';
  } else {
    return 'rgb(223, 0, 0)';
  }
}

function change2() {
  if (over2 > 0) {
    return true;
  } else {
    return false;
  }
}

function upper2() {
  if (used2 > full2) {
    return 0;
  } else {
    return full2 - used2;
  }
}

const counter2 = {
  id: 'counter2',
  beforeDraw(chart, args, options) {
    const { ctx, chartArea: { top, right , bottom, left, width, height } } = chart;
    ctx.save();
    ctx.fillStyle = 'black';
    ctx.fillRect(width / 2, top + (height / 2), 0, 0);
    ctx.font = '40px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${Math.round((used2/full2)*100)}%`, width / 2, top + (height / 2));
  }
};

var myChart2 = new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['使用中', '空席'],
    datasets: [{
      data: [used2, upper2()],
      backgroundColor: [
        calculateBackgroundColor2(),
        'rgb(255,255,255)'
      ],
      borderColor:[
        'rgb(0,0,0)',
        'rgb(0,0,0)'
      ],
      borderWidth:0.1
    }]
  },
  options: {
    responsive: true,
    cutout:'60%',
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          fontColor:'rgb(0,0,0)'
        },
      },
      title: {
        display: true,
        text: '席情報',
        position: 'top',
        align: 'center',
      },
      title:{
        display: change2(),
        text: `${over2}人待ち`,
        position: 'bottom',
        align: 'center',
      },
      counter: {
        fontColor: 'red',
        fontSize: '50px',
        fontFamily: 'sans-serif',
      },
    },
  },
  plugins: [counter2]
});
