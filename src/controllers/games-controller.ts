import {Request,Response} from "express"
import * as services from "../services/game-services";
import * as httpHellp  from "../utils/http-hellp";
import { DLC } from "../contracts/game-model";


export const getGame = async (req: Request, res: Response) => {
    const httpResponse = await services.getGameServices ();
 
    res.status(httpResponse.StatusCode).json(httpResponse.body);
}

export const getGameById= async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const  httpResponse = await services.getGameByIdServices(id);
    res.status(httpResponse.StatusCode).json(httpResponse.body);
};

export const postGame = async (req:Request, res:Response) => {
    const bodyValue = req.body;
    const httpResponse = await services.createGameServices(bodyValue);
    if(httpResponse){
        res.status(httpResponse.StatusCode).json(httpResponse.body);
    }else{
        const response = await httpHellp.badRequest();
        res.status(response.StatusCode).json(response.body);
    }
  
};

export const deleteGame = async (req:Request, res:Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await services.deleteGameServeces(id);
    res.status(httpResponse.StatusCode).json(httpResponse.body);
}

export const updateGame = async (req:Request, res:Response) =>{
    const id = parseInt(req.params.id);
    const bodyValue:DLC = req.body;
    const httpResponse = await services.updateGameServeces(id, bodyValue);
    res.status(httpResponse.StatusCode).json(httpResponse.body);
};