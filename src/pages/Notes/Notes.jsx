import React, { Component } from 'react';
import NotesService from '../../service/NotesService';
import TakenNotes from '../../component/TakenNotes/TakenNotes';
import DisplayNotes from '../../component/DisplayNotes/DisplayNotes';

const noteservice = new NotesService();

export class Notes extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      AddingNotes : []
    }
  }

  componentDidMount(){
    this.getNotes();
  }

  getNotes =()=>{
    noteservice.getsNote()
    .then((res)=>{
      this.setState({
        AddingNotes:res.data.data.data,
      })
      console.log(this.state.AddingNotes);
    })
    .catch((err)=>{
    
    })
  }
  
  render() {
    return( 
    <div> 


        <TakenNotes getnotes= {this.getNotes}/>
        <DisplayNotes AddingValues={this.state.AddingNotes}/>
    </div>
    )
  }
}

export default Notes;
