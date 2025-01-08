import {Router} from "express";
import { getGame } from "./controllers/games-controller";

const router = Router();

router.get('/game', getGame);

export default  router;