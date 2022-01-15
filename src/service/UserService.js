import AxiosService from "./AxiosService";

const axiosservice = new AxiosService();
const baseUrl = "http://fundoonotes.incubation.bridgelabz.com/api";

class UserService {
    Registration(data){
        axiosservice.postMethod(`${baseUrl}/user/userSignUp`,data);
    }
    Login(data){
        axiosservice.postMethod(`${baseUrl}/user/login`,data);
    }
}

export default UserService;