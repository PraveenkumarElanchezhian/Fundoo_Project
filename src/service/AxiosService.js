import axios from 'axios';

class AxiosService {
    postMethod(url,data){
        return axios.post(url,data)
    } 
    getMethod(url,data){
        return axios.get(url,data)
    }
    // patchMethod(url,data){
    //     return axios.patch(url.data)
    // } 
    deleteMethod(url,data){
        return axios.delete(url,data)
    }  
}
export default AxiosService