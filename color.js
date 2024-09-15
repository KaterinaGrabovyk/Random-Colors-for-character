var variants="abcdef0123456789";
var colors=[];
function randomColors(){
    var color="";
    for(var i=0;i<6;i++){
        var a=Math.floor(Math.random()*(variants.length-1));
        color+=variants[a];
    }
    return color;
}

function palette(){
    for(var i=0;i<$("#colors .C").length;i++){
     var r="#"+randomColors();
     var id=document.querySelectorAll(".C")[i].getAttribute("id");
     $("."+id).css("background-color",r);
     document.getElementsByClassName("C")[i].style.backgroundColor=r;
     document.querySelectorAll(".C>p")[i].innerHTML=r;
    }
}
$("button").click(function(){
    palette();
})

