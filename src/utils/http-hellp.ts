import { HttpResponse } from "../contracts/http-response-model";

export const ok = async (data:any):Promise<HttpResponse> =>{
    return {
        StatusCode:200,
        body: data
    }
}

export const noContent = async ():Promise<HttpResponse>=>{
    return{
        StatusCode: 204,
        body: null,
    }
};