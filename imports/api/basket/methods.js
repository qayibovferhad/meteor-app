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
Meteor.methods({
  checkBasketItem(productId) {
    const userId = Meteor.userId();
    const existingItem = Basket.findOne({ userId, productId });

    if (existingItem) {
      throw new Meteor.Error(
        "item-already-exists",
        "The item already exists in the basket."
      );
    }
  },
});
