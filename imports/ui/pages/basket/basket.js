import "./basket.html";
import { Basket } from "../../../api/basket/collection";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";

Template.basket.onCreated(function () {
  this.buyProduct = new ReactiveVar();
  this.subscribe("get.basket");
  this.subscribe("get.products");
});

Template.basket.helpers({
  getBasket() {
    const productCount = Basket.find().count();
    if (productCount === 0) {
      return [{ message: "Your cart is empty" }];
    }

    return Basket.find({ userId: Meteor.userId() });
  },
});

Template.basket.events({
  "click #buyBtn"(event, template) {
    template.buyProduct.set(this);

    const input = document.getElementById("productInput").value;
    const countDifference = this.count - input;
    if (this.count <= 0 || countDifference < 0) {
      return;
    }

    Meteor.call("update.basket", this._id, countDifference, (error) => {
      if (!error) {
        const newCount = this.count - input;
        Meteor.call("update.products", this._id, newCount, (error) => {
          if (!error) {
            Meteor.call("remove.basket", this._id, (error) => {
              if (!error) {
                FlowRouter.go("/");
              }
            });
          }
        });
      }
    });
  },

  "click #removeBtn"(event, template) {
    Meteor.call("remove.basket", this._id);
  },
  "click .clearAllBasket"(event, template) {
    Meteor.call("clear.all.basket", (error) => {
      console.log("error", error);
    });
  },
});
