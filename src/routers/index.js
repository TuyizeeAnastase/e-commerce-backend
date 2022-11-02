import express from "express";
import userRouters from "./user.route";

const routes = express();

routes.get("/", (req, res) => {
  res.status(200).json({
    message: "This is SBG BACKEND",
  });
});

routes.use("/api/v1/users", userRouters);

routes.get("*", (req, res) => {
  res.status(404).json({
    message: "Page not found, try again",
  });
});

export default routes;
