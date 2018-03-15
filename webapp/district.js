var fs = require('fs');
var district = require("./school-converted.json");
var dis_data = [];
var dis_val = [];
var district_object = {};
// districts by school count...
function getdistrict() {

    var dist = district.reduce((acc, cur) => {
        if (acc.hasOwnProperty(cur.district_name))
            acc[cur.district_name]++;
        else
            acc[cur.district_name] = 1;
        return acc;
    }, {})

    console.log(dist);
    fs.writeFile('district.json', JSON.stringify(dist), function (err) {
        if (err)
            console.log(err);
        else {
            console.log("file saved");
        }
    })


}
getdistrict();

/*for (var i = 0; i < district.length; i++) {
        if (dis_data.indexOf(district[i].district_name) === -1) {
            dis_data.push(district[i]['district_name']);
        }
    }
    getSchoolsByDistrict();
}
district.forEach(function(i){
    if (dis_data.indexOf(i.district_name) === -1) {
             dis_data.push(i['district_name']);
                }
});
// console.log(dis_data);
getSchoolsByDistrict();
}

function getSchoolsByDistrict() {
    for(var i = 0; i < dis_data.length; i++) {
        var count = 0;
        for (var j = 0; j < district.length; j++) {
            if(district[j].district_name === dis_data[i]){
                count++;
            }
        }
        var obj = {
            district_name: dis_data[i],
            no_of_schools: count
        };
        dis_val.push(obj);
        console.log(dis_val);
    }
   console.log(dis_val);*/



