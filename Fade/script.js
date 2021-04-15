$(document).ready(function () {
    $(`#in`).click(function () {
        $(`#div1`).fadeIn();
        $(`#div2`).fadeIn("slow");
        $(`#div3`).fadeIn(2000);
    })

    $(`#out`).click(function () {
        $(`#div4`).fadeOut();
        $(`#div5`).fadeOut("slow");
        $(`#div6`).fadeOut(2000);
    })

    $(`#toggle`).click(function () {
        $(`#div7`).fadeToggle();
        $(`#div8`).fadeToggle("slow");
        $(`#div9`).fadeToggle(2000);
    })



});