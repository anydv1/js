// $.ajax({
//     url : 'whatever/fetch_cows_page/',
//     success : function(response_data){
//         //this function gets called as soon as a response is received, but only if it doesn't have an error
//         populate_cows_table(response_data);
//     }
// });
	
$(document).ready(function() {
   $("#driver").click(function(event){
      $('#stage').load('/ajax.html');
   });
});