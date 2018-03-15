fetch('/data')
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {

    var dist = '';
    dist += '<ul>'
    for (var i in myJson) {
      dist += '<li class="di">' + i;
      dist += '<ul>'
      dist += '<li clas="cat">category<ul><li>'
      for (var prop in myJson[i].category) {
        dist += prop + ":" + myJson[i].category[prop] + '</br>'
      }
      //console.log(myJson[i].category)
      dist += '</li></ul>';
      dist += '<li clas="cat">medium<ul><li>';
      for (var prop in myJson[i].medium) {
        dist += prop + ":" + myJson[i].medium[prop] + '</br>'
      }
      dist += '</li></ul>';
      dist += '</ul></li>';
    }
    dist += '</ul>';

    $('.title-1').append(dist);
    $('ul').children().children().hide()

    $('ul').on('click', 'li', function (event) {
      event.stopPropagation();
      $(this).children().toggle();
      $(this).find('br').show();

    })
  });






    //console.log(myJson);

    /*$(document).ready(function () {
      // var dist;
      var d = '';
      $(document.body).on('click','.title-1',function(event) {   
        // event.stopPropagation();
        // if($(this).children().length===0){
        for (var key in myJson) {
          d += '<li class="dist" dist_name="'+key+'">' + key + "</li>";
        }
        $("#navi").append("<ul>" + d + "</ul>");
      // }
        $('#navi').toggle()    
      });
      
      $(document.body).on('click', '.dist', function (event) {
        console.log($(this).attr('dist_name'))
        // event.stopPropagation();
          if($(this).children().length===0)
          {
       var dist=$(this).attr('dist_name');
      //  console.log(dist)
     // console.log($(this).children('.dist'))
       var c = '';      
            
          c += '<li class="sub-cat" cat="category">' + 'category'+'</li>';
          c += '<li class="sub-cat" cat="medium">' + 'medium'+'</li>';               
               
         $(".dist").append("<ul>" + c + "</ul>");
         //console.log(c); 
         }
         $(this).find('.sub-cat').toggle()      
      });
     // var p='';
      $(document.body).on('click', '.sub-cat', function (event) {
        event.stopPropagation();        
        if($(this).children().length===0){
          var dist=$(this).parents('.dist').attr('dist_name');
          // console.log(dist)
          var text=$(this).attr('cat');
          // console.log(text)
          var p = '';

          for(var j in myJson[dist]){
            for(var i in myJson[dist][j]){
              if(j=="category")
              p += '<li class="cat-list-category"><span>' + i+ " : "+myJson[dist][j][i]+"</span></li>";
              else
              p += '<li class="cat-list-medium"><span>' + i + " : "+myJson[dist][j][i]+"</span></li>";
            }         
          }
        //  console.log(p)
       
        $(this).append("<ul>"+ p + "</ul>");
        }
        if($(this).attr('cat')=="category")
          $(this).find('.cat-list-category').toggle()
          else
          $(this).find('.cat-list-medium').toggle()        
          
       });

      });*/
     // console.log(dist)
















