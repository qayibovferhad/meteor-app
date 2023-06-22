import "../../api/products/collection";
import { Mongo } from "meteor/mongo";

export const Products = new Mongo.Collection("products");
