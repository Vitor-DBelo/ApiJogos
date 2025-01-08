import {Request,Response} from "express"

export const getGame = (req: Request, res: Response) => {
    res.status(200).json({id: 21});
}