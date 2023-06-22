import "./basket.html";
import { Products, Basket } from "../../../api/collection";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";

Template.basket.onCreated(function () {
  this.buyProduct = new ReactiveVar();
});

Template.basket.helpers({
  getBasket: function () {
    return Basket.find({ userId: Meteor.userId() });
  },
});
Template.basket.events({
  "click #buyBtn": function (events, template) {
    template.buyProduct.set(this);

    let input = document.getElementById("productInput").value;
    let say = this.count - input;
    if (this.count <= 0 && say < 0) {
      return;
    }
    console.log(template.buyProduct);
    console.log("template.buyProduct", template.buyProduct);
    Basket.update(this._id, {
      $set: { count: say },
    });
    var newCount = Basket.find({}, { fields: { count: 1 } }).map(
      (doc) => doc.count
    );
    Products.update(this._id, { $set: { count: newCount[0] } });
    Basket.remove(this._id);
    FlowRouter.go("/");
  },
});
