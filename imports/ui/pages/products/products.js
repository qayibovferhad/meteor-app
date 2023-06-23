import "./products.html";
import { Template } from "meteor/templating";
import { Products } from "../../../api/products/collection";
import { Basket } from "../../../api/basket/collection";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";
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
    const data = { ...this, userId };
    console.log(Basket);
    Meteor.call("add.basket", data);
    FlowRouter.go("/basket");
  },
});
