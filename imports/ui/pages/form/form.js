import { Products_Images } from "../../../api/products/collection";
import "./form.html";
import { Random } from "meteor/random";
Template.form.onCreated(function () {
  this.loading = new ReactiveVar(false);
});
Template.form.helpers({
  getLoading: function () {
    return Template.instance().loading.get();
  },
});
Template.form.events({
  "submit #productForm": function (event, template) {
    event.preventDefault();

    let productName = $("#productName").val();
    let productPrice = parseInt($("#productPrice").val());
    let productCount = parseInt($("#productCount").val());
    let file = document.getElementById("productImage").files[0];
    let formData = {
      _id: Random.id(),
      productId: Random.id(),
      name: productName,
      price: productPrice,
      count: productCount,
    };
    const upload = Products_Images.insert(
      {
        fileId: Random.id(),
        meta: {
          temp: true,
          productId: formData._id,
          secondId: formData.productId,
        },
        file,
        chunkSize: "dynamic",
      },
      false
    );

    upload.on("start", function () {
      template.loading.set(true);
    });
    upload.on("end", function (error, fileObj) {
      if (error) {
        alert("error: " + error);
        console.log("error", error);
      } else {
        alert(`file: ${fileObj.name} successfully uploaded`);
        formData.img = fileObj._id;
        Meteor.call("addProduct", formData);
      }
      template.loading.set(false);
    });
    upload.start();
    console.log(productName, productPrice, productCount, file);
  },
});
