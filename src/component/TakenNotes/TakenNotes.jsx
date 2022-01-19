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

export class TakenNotes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: true
        }
    }

    handleOpen = () => {
        this.setState({
            open: false
        })
    }

    handleClose = () => {
        this.setState({
            open: true
        })
    }

    render() {
        return (
            <div className='body'>
                {
                    this.state.open ?
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
                            <input type="text" name="" id="" placeholder='Title' />
                            <input type="text" name="" id="" placeholder='Take a notes...' />
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
