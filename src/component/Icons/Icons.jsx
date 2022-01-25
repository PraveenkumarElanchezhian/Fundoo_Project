import React, { Component } from 'react'
import '../Icons/Icons.scss'
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';

//poper
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Popover } from '@material-ui/core';

export class Icons extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // popover
            anchorEl: null
            // setAnchorEl:null
        }
    }

    //popover
    handleClick = event => this.setState({ anchorEl: event.currentTarget })
    handleClose = () => this.setState({ anchorEl: null })

    render() {
        //popover
        const { anchorEl } = this.state

        return (
            <div className='iconss'>
                <AddAlertOutlinedIcon />
                <PersonAddAltOutlinedIcon />
                <ColorLensOutlinedIcon />
                <PhotoOutlinedIcon />
                <ArchiveOutlinedIcon />
                <div>
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
                        <MenuItem onClick={this.handleClose}>Delete note</MenuItem>
                        <MenuItem onClick={this.handleClose}>Add label</MenuItem>
                        <MenuItem onClick={this.handleClose}>Add drawing</MenuItem>
                        <MenuItem onClick={this.handleClose}>Make a copy</MenuItem>
                        <MenuItem onClick={this.handleClose}>Show tick boxes</MenuItem>
                    </Popover>
                </div>
            </div>
        )
    }
}

export default Icons