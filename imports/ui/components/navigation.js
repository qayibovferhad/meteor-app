import "./navigation.html";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";

Template.navigation.events({
  "click .logoutButton": function (event, template) {
    Meteor.logout();
    FlowRouter.go("/login");
  },
  "change #changeLng": function (event, template) {
    let lang = event.target.value;
    Meteor.call("set.lang.to.user", lang);
  },
});
