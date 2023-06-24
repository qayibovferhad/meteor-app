import "./products.html";
import { Template } from "meteor/templating";
import { Products } from "../../../api/products/collection";
import { Basket } from "../../../api/basket/collection";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { Random } from "meteor/random";
import { Meteor } from "meteor/meteor";
Template.products.onCreated(function () {
  this.autorun(() => {
    this.subscribe("get.products");
  });
});
Template.products.helpers({
  getProducts() {
    return Products.find();
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
