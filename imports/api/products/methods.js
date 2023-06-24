import { Products } from "./collection";
Meteor.methods({
  "update.products": function (productId, newCount) {
    Products.update({ productId }, { $set: { count: newCount } });
  },
});
