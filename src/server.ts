import "reflect-metadata";
import express from "express";
import "./database";

import "./shared/container";
import swaggerUi from "swagger-ui-express";

import { categoriesRoutes } from "./routes/categories.routes";
import { specificationsRoutes } from "./routes/specifications.routes";
import swagerFile from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagerFile));

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRoutes);

app.listen(3333, () => {
  console.log("Server is running!");
});
