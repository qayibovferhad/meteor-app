import { Mongo } from "meteor/mongo";

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
