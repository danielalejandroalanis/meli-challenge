import express, { Application } from "express";
import cors from "cors";
import itemRoutes from "../routes/items";
import categoriesRoutes from "../routes/categories";
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from "../config/swagger";

class Server {
  private app: Application;
  private port: string | number;
  private itemPath: string;
  private categoriesPath: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;
    this.itemPath = "/api/items";
    this.categoriesPath = "/api/categories";
    this.middlewares();
    this.routes();
    this.setupSwagger();
  }

  private middlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use(this.itemPath, itemRoutes);
    this.app.use(this.categoriesPath, categoriesRoutes);
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Servidor ejecutando en puerto ${this.port}`);
    });
  }

  private setupSwagger(): void {
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  }
}

export default Server;
