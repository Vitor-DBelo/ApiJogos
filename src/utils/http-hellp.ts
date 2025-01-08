interface HttpResponse{
    StatusCode: number;
    body: any;
}

export const ok = async (data:any):Promise<HttpResponse> =>{
    return {
        StatusCode:200,
        body: data
    }
}