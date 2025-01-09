import {Request,Response} from "express"
import { getGameServices } from "../services/game-services";


export const getGame = async (req: Request, res: Response) => {
    const httpResponse = await getGameServices ();
 
    res.status(httpResponse.StatusCode).json(httpResponse.body);
}