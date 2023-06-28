import "./mainLayout.html";

Template.mainLayout.onCreated(function () {
  this.autorun(() => {
    if (Meteor.user()) {
      let lang = Meteor.user().profile.lng || "en";
      if (Meteor.isClient) {
        Meteor.startup(function () {
          TAPi18n.setLanguage(lang)
            .done(function () {})
            .fail(function (err) {
              console.log("err", err);
            });
        });
      }
    }
  });
});
