// Get that hamburger menu cookin' //

document.addEventListener("DOMContentLoaded", function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener("click", function () {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

// Smooth Anchor Scrolling
$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

// When the user scrolls down 20px from the top of the document, show the scroll up button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("toTop").style.display = "block";
  } else {
    document.getElementById("toTop").style.display = "none";
  }
}

// Preloader
$(document).ready(function ($) {
  $(".preloader-wrapper").fadeOut();
  $("body").removeClass("preloader-site");
});
$(window).on("load", function () {
  var Body = $("body");
  Body.addClass("preloader-site");
});

//functions
function sendEmail() {
  var name = $("#Name").val();
  var email = $("#Email").val();
  var phone = $("#Phone").val();
  var msg = $("#Message").val();

  Email.send({
    SecureToken: "bd9123a0-0787-4283-93bb-78fc8b482354",
    Host: "smtp.gmail.com",
    To: 'onduita@gmail.com',
    From: "morulingjames89@gmail.com",
    Subject: "Test Email",
    Body: "<html><h2>Enquiry from morsolution</h2><strong>Name :" + name + "</strong><br></br><strong> Email:" + email + "</strong><strong> Phone:" + phone + "</strong><br></br><em>" + message + "</em></html>"
  }).then(
    message => alert("Succesfully submitted! I will reach out to you soon.")
  );
}
