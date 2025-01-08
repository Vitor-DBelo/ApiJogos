//import express,{Request,Response} from "express"
import createApp from "./app";

const app = createApp()
const port = process.env.PORT;


app.listen(port, ()=>{
    console.log('server run http://localhost:' + port)
});