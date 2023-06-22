import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { Products } from "../../../api/collection";

import "./productDetail.html";

Template.productDetail.onCreated(function () {
  this.productId = new ReactiveVar();
  this.autorun(() => {
    this.productId.set(FlowRouter.getParam("_id"));
  });
});

Template.productDetail.helpers({
  currentProduct() {
    return Products.findOne({ _id: Template.instance().productId.get() });
  },
});
