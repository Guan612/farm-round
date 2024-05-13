import request from "@/utils/request";

export default{
    tooggleLed(data){
        return request({
            url: '/light',
            method: 'get',
            status:data
        })
    }
}