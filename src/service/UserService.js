import AxiosService from "./AxiosService";

const axiosservice = new AxiosService();
const baseUrl = "http://fundoonotes.incubation.bridgelabz.com/api";

const url = window.location.href.toString().split('/resetpassword');

let header={
    headers: {
        Authorization: localStorage.getItem("token")
    }
}

class UserService {
    Registration(data){
        return axiosservice.postMethod(`${baseUrl}/user/userSignUp`,data);
    }
    Login(data){
        return axiosservice.postMethod(`${baseUrl}/user/login`,data);
    }
    Recovery(data){
        return axiosservice.postMethod(`${baseUrl}/user/reset`,data);
    }
    Reset(data){
        return axiosservice.postMethod(`${baseUrl}/user/reset-password`,data,header);
    }
}

export default UserService;