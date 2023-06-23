import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { Products } from "../../../api/products/collection";

import "./productDetail.html";

Template.productDetail.onCreated(function () {
  this.productId = new ReactiveVar();

  this.autorun(() => {
    FlowRouter.watchPathChange();
    this.productId.set(FlowRouter.getParam("_id"));
  });

  this.autorun(() => {
    if (this.productId.get()) {
      let query = {
        _id: this.productId.get(),
      };

      this.subscribe("get.products", query);
    }
  });
});

Template.productDetail.helpers({
  currentProduct() {
    return Products.findOne({ _id: Template.instance().productId.get() });
  },
});
