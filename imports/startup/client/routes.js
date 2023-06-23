import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import "../../ui/components/navigation";
import "../../ui/layout/mainLayout";
import "../../ui/pages/home/home";
import "../../ui/pages/login/login";
import "../../ui/pages/products/products";
import "../../ui/pages/products/productDetail";
import "../../ui/pages/basket/basket";
import "../../ui/pages/notFound/notFound";
FlowRouter.triggers.enter([trackRouteEntry], {
  except: ["App.login"],
});
FlowRouter.triggers.enter([trackRouteNotEntry], {
  only: ["App.login"],
});
FlowRouter.route("/", {
  name: "App.home",
  action() {
    (document.title = "Home"),
      BlazeLayout.render("mainLayout", {
        main: "home",
      });
  },
});
FlowRouter.route("/login", {
  name: "App.login",
  action() {
    BlazeLayout.render("mainLayout", {
      login: "login",
    });
  },
});
FlowRouter.route("/products", {
  name: "App.products",
  action() {
    BlazeLayout.render("mainLayout", {
      main: "products",
    });
  },
});

FlowRouter.route("/productDetail/:_id", {
  name: "App.productDetail",
  action() {
    BlazeLayout.render("mainLayout", {
      main: "productDetail",
    });
  },
});

FlowRouter.route("/basket", {
  name: "App.basket",
  action() {
    BlazeLayout.render("mainLayout", {
      main: "basket",
    });
  },
});

FlowRouter.route("*", {
  name: "notFound",
  action() {
    BlazeLayout.render("mainLayout", {
      main: "notFound",
    });
  },
});

function trackRouteEntry(context, redirect) {
  if (!Meteor.userId()) {
    redirect("/login");
  }
}

function trackRouteNotEntry(context, redirect) {
  if (Meteor.userId()) {
    redirect("/");
  }
}
