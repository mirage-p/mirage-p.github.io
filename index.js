$(document).ready(function() {
    $(".container").mouseenter(function(){
        $(".card").stop().animate({
            top:"-90px"
        }, "slow");
    }).mouseleave(function(){
        $(".card").stop().animate({
            top:0
        }, "slow");
    });
});

const yesOption = document.getElementById("yesOption");
const noOption = document.getElementById("noOption");

yesOption.onclick = function() {
    window.location.href = 'itenerary.html';
}

noOption.onclick = function() {
    window.location.href = 'pain.html';
}