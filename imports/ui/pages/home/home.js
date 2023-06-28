import "./home.html";
import { Template } from "meteor/templating";

Template.home.helpers({
  getEmail() {
    const user = Meteor.user();
    const email = user?.profile.firstname + " " + user.profile.lastname;
    return email || "";
  },
});
