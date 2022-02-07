import React, { Component } from 'react'
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import '../Icons/Icons.scss'
import NotesService from '../../service/NotesService';

//poper
import MenuItem from '@material-ui/core/MenuItem';
import { Popover } from '@material-ui/core';
import Colors from '../color/Color';

const notesService = new NotesService();

let colorsArray = [
    "#f28b82", "#fbbc04", "#fff475", "#ccff90",
    "#a7ffeb", "#cbf0f8", "#aecbfa", "#d7aefb",
    "#fdcfe8", "#e6c9a8", "#e8eaed", "#aecbfa"
]


export class Icons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            anchorEl: false,
            color: false
        }
    }

    //popover
    handleClick = event => this.setState({ anchorEl: event.currentTarget })
    handleClose = () => this.setState({ anchorEl: false })

    colorOpen = (e) => {
        this.setState({
            color: e.currentTarget
        })
    }

    colorClose = () => {
        this.setState({
            color: false
        })
    }

    color = (clr) => {
        if (this.props.mode === "create") {
            this.props.changeColor(clr);
        }
        else {
            let data = {
                "noteIdList": [this.props.noteId],
                "color": clr
            }
            notesService.changeColor(data)
                .then(res => {
                    this.props.changeColor(clr);
                    this.props.getNotes()
                })
                .catch(err => {
                    console.log(err)
                })
        }

    }

    checkArchive = () => {

        if(this.mode === "create"){
        }
        else{
            let data ={
                "noteIdList":[this.props.noteId],
                "isArchived": true
            }
            notesService.updateArchive(data)
            .then(res =>{
                console.log(res)
                this.props.getNotes()
            })
            .catch(err =>{
                console.log(err)
            })
        }
  }

  deletenote=()=>{
    let data ={
        "noteIdList":[this.props.noteId],
        "isDeleted": true
    }
    notesService.deleteNote(data)
    .then(res =>{
        console.log(res)
        this.props.getNotes() 
    })
    .catch(err =>{
        console.log(err)
    })
  }

    render() {
        //popover
        const { anchorEl, color } = this.state

        return (
            <div className='icons-style'>
                <div className='icons-1'>
                    <AddAlertOutlinedIcon />
                    <PersonAddAltOutlinedIcon />
                    <div className='icons-2'>
                        <ColorLensOutlinedIcon onClick={(e) => this.colorOpen(e)} />
                        <Popover
                            id="simple-menu"
                            anchorEl={color}
                            keepMounted
                            open={Boolean(color)}
                            onClose={this.colorClose}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left"
                            }}
                        >

                            {
                                colorsArray.map((item, index) => (
                                     <div className="colorPallets" onClick={() => this.color(item)}
                                        style={{ backgroundColor: item }}>
                                        {item.backgroundColor}
                                    </div>
                                ))
                            }
                        </Popover>
                    </div>

                    <PhotoOutlinedIcon />
                    <ArchiveOutlinedIcon onClick={(e) => this.checkArchive(e)}/>

                    <div className='icons-3'>
                        <MoreVertOutlinedIcon onClick={this.handleClick} />
                        <Popover
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={this.handleClose}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left"
                            }}
                        >
                            <MenuItem onClick={this.deletenote}>Delete note</MenuItem>
                            <MenuItem onClick={this.handleClose}>Add label</MenuItem>
                            <MenuItem onClick={this.handleClose}>Add drawing</MenuItem>
                            <MenuItem onClick={this.handleClose}>Make a copy</MenuItem>
                            <MenuItem onClick={this.handleClose}>Show tick boxes</MenuItem>
                        </Popover>
                    </div>
                </div>
            </div>
        )
    }
}

export default Icons