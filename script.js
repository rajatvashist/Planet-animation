$(function () {
    $("#img3").draggable();
  });
  $(function () {
    $("#txt").draggable();
  });

  function mouseOver() {
    document.getElementById("img3").style.animationPlayState = "paused";
  }
  function mouseOut() {
    document.getElementById("img3").style.animationPlayState = "running";
  }

  $(document).ready(function () {
    $("button").click(function () {
      myMusic.play();
      $("button").fadeOut(4000);
      $("#obj1").animate({ left: "496px" }, 12000, function () {
        $("#img1").effect({
          effect: "explode",
          pieces: 100,
          duration: 5000,
        });
      });

      $("#obj2").animate({ right: "496px" }, 12000, function () {
        $("#img2").effect({
          effect: "explode",
          pieces: 100,
          duration: 5000,
        });
        blast.play();
        $("#txt").fadeIn(14000);
      });

      $("#img3").animate({ left: "565px" }, 11000);
    });
  });