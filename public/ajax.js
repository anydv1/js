	
$(document).ready(function() {
   $("#driver").click(function(event){
    var data=  $('#stage').serialize();
    $.ajax({
      type:'Post',
      url:'/users' ,
      data:data,
      success:function(user){
         console.log(user);
      },error:function(err){
         console.log(err)
      }
    })
   });
});

	
// $(document).ready(function() {
//    $("#driver").click(function(event){
//       $('#stage').load('/users');
//    });
// });