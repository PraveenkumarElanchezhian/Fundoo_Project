import AxiosService from "./AxiosService";

const service = new AxiosService();
const baseUrl = "http://fundoonotes.incubation.bridgelabz.com/api";

let headerConfig={
    headers: {
        Authorization: localStorage.getItem('token')
    }
}

class NotesService {
    addNote(data){
        return service.postMethod(`${baseUrl}/notes/addNotes`,data,headerConfig);
    }
    getsNote(){
        return service.getsMethod(`${baseUrl}/notes/getNotesList?access_token=`+headerConfig.headers.Authorization);
    }
    // getNote(){
    //     // console.log(headerConfig.headers);
    //     return service.getMethod(`${baseUrl}/notes/getNotesList`,{},headerConfig);
    // }
}

export default NotesService;
