import { Basket } from "./collection";
Meteor.publish({
  "get.basket": function () {
    return Basket.find();
  },
});
