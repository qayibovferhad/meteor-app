import "./resetpassword.html";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";

Template.resetpassword.events({
  "submit #resetpassword": function (event, template) {
    event.preventDefault();
    let target = event.target;
    let password = target.password.value;
    let token = FlowRouter.getParam("_link");
    Accounts.resetPassword(token, password, function (err) {
      if (!err) {
        FlowRouter.go("/login");
      } else {
        console.log("err", err);
      }
    });
  },
});
