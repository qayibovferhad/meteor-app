import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import "../../ui/components/navigation";
import "../../ui/layout/mainLayout";
import "../../ui/pages/home/home";
import "../../ui/pages/login/login";
import "../../ui/pages/products/products";
import "../../ui/pages/products/productDetail";
import "../../ui/pages/basket/basket";
import "../../ui/pages/form/form";
import "../../ui/pages/notFound/notFound";
import "../../ui/pages/users/users";
import "../../ui/pages/users/changePassword";
import "../../ui/pages/users/forgotpassword";
import "../../ui/pages/users/resetpassword";

FlowRouter.triggers.enter([trackRouteEntry], {
  except: ["App.login", "App.form", "App.users"],
});
FlowRouter.triggers.enter([trackRouteNotEntry], {
  only: ["App.login", "App.form"],
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
FlowRouter.route("/form", {
  name: "App.form",
  action() {
    BlazeLayout.render("mainLayout", {
      login: "form",
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
FlowRouter.route("/users", {
  name: "App.users",
  action() {
    BlazeLayout.render("mainLayout", {
      login: "users",
    });
  },
});
FlowRouter.route("/changepassword", {
  name: "App.changePassword",
  action() {
    BlazeLayout.render("mainLayout", {
      main: "changePassword",
    });
  },
});
FlowRouter.route("/forgotpassword", {
  name: "App.forgotpassword",
  action() {
    BlazeLayout.render("mainLayout", {
      login: "forgotpassword",
    });
  },
});
FlowRouter.route("/reset-password/:_link", {
  name: "App.resetpassword",
  action() {
    BlazeLayout.render("mainLayout", {
      login: "resetpassword",
    });
  },
});

FlowRouter.route("*", {
  name: "notFound",
  action() {
    BlazeLayout.render("mainLayout", {
      main: "notFound",
      login: "notFound",
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
