function fun() {
    if (window.innerWidth > 375)
        $("body").css("background-image", "url(\"../images/bg-intro-desktop.png\")");
    else
        $("body").css("background-image", "url(\"../images/bg-intro-mobile.png\")");
}

fun();

$(window).resize(fun);