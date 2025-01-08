import express from "express"
import { getGame } from "./controllers/games-controller";


function createApp(){
    const app = express();
    app.use(express.json());
    
    app.get('/' , getGame);
    
    return app;
}
export default createApp;