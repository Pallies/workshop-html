// APPLICATION IS READY ....!  then do it ;)
$(function () {
    users.forEach((user) => {
      var test = builderCard(user);
      console.log("%c⧭", "color: #006dcc", test);
      $("#users-cards").append(test);
    });

  console.log("%c⧭", "color: #e57373", ",gfh,f");
});
