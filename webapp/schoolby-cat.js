var district=[];
var Uppercount=[];    var Lowercount=[];     var Secondarycount=[];    var Modelcount=[];
// var category=["Upper Primary","Lower Primary","Secondary","Model Primary"];



fetch('/categor')
.then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
   

   for(var i in myJson)
    {
        //  category.push(Object.keys(myJson[i]));
        // category.push(cat);
        if(myJson[i]['Upper Primary']===undefined)
        {
            Uppercount.push(0);
        }
        else{
            var s=myJson[i]['Upper Primary'];
            Uppercount.push(s);
        }
        if(myJson[i]['Lower Primary']===undefined)
        {
            Lowercount.push(0);
        }
        else{
            var s1=myJson[i]['Lower Primary'];
            Lowercount.push(s1);
        }
        if(myJson[i]['Secondary']===undefined)
        {
            Secondarycount.push(0);
        }
        else{
            var s2=myJson[i]['Secondary'];
            Secondarycount.push(s2);
        }
        
        if(myJson[i]['Model Primary']===undefined)
        {
            var ss=0;
            Modelcount.push(ss);
        }
        else{
            var s3=myJson[i]['Model Primary'];
            Modelcount.push(s3);

        }
    }
    
    district=Object.keys(myJson);
    // console.log(Uppercount);
    //  console.log(Lowercount);
    // console.log(Secondarycount);
    //  console.log(Modelcount);
    //console.log(category);
    //  console.log(district);  
     renderChart1(district,Uppercount,Lowercount,Secondarycount,Modelcount);
    //render();


  });

function renderChart1(district,Uppercount,Lowercount,Secondarycount,Modelcount)
{

Highcharts.chart('container1',{
        chart: {
            
            type: 'column'
        },
        title: {
            text: 'Number Of Schools Per District Based on Category'
        },
       
        xAxis: {
            categories: district,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'school count'
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
            name: 'Upper Primary',
            data: Uppercount
    
        }, {
            name: 'Lower Primary',
            data: Lowercount
    
        }, {
            name: 'Secondary',
            data: Secondarycount
            
    
        }, {
            name: 'Model Primary',
            data:  Modelcount
    
        }]
    });

}



