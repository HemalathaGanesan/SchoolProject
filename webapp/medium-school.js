var district=[];
var Kannadacount=[];    var Tamilcount=[];     var Telugucount=[];    var urducount=[];
var marathicount=[];   var englishcount=[]; var noncount=[];

fetch('/medium')
.then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    // console.log(myJson);
   
    for(var i in myJson)
    {
        // var cat=Object.keys(myJson[i]);
        // category.push(cat);
        if(myJson[i]['kannada']===undefined)
        {
            Kannadacount.push(0);
        }
        else{
            var s=myJson[i]['kannada'];
            Kannadacount.push(s);
        }
        if(myJson[i]['urdu']===undefined)
        {
            urducount.push(0);
        }
        else{
            var s1=myJson[i]['urdu'];
            urducount.push(s1);
        }
        if(myJson[i]['marathi']===undefined)
        {
            marathicount.push(0);
        }
        else{
            var s2=myJson[i]['marathi'];
            marathicount.push(s2);
        }
        
        if(myJson[i]['english']===undefined)
        {
            var ss=0;
            englishcount.push(ss);
        }
        else{
            var s3=myJson[i]['english'];
            englishcount.push(s3);
        }
        if(myJson[i]['telugu']===undefined)
        {
            var t=0;
            Telugucount.push(t);
        }
        else{
            var t1=myJson[i]['telugu'];
            Telugucount.push(t1);
        }
        if(myJson[i]['tamil']===undefined)
        {
            var ta=0;
            Tamilcount.push(t);
        }
        else{
            var ta1=myJson[i]['tamil'];
            Tamilcount.push(ta1);
        }
    }
    
    district=Object.keys(myJson);
    //  console.log(Kannadacount);
    //  console.log(Tamilcount);
    // console.log(Telugucount);
    //  console.log(marathicount);
    // console.log(englishcount);
    //  console.log(district);  
     renderChart3(district,Kannadacount,Tamilcount,Telugucount,marathicount,englishcount,urducount);
    
  });



function renderChart3(district,Kannadacount,Tamilcount,Telugucount,marathicount,englishcount,urducount)
{
Highcharts.chart('container2',{

    chart: {
        
        type: 'column'
    },

    title: {
        text: 'Number Of Schools Per District Based on Medium'
    },

    xAxis: {
        categories: district
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'Number of schools'
        }
    },

    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br/>' +
                this.series.name + ': ' + this.y + '<br/>' +
                'Total: ' + this.point.stackTotal;
        }
    },

    plotOptions: {
        column: {
            stacking: 'normal'
        }
    },

    series: [{
        name: 'Kannada',
        data: Kannadacount
        
    }, {
        name: 'Tamil',
        data: Tamilcount
        
    }, {
        name: 'Telugu',
        data: Telugucount
        
    }, 
    {
        name: 'English',
        data: englishcount
        
    },
    {
        name: 'Urudu',
        data: urducount
        
    },
    {
        name: 'Marathi',
        data: marathicount
        
    }]
});
}
