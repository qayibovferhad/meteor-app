Meteor.methods({
  "add.user": function (data) {
    let res = Accounts.createUser({
      username: data.username,
      email: data.email,
      password: data.password,
      profile: {
        firstname: data.firstname,
        lastname: data.lastname,
        lng: "en",
      },
    });
    return res;
  },
});
Meteor.methods({
  "set.lang.to.user": function (lng) {
    return Meteor.users.update(
      { _id: Meteor.userId() },
      { $set: { "profile.lng": lng } }
    );
  },
});
