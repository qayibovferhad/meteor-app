import { Basket } from "./collection";

Meteor.methods({
  "add.basket": function (data) {
    Basket.insert(data);
  },
});
Meteor.methods({
  "remove.basket": function (basketId) {
    Basket.remove(basketId);
  },
});
Meteor.methods({
  "update.basket": function (basketId, count) {
    Basket.update(basketId, { $set: { count } });
  },
});
Meteor.methods({
  "clear.all.basket": function () {
    Basket.remove({ userId: Meteor.userId() });
  },
});
