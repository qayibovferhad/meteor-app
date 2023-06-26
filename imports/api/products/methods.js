import { Products } from "./collection";
Meteor.methods({
  "update.products": function (productId, newCount) {
    Products.update({ productId }, { $set: { count: newCount } });
  },
});
Meteor.methods({
  "add.products": function (data) {
    Products.insert(data);
  },
});
