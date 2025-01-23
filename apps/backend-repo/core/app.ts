import express,{Request,Response,NextFunction} from "express";
import userRoutes from "../routes/userRoutes";
import cors from "cors";

export class App {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.configureCors();
    this.configureMiddleware();
    this.configureRoutes();
  }

  private configureMiddleware() {
    this.app.use(express.json());
  }
  private configureCors() {
    this.app.use(
      cors({
        origin: "http://localhost:3000", 
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], 
        allowedHeaders: ["Content-Type", "Authorization"], 
      })
    );
    
    this.app.options("*", (req: Request, res: Response) => {
      res.header("Access-Control-Allow-Origin", "http://localhost:3000");
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
      res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
      res.sendStatus(204); 
    });
  }


  private configureRoutes() {
    this.app.use("/api", userRoutes);
  }

  public listen(port: number) {
    this.app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
}
