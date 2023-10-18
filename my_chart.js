
  const ctx = document.getElementById('myChart');
  const Dailyuser=document.getElementById('myBarChart');
  const AnalyticLine=document.getElementById('myAnalyticsChart');


  new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: ['NewUser', 'OldUser', 'RegularDoingExercise', 'RiskOfFall'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 23, 15],
        backgroundColor:[
                  'rgb(255,99,132)',
                  'rgb(69,194,194)',
                  'rgb(255,204,81)',
                  'rgb(54,162,235)',
                 
        ],
        borderColor:[
            'rgba(255,99,132,1)',
            'rgba(54,162,235,1)',
            'rgba(255,206,86,1)',
            'rgba(75,192,192,1)',
           
        ],
        borderWidth: 1
        
      }]
    },
    options: {
      responsive:true,
    }
  });
// ======for my Bar chart in the mystore html page 
new Chart(Dailyuser, {
    type: 'bar',
    data: {
      labels: ['NewUser', 'OldUser', 'RegularDoingExercise', 'RiskOfFall'],
      datasets: [{
        label: 'Data oF My Store',
        data: [12, 19, 23, 15],
        backgroundColor:[
                  'rgb(255,99,132)',
                  'rgb(69,194,194)',
                  'rgb(255,204,81)',
                  'rgb(54,162,235)',
                 
        ],
        borderColor:[
            'rgba(255,99,132,1)',
            'rgba(54,162,235,1)',
            'rgba(255,206,86,1)',
            'rgba(75,192,192,1)',
           
        ],
        borderWidth: 1
        
      }]
    },
    options: {
      responsive:true,
    }
  });

//   =====for line chart and we are using it in analytics page 
const xValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart( AnalyticLine, {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "red",
      fill: false
    },{
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "green",
      fill: false
    },{
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});