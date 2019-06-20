console.log('hiiiiiii')
//JQUERY
// $(document).ready(function(){
//     // Some code to be executed...
//     alert("Hello World!");
// });

$(document).ready(function(){
       $("h1").css("color", "#0088ff");
  });
  $(document).ready(function(){
    $("button").click(function(){
        $("p").text("Hello World!");
    });            
});
$(document).ready(function(){
    // Highlight element with id mark
    // $(".mark").css("background", "yellow");
    // $("p:first").css("background", "red");

});
$(document).ready(function(){
    $("p").click(function(){
        $(this).slideUp();
    });
});
//hover method for a class
$(document).ready(function(){
    $("p").hover(function(){
        $(this).addClass("highlight");
    }, function(){
        $(this).removeClass("highlight");
    });
});
//mouseenter method for a class
$(document).ready(function(){
    $("p").mouseenter(function(){
        $(this).addClass("highlighted");
    });
});
//mouseleave for a class
$(document).ready(function(){
    $("p").mouseleave(function(){
        $(this).removeClass("highlighted");
    });
});

//on keyboard event
$(document).ready(function(){
    var i = 0;
    $('input[type="text"]').keypress(function(){
        $("span").text(i += 1);
        $("p").show().fadeOut();
    });
});
$(document).ready(function(){
    $("form").submit(function(event){
        var regex = /^[a-zA-Z]+$/;
        var currentValue = $("#firstName").val();
        if(regex.test(currentValue) == false){
            $("#result").html('<p class="error">Not valid!</p>').show().fadeOut(1000);
            // Preventing form submission
            event.preventDefault();
        }
    });
});
  //JAvaScript

// // get the heading from the first article
// const firstH2 = document.querySelector('.sensations');
// // get its parent, the current article
// const currentArticle = firstH2.parentNode;
// console.log(currentArticle); // <article id="article-1">
// // get the next sibling node of this parent
// let nextNode = currentArticle.nextSibling;
// while (nextNode && nextNode.nodeType !== 1) {
//   // while there is a next sibling node and it is not an
//   // element node, skip to the next sibling node
//   nextNode = nextNode.nextSibling;
// }
// if (nextNode) {
//   // if there is next sibling node and it is
//   // the element node, then log it
//   console.log(nextNode); // <article id="article-2">
//   // get the first element child node of the nextArticle node
//   const secondH2 = nextNode.children[0];
//   console.log(secondH2.textContent); // 'How to grow Bonsai'
// }

// function Human(firstName, lastName) {
// 	this.firstName = firstName,
// 	this.lastName = lastName,
// 	this.fullName = function() {
// 		return this.firstName + " " + this.lastName;
// 	}
// }

// var person1 = new Human("Virat", "Kohli");
// console.log(Human.prototype)
// console.log('letssee',person1)