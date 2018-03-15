
var fs=require('fs');
var district = require("./school-converted.json");

var res=district.reduce((acc,cur)=>{
    if(acc.hasOwnProperty(cur.district_name)){
        if(acc[cur.district_name]["category"].hasOwnProperty(cur.cat)){
           // const dist=cur.district_name.toLowerCase();
            acc[cur.district_name]["category"][cur.cat]++;
        }
        else{
            // acc[cur.district_name]['cate']={}
            acc[cur.district_name]["category"][cur.cat]=1;
        }
        if(acc[cur.district_name]["medium"].hasOwnProperty(cur.moi)){
            const dist=cur.district_name.toLowerCase();
            acc[cur.district_name]["medium"][cur.moi]++;
        }
        else{
            // acc[cur.district_name]['cate']={}
            acc[cur.district_name]["medium"][cur.moi]=1;
        }
    }else{
        acc[cur.district_name]={
            "category":{},
            "medium":{}
                }
    }
    return acc;
},{})
//console.log(res);
fs.writeFile('tree.json',JSON.stringify(res),function(err){
    if(err)
    console.log(err);
    else{
        console.log("file saved");
    }
})
  




   /* var di='';
    $(".title-1").click(function(){
    for(var key in res)
    {            
    di+='<li class="dist-list">'+key+"</li>";
   
    }   
    console.log(di);     
    $("#navi").append(di+'</ul>');           
          
        });
    
  

        // var d=$("dist-list").text(); 
        var cat=''; 
        // var items=document.querySelectorAll(".dist-list") ;
       
        // for(var i=0;i<items.length;i++)
        // {    
        $('#navi').on('click','.dist-list',function(){
            console.log("hi");
        for(var key in res)
        {      // console.log(res[key]);
             var a= $(this).res[key] ;
             console.log(a);    
        cat+='<li class="sub-list">'+a+"</li>";
        } 
        //console.log(cat);             
        $(".dist-list").append(cat+'</ul>');           
              
            
        });
        
        });
    });*/
