import "./forgotpassword.html";

Template.forgotpassword.events({
  "submit #forgotpassword": function (event, template) {
    event.preventDefault();
    console.log("firs");
    let target = event.target;
    let email = target.email.value;

    Accounts.forgotPassword({ email: email }, function (err) {
      if (!err) {
        alert("Size mail geldi!");
      } else {
        console.log("err", err);
      }
    });
  },
});
