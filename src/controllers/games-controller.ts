import {Request,Response} from "express"
import { getGameServices } from "../services/game-services";
import { ok } from "../utils/http-hellp";

export const getGame = async (req: Request, res: Response) => {
    const resServices = await getGameServices ();
    const response = await ok(resServices)

    res.status(response.StatusCode).json(response.body);
}