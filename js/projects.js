console.log("Your index.js is loaded correctly");

// $('.navigation').on("click", function(){
//     alert("thisworks");
// });

$('.projectimage').hover(function(){
       $(this).animate({
            height: "115%"
    }, 'slow');
        }, function (){
            $(this).animate({
                height: "90%"
            }, 'slow');
        });