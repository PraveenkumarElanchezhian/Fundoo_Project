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
    // getsNote(){
    //     // console.log(headerConfig.headers);
    //     return service.getsMethod(`${baseUrl}/notes/getNotesList`,{},headerConfig);
    // }

    changeColor(data){
        return service.postMethod(`${baseUrl}/notes/changesColorNotes`,data,headerConfig)
      }

    updateNotes(data){
        return service.postMethod(`${baseUrl}/notes/updateNotes`,data,headerConfig)
    }
    ArchiveNotes(data){
        return service.getMethod(`${baseUrl}/notes/getArchiveNotesList`,data,headerConfig)
    }  

    updateArchive(data){
        return service.postMethod(`${baseUrl}/notes/archiveNotes`,data,headerConfig)
      }

    deleteNote(data){
        return service.postMethod(`${baseUrl}/notes/trashNotes`,data,headerConfig)
    }
}

export default NotesService;
