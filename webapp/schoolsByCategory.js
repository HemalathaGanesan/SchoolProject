var fs = require('fs');
var district = require("./school-converted.json");

//console.log(district);
var obj = {};
function getGroupedCategory() {   

    var res = district.reduce((acc, cur) => {
        if (acc.hasOwnProperty(cur.district_name)) {
            if (acc[cur.district_name].hasOwnProperty(cur.cat)) {
                const dist = cur.district_name.toLowerCase();
                acc[dist][cur.cat]++;
            }
            else {
                acc[cur.district_name][cur.cat] = 1;
            }
        } else {
            acc[cur.district_name] = {}
        }
        return acc;
    }, {})


    fs.writeFile('schools-by-category.json', JSON.stringify(res), function (err) {
        if (err)
            console.log(err);
        else
            console.log("file saved...!!");
    })
}
getGroupedCategory();




 /*for(i=0;i< district.length;i++)
    {
        var data=district[i];
         var dist=data.district_name;
        var cate=data.cat;
        if(dist in obj)
        {
            if(cate in obj[dist])
            {
                var count=obj[dist][cate];
                obj[dist][cate]=count+1;
                // console.log(obj[dist][cate]);
            }
           else{
               obj[dist][cate]=1;
               //console.log(obj);
           }
        }
        else{
            var catobj={};
            catobj[cate]=1;
           obj[dist]=catobj;
            //    console.log(obj);
        }
    
    console.log(obj[dist]);
}*/