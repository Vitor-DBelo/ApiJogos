import {Router} from "express";
import * as GameController from "./controllers/games-controller";

const router = Router();

router.get('/game', GameController.getGame);
router.get('/game/:id', GameController.getGameById);

router.post('/game', GameController.postGame);
router.delete('/game/delete/:id', GameController.deleteGame);

router.patch('/game/atuaz/:id', GameController.updateGame)

export default  router;

