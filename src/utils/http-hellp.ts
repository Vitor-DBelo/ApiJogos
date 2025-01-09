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

export const badRequest = async ():Promise<HttpResponse> => {
    return{
        StatusCode: 400,
        body: null,
    }
}

export const created = async ():Promise<HttpResponse> =>{
    return{
        StatusCode: 201,
        body: {mesage: 'successFul' },
    }
};