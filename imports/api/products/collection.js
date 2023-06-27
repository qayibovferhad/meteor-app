import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
export const Products = new Mongo.Collection("products");

import { FilesCollection } from "meteor/ostrio:files";

export const Products_Images = new FilesCollection({
  collectionName: "Products_Files",
  storagePath: "/Users/Admin/Documents/images",
  allowClientCode: false,
  onBeforeUpload: function (file) {
    if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
      return true;
    }
    return "Please upload image,with size equal or less than 10MB";
  },
});

const Schema = {};

Schema.Product = new SimpleSchema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  count: {
    type: Number,
  },
  img: {
    type: String,
    optional: true,
  },
  productId: {
    type: String,
  },
});

export const productValidationContext = Schema.Product.namedContext("product");
Products.attachSchema(Schema.Product);
