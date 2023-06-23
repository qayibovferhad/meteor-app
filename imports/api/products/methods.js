import { Products } from "./collection";
Meteor.methods({
  "update.products": function (productId, count) {
    Products.update(productId, { $set: { count } });
  },
});
