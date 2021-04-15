$(document).ready(function () {
    $(`#show`).click(function () {
        $(`p`).show(2000);//you can put parameter to delay(ms)
    })

    $(`#hide`).click(function () {
        $(`p`).hide(2000);
    })

    $(`#toggle`).click(function () {
        $(`p`).toggle(2000);//hide+show :)
    })
});