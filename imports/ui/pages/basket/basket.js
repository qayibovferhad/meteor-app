import "./basket.html";
import { Basket } from "../../../api/basket/collection";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { Products, Products_Images } from "../../../api/products/collection";

Template.basket.onCreated(function () {
  this.buyProduct = new ReactiveVar();
  this.subscribe("get.basket");
  this.subscribe("get.product");
});

Template.basket.helpers({
  getBasket() {
    const productCount = Basket.find({ userId: Meteor.userId() }).count();
    if (productCount === 0) {
      return [{ message: "Your cart is empty" }];
    }

    return Basket.find({ userId: Meteor.userId() });
  },
  getClearAllButton() {
    return Basket.find({ userId: Meteor.userId() }).count() > 0;
  },
  getProductImage(productId) {
    const product = Products.findOne({ productId });
    if (product) {
      const productImage = Products_Images.findOne({
        "meta.secondId": product.productId,
      });
      if (productImage) {
        return productImage.link();
      }
    }
    return "/default-image.jpg";
  },
});

Template.basket.events({
  "input .productInput"(event, template) {
    const editBtn = event.currentTarget.parentNode.querySelector("#editBtn");
    const newCount = +event.currentTarget.value;
    const basketItem = Basket.findOne({
      userId: Meteor.userId(),
      productId: this.productId,
    });

    if (newCount > 0 && newCount <= basketItem.count) {
      editBtn.disabled = false;
    } else {
      editBtn.disabled = true;
    }
  },

  "click #editBtn"(event, template) {
    const newCount =
      +event.currentTarget.parentNode.querySelector(".productInput").value;
    const basketItem = Basket.findOne({
      userId: Meteor.userId(),
      productId: this.productId,
    });

    Meteor.call("update.basket", basketItem._id, newCount);
    document.querySelector("#editBtn").disabled = true;
  },
  "click #buyBtn"(event, template) {
    const basketItem = Basket.findOne({
      userId: Meteor.userId(),
      productId: this.productId,
    });
    const productItem = Products.findOne({
      productId: this.productId,
    });

    Meteor.call(
      "update.products",
      productItem.productId,
      productItem.count - basketItem.count
    );
    Meteor.call("remove.basket", this._id);
  },

  "click #removeBtn"(event, template) {
    Meteor.call("remove.basket", this._id);
  },
  "click .clearAllBasket"(event, template) {
    Meteor.call("clear.all.basket");
  },
});
