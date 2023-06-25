import { Products, Products_Images } from "./collection";
Meteor.publish({
  "get.products": function (query = {}, limit = 100, skip = 0) {
    return Products.find(query);
  },

  // "get.image": function (query = {}) {
  //   return Products_Images.find(query).cursor;
  // },
});
Meteor.publishComposite(
  "get.product",
  function (query = {}, limit = 100, skip = 0) {
    return {
      find() {
        return Products.find(query);
      },
      children: [
        {
          find(product) {
            if (product.img) {
              return Products_Images.find({ _id: product.img }).cursor;
            }
          },
        },
      ],
    };
  }
);
