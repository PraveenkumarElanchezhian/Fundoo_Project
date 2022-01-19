import React, { Component } from 'react';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
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
                                <CheckBoxOutlinedIcon />
                                <BrushOutlinedIcon />
                                <ImageOutlinedIcon />
                            </div>

                        </div>
                        :
                        <div className='take-container'>
                            <input type="text" name="" id="" placeholder='Text' />
                            <input type="text" name="" id="" placeholder='Take a notes...' />
                            <div className='icons'>
                                <div className='icon-list'>
                                    <AddAlertOutlinedIcon />
                                    <PersonAddAlt1OutlinedIcon />
                                    <ColorLensOutlinedIcon />
                                    <ImageOutlinedIcon />
                                    <ArchiveOutlinedIcon />
                                    <MoreVertOutlinedIcon />
                                </div>
                                <div>
                                    <button onClick={this.handleClose}>close</button>
                                </div>

                            </div>

                        </div>
                }
            </div>
        )
    }
}

export default TakenNotes
