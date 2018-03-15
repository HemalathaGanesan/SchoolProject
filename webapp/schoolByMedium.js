var fs = require('fs');
var district = require("./school-converted.json");

//console.log(district);
var obj = {};
function getGroupedCategory() {


    var med = district.reduce((acc, cur) => {
        if (acc.hasOwnProperty(cur.district_name)) {
            if (acc[cur.district_name].hasOwnProperty(cur.moi)) {
                const dist = cur.district_name.toLowerCase();
                acc[dist][cur.moi]++;
            }
            else {
                acc[cur.district_name][cur.moi] = 1;
            }
        } else {
            acc[cur.district_name] = {}
        }
        return acc;
    }, {})


    fs.writeFile('schools-by-medium.json', JSON.stringify(med), function (err) {
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
        var moii=data.moi;
        if(dist in obj)
        {
            if(moii in obj[dist])
            {
                obj[dist][moii]++;
            }
           else{
               obj[dist][moii]=1;
               //console.log(obj);
           }
        }
        else{
            var catobj={};
            catobj[moii]=1;
           obj[dist]=catobj;
            //    console.log(obj);
        }
    }
    console.log(obj);*/