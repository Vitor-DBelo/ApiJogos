import {Router} from "express";
import * as GameController from "./controllers/games-controller";

const router = Router();

router.get('/game', GameController.getGame);
router.get('/game/:id', GameController.getGameById);

export default  router;