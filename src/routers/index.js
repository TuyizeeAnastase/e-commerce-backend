import express from "express";
import userRouters from "./user.route.js";
import productRouters from "./product.route.js";
import shopsRouters from "./shops.routers.js";
import cartRouters from "./cart.routers.js";

const routes = express();

routes.get("/", (req, res) => {
  res.status(200).json({
    message: "This is SBG BACKEND",
  });
});

routes.use("/api/v1/users", userRouters);
routes.use("/api/v1/products", productRouters);
routes.use("/api/v1/shops", shopsRouters);
routes.use("/api/v1/cart", cartRouters);

routes.get("*", (req, res) => {
  res.status(404).json({
    message: "Page not found, try again",
  });
});

export default routes;
