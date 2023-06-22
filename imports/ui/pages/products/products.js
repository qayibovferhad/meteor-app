import "./products.html";
import { Products, Basket } from "../../../api/collection";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { Meteor } from "meteor/meteor";
Template.products.helpers({
  getProducts: function () {
    console.log(Products.find());
    return Products.find();
  },
});
Template.products.events({
  "click #addBasket": function () {
    let userId = Meteor.userId();
    let data = { ...this, userId };
    let result = Basket.insert(data);
    FlowRouter.go("/basket");
  },
});
