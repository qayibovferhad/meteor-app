import "./users.html";
Template.users.helpers({
  getCurrentUser: function () {
    console.log("first");
    return Meteor.user();
  },
});
Template.users.events({
  "submit #register": function (event, template) {
    event.preventDefault();
    const username = $("#username").val();
    const email = $("#email").val();
    const password = $("#password").val();
    const firstname = $("#firstname").val();
    const lastname = $("#lastname").val();
    console.log(username, password, firstname, lastname, email);
    let data = {
      username,
      email,
      password,
      firstname,
      lastname,
    };
    Meteor.call("add.user", data, (err, success) => {
      if (err) {
        console.log("err", err);
      }
      if (success) {
        console.log("success", success);
      }
    });
  },
});
