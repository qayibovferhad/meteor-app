import "./products.html";
import { Template } from "meteor/templating";
import { Products, Products_Images } from "../../../api/products/collection";
import { Random } from "meteor/random";
import { Meteor } from "meteor/meteor";
Template.products.onCreated(function () {
  this.autorun(() => {
    this.subscribe("get.product");
  });
});
Template.products.helpers({
  getProducts() {
    return Products.find();
  },

  getImg(productId) {
    let productImage = Products_Images.findOne({ "meta.secondId": productId });
    if (productImage) {
      return productImage.link();
    } else {
      return "/default-image.jpg";
    }
  },
});

Template.products.events({
  "click #addBasket"() {
    const userId = Meteor.userId();
    const _id = Random.id();
    const data = { ...this, _id, userId };

    Meteor.call("checkBasketItem", data.productId, (error) => {
      if (error) {
        console.log(error.reason);
        return;
      }
      if (this.count === 0) {
        return;
      }
      Meteor.call("add.basket", data, (error) => {
        if (!error) {
          Meteor.call("update.products", this._id, this.count);
        }
      });
    });
  },
});
