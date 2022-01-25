import React, { Component } from 'react';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import IconButton from '@mui/material/IconButton';
import './TakenNotes.scss';
import NotesService from '../../service/NotesService';
import DisplayNotes from '../DisplayNotes/DisplayNotes';
const notesservice = new NotesService();

export class TakenNotes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            openNote: true,
            title:'',
            description:'',
        }
    }

    changeHandle=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOpen=()=>{
        this.setState({
            openNote: false,
        })
    }

    handleClose=()=>{
        let data ={
            "title": this.state.title,
            "description": this.state.description,
        }
    
        notesservice.addNote(data)
        .then(res=>{
           console.log(res);
           this.props.getnotes();
           this.setState({
            openNote: true,
            })
       }) 
        .catch(err=>{
            console.log(err);
        })
    }

    render() {
        return (
            <div className='body'>
                {
                    this.state.openNote ?
                        <div className='note-container'>
                            <input type="text" name="" id="" placeholder='Take a notes...' onClick={this.handleOpen} />
                            <div className='icons'>
                            <IconButton color="inherit"> <CheckBoxOutlinedIcon/> </IconButton>
                            <IconButton color="inherit"> <BrushOutlinedIcon/> </IconButton>
                            <IconButton color="inherit"> <ImageOutlinedIcon/> </IconButton>
                            </div>

                        </div>
                    :
                        <div className='take-container'>
                            <input type="text" name="title" id="" placeholder='Title' onChange={(e)=>this.changeHandle(e)}/>
                            <input type="text" name="description" id="" placeholder='Take a notes...' onChange={(e)=>this.changeHandle(e)}/>
                            <div className='icons'>
                                <div className='icon-list'>
                                <IconButton color="inherit"> <AddAlertOutlinedIcon /> </IconButton>
                                <IconButton color="inherit"> <PersonAddAlt1OutlinedIcon /> </IconButton>
                                <IconButton color="inherit"> <ColorLensOutlinedIcon /> </IconButton>
                                <IconButton color="inherit"> <ImageOutlinedIcon /> </IconButton>
                                <IconButton color="inherit"> <ArchiveOutlinedIcon /> </IconButton>
                                <IconButton color="inherit"> <MoreVertOutlinedIcon /> </IconButton>
                                </div>
                                <div className='button-content'>
                                    <button onClick={this.handleClose} className='button'>Close</button>
                                </div>

                            </div>

                        </div>
                }
            </div>
        )
    }
}

export default TakenNotes
