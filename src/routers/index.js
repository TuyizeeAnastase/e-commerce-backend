import express from "express";
import userRouters from "./user.route";
import productRouters from "./product.route";
import shopsRouters from "./shops.routers";
import cartRouters from "./cart.routers";
import bookingRouters from "./booking.routers";
import serviceRouters from "./service.route";
import orderRouters from "./order.routers"

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
routes.use("/api/v1/booking", bookingRouters);
routes.use("/api/v1/services", serviceRouters);
routes.use("/api/v1/order",orderRouters)

routes.get("*", (req, res) => {
  res.status(404).json({
    message: "Page not found, try again",
  });
});

export default routes;
