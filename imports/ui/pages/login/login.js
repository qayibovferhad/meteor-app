import "./login.html";
import { Meteor } from "meteor/meteor";

Template.login.events({
  "submit #login": function (event) {
    event.preventDefault();
    let username = $("#username").val();
    let password = $("#password").val();
    console.log(username, password);
    Meteor.loginWithPassword(username, password, function (err) {
      if (err) {
        console.log("err", err);
      }
    });
  },
});

// Template.login.helpers({
//   getUsers: function () {
//     console.log("Meteor.users.find({})", Meteor.users.find());
//     return Meteor.users.find({});
//   },
//   getEmail: function (emails) {
//     return emails[0].address;
//   },
//   getCurrentUser: function () {
//     return Meteor.userId();
//   },
// });
