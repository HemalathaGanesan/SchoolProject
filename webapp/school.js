
var distName=[];
var schools=[];

fetch('/dis')
.then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    //console.log(myJson);
    
    for(var i in myJson)
    {
        // distName.push(myJson[i].district_name);
        // schools.push(myJson[i].no_of_schools);
        distName.push(i);
        schools.push(myJson[i]);
    }
    console.log(distName);
     console.log(schools);
    renderChart2(distName,schools);
  });

  function renderChart2(distName,schools)
  {
      Highcharts.chart('container',{
    chart: {
        type: 'column'
    },
    title: {
        text: 'Number Of Schools Per District'
    },
    xAxis: {
        categories:distName ,
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'No Of Schools (count)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Schools',
        data: schools

    }]
});
  }