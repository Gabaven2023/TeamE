var ctx1 = document.getElementById('myChart1');

const full1 = 300;
var used1 = 250;
var over1 = 0;

if (used1 > full1) {
  over1 = used1 - full1;
}

function change1() {
  if (over1 > 0) {
    return true;
  } else {
    return false;
  }
}

function calculateBackgroundColor1() {
  if ((used1 / full1) * 100 < 30) {
    return '#148D20';
  } else if ((used1 / full1) * 100 < 70) {
    return '#D7D720';
  } else {
    return '#D80707';
  }
}

function upper1() {
  if (used1 > full1) {
    return 0;
  } else {
    return full1 - used1;
  }
}

const counter1 = {
  id: 'counter1',
  beforeDraw(chart, args, options) {
    const { ctx, chartArea: { top, right , bottom, left, width, height } } = chart;
    ctx.save();
    ctx.fillStyle = 'black';
    ctx.fillRect(width / 2, top + (height / 2), 0, 0);
    ctx.font = '40px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${Math.round((used1/full1)*100)}%`, width / 2, top + (height / 2));
  }
};

var myChart1 = new Chart(ctx1, {
  type: 'doughnut',
  data: {
    labels: ['使用中', '空席'],
    datasets: [{
      data: [used1, upper1()],
      backgroundColor: [
        calculateBackgroundColor1(),
        'rgb(255,255,255)'
      ],
      borderColor:[
        'rgb(0,0,0)',
        'rgb(0,0,0)'
      ],
      borderWidth:0.1,
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
        display: change1(),
        text: `${over1}人待ち`,
        position: 'bottom',
        align: 'center',
        font:{
          size:40,
          weight:'bold',
        },
      },
      counter: {
        fontColor: 'red',
        fontSize: '50px',
        fontFamily: 'sans-serif',
      },
    },
  },
  plugins: [counter1]
});
