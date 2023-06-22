import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import "../../ui/components/navigation";
import "../../ui/layout/mainLayout";
import "../../ui/pages/home/home";
import "../../ui/pages/login/login";
import "../../ui/pages/products/products";
import "../../ui/pages/basket/basket";
FlowRouter.route("/", {
  name: "home",
  action() {
    BlazeLayout.render("mainLayout", {
      main: "home",
    });
  },
});
FlowRouter.route("/login", {
  name: "login",
  action() {
    BlazeLayout.render("mainLayout", {
      login: "login",
    });
  },
});
FlowRouter.route("/products", {
  name: "products",
  action() {
    BlazeLayout.render("mainLayout", {
      main: "products",
    });
  },
});
FlowRouter.route("/productDetail/:_id", {
  name: "productDetail",
  action(params) {
    BlazeLayout.render("mainLayout", {
      main: "productDetail",
    });
  },
});

FlowRouter.route("/basket", {
  name: "basket",
  action() {
    BlazeLayout.render("mainLayout", {
      main: "basket",
    });
  },
});
