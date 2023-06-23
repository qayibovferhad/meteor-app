import { Products } from "./collection";
Meteor.publish({
  "get.products": function (query = {}) {
    return Products.find(query);
  },
});
