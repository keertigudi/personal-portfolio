
$(document).ready(function () {

    // Mobile Navigation Menu
    $("#menu-btn").click(function () {
        $("#nav-links").toggleClass("show");
    });

    // Animated Role Text
    var roles = [
        "CSE Student",
        "Aspiring Web Developer",
        "Programmer",
        "Technology Enthusiast"
    ];

    var index = 0;

    setInterval(function () {
        $("#role-text").fadeOut(300, function () {
            index = (index + 1) % roles.length;
            $(this).text(roles[index]).fadeIn(300);
        });
    }, 2500);

    // Dark Mode
    if (localStorage.getItem("theme") === "dark") {
        $("body").addClass("dark-mode");
        $("#theme-btn").text("☀");
    }

    $("#theme-btn").click(function () {
        $("body").toggleClass("dark-mode");

        if ($("body").hasClass("dark-mode")) {
            $(this).text("☀");
            localStorage.setItem("theme", "dark");
        } else {
            $(this).text("☾");
            localStorage.setItem("theme", "light");
        }
    });

});
