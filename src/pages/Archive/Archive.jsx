import React, { Component } from 'react';
import DisplayNotes from '../../component/DisplayNotes/DisplayNotes';
import NotesService from '../../service/NotesService';
const noteservice = new NotesService();
export class Archive extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
          AddingNotes : []
        }
      }
    
      componentDidMount(){
        this.ArchiveNotes();
      }
    
      getNotes =()=>{
        noteservice.ArchiveNotes()
        .then((res)=>{
          this.setState({
            AddingNotes:res.data.data.data,
          })
        })
        .catch((err)=>{
        console.log(err);
        })
      }
  render() {
    return <div>
        <DisplayNotes AddingValues={this.state.AddingNotes}/>
    </div>;
  }
}

export default Archive;
