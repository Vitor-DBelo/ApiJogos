import {Request,Response} from "express"
import * as services from "../services/game-services";


export const getGame = async (req: Request, res: Response) => {
    const httpResponse = await services.getGameServices ();
 
    res.status(httpResponse.StatusCode).json(httpResponse.body);
}

export const getGameById= async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const  httpResponse = await services.getGameByIdServices(id);
    res.status(httpResponse.StatusCode).json(httpResponse.body);
};
