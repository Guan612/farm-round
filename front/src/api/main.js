import request from "@/utils/request";

export const tooggleLed = (data)=>{
    return request({
        url: '/led',
        method: 'post',
        status: data
    })
}

export const getTemp = ()=>{
    return request({
        url: '/temp',
        method: 'get',
    })
}