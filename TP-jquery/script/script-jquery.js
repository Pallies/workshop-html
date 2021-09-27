
$(function () {
    var $navMiddleBar = $(".navbar_middle");
  $(".navbar_top-close").click(function () {
    $(this).parent().remove();
  });
$navMiddleBar.find(".navbar_middle-link").click(function(){
    console.log(this)
    $(".navbar_top:after")
      .css({ "z-index": "20", opacity: "1" })
      .add(function () {
        console.log(this);
   
      });
});
});
