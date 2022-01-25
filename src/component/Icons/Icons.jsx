import React, { Component } from 'react'
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import '../Icons/Icons.scss'

//poper
import MenuItem from '@material-ui/core/MenuItem';
import { Popover } from '@material-ui/core';
import Colors from '../color/Color';

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

    render() {
        //popover
        const { anchorEl, color } = this.state

        return (
            <div className='iconss'>
                <AddAlertOutlinedIcon />
                <PersonAddAltOutlinedIcon />
                <div>
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
                        <Colors />
                    </Popover>
                </div>

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