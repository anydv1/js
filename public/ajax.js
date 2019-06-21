	var id;
$(document).ready(function() {
   $("#driver").click(function(event){
    var data=  $('#stage').serialize();
    $.ajax({
      type:'Post',
      url:'/users' ,
      data:data,
      success:function(res){
         console.log(res);
         if(res.message == 'successfully added'){
            console.log('ooooooooooo')
            id=res.id;
            window.location = '/users/'+id;
            /* setTimeout(function(){   
               var data=  $('#stage').serialize();
               $.ajax({
                  url: "/users/"+id,
                  type: "get", //send it through get method
                  // data: { 
                  //   Id: id
                  // },
                  success: function(response) {
               console.log(response)
                  },
                  error: function(err) {
                     console.log(err)
   
                  //Do Something to handle error
                  }
               });
            },3000) */
         }
      },error:function(err){
         console.log(err)
      }
    })
   });
});


function myFunction() {
   document.getElementById("name").style.color = "red";
 }

   
      // $("#driver").click(function(event){
      //    setTimeout(function(){   
      //       var data=  $('#stage').serialize();
      //       $.ajax({
      //          url: "/users/"+id,
      //          type: "get", //send it through get method
      //          // data: { 
      //          //   Id: id
      //          // },
      //          success: function(response) {
      //       console.log(response)
      //          },
      //          error: function(err) {
      //             console.log(err)

      //          //Do Something to handle error
      //          }
      //       });
      //    },3000)
      // })

