console.log('hiiiiiii')
//JQUERY
// $(document).ready(function(){
//     // Some code to be executed...
//     alert("Hello World!");
// });

// $(document).ready(function(){
//        $("h1").css("color", "#0088ff");
//   });
//   $(document).ready(function(){
//     $("button").click(function(){
//         $("p").text("Hello World!");
//     });            
// });
// $(document).ready(function(){
//     // Highlight element with id mark
//     // $(".mark").css("background", "yellow");
//     // $("p:first").css("background", "red");

// });
// // $(document).ready(function(){
// //     $("p").click(function(){
// //         $(this).slideUp();
// //     });
// // });
// //hover method for a class
// $(document).ready(function(){
//     $("p").hover(function(){
//         $(this).addClass("highlight");
//     }, function(){
//         $(this).removeClass("highlight");
//     });
// });
// //mouseenter method for a class
// $(document).ready(function(){
//     $("p").mouseenter(function(){
//         $(this).addClass("highlighted");
//     });
// });
// //mouseleave for a class
// $(document).ready(function(){
//     $("p").mouseleave(function(){
//         $(this).removeClass("highlighted");
//     });
// });

// //on keyboard event
// $(document).ready(function(){
//     var i = 0;
//     $('input[type="text"]').keypress(function(){
//         $("span").text(i += 1);
//         $("p").show().fadeOut();
//     });
// });

// $(document).ready(function(){
//     $(".btn-one").click(function(){
//         var str = $("p").text();
//         alert(str);
//     });
//     $(".btn-two").click(function(){
//        var str = $("p:first").text();
//        alert(str);
//     });
//     $(".btn-three").click(function(){
//        var str = $("p:btn-two").text();
//        console.log(str)
//        alert(str);
//     });
// });

// $(document).ready(function(){
//     $(".btn-one").click(function(){
//         $("p").text("This is demo text.");
//     });
//     $(".btn-two").click(function(){
//         $("p:first").text("This is another demo text.");
//     });
//     $(".btn-three").click(function(){
//         $("p.empty").text("This is one more demo text.");
//     });
// });

$(document).ready(function(){
    // Add a class and title attribute to all the images
    $("button").click(function(){
        $("img").attr({
            "class" : "frame",
            "title" : "Hot Air Balloons"
        });
    });
});

$(document).ready(function(){
    // Get value of a text input with ID name
    $("button.get-name").click(function(){
        var name = $('input[type="text"]#name').val();
        alert(name);
    });
    
    // Get value of a textarea with ID comment
    $("button.get-comment").click(function(){
        var comment = $("textarea#comment").val();
        alert(comment);
    });
    
    // Get value of a select box with ID city
    $("button.get-city").click(function(){
        var city = $("select#city").val();
        alert(city);
    });
});