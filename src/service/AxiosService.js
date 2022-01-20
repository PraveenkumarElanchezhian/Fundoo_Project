import axios from 'axios';

class AxiosService {
    postMethod(url, data, headers = false){
        return axios.post(url,data,headers)
    } 
    getMethod(url, headers = false){
        return axios.get(url,headers)
    }
    getsMethod(url, headers = false){
        return axios.get(url)
    }
    // patchMethod(url,data){
    //     return axios.patch(url.data)
    // } 
    deleteMethod(url, data, headers = false){
        return axios.delete(url,data,headers)
    }  
}
export default AxiosService