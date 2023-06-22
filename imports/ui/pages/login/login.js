import "./login.html";
import { Meteor } from "meteor/meteor";

Template.login.helpers({
  getUsers: function () {
    console.log("Meteor.users.find({})", Meteor.users.find());
    return Meteor.users.find({});
  },
  getEmail: function (emails) {
    return emails[0].address;
  },
  getCurrentUser: function () {
    return Meteor.userId();
  },
});
