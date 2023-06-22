import { Mongo } from "meteor/mongo";

export const Products = new Mongo.Collection("products");
export const Basket = new Mongo.Collection("basket");
