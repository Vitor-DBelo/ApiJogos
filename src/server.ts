import express,{Request,Response} from "express"

const app = express()

app.get('/' ,(req: Request, res: Response) => {
    console.log('fala pai');
});

app.listen(5557)