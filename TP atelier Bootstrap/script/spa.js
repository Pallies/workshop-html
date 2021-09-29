

// APPLICATION IS READY ....!  then do it ;)
$(function () {
  users.forEach((user, i) => {
    // build user's CARD
    var test = builderCard(new User(i+1,user));
    $("#users-cards").append(test);
  });
});
