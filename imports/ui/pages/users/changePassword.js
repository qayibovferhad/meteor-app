import "./changePassword.html";
Template.changePassword.events({
  "submit #changePassword": function (event) {
    event.preventDefault();
    let oldpassword = $("#oldpassword").val();
    let newpassword = $("#newpassword").val();
    console.log(newpassword, oldpassword);
    Accounts.changePassword(oldpassword, newpassword, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("success");
      }
    });
  },
});
