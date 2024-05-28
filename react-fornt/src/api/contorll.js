import http from './index';

export function switchLed(data){
    return http.post('/led',data);
}

export function getTemp(){
    return http.get('/temp');
}