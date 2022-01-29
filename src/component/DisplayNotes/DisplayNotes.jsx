import React, { Component } from 'react';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import './DisplayNotes.scss';

// 
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Icons from '../Icons/Icons';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
        width: theme.spacing(80)
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
        width: theme.spacing(100)
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    {/* <CloseIcon /> */}
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

// 

export class DisplayNotes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            title: this.props.AddingValues.title,
            description: this.props.AddingValues.description
        };
    }
    handleOpenTitle = (item) => {
        this.setState({
            open: true,
            title: item.title,
            description: item.description
        })
        console.log(this.state.title)
    }

    handleClose = () => {
        this.setState({
            open: false,
        })
    }

    howerTitleDesc = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }

    render() {
        console.log(this.props.AddingValues)
        return (
            <div className='display-body'>
                {this.props.AddingValues.map((item, index) => (
                    <div className='display-container' onClick={() => this.handleOpenTitle(item)} style={{ backgroundColor: item.color }}>
                        <div className='content-display'>
                            {item.title}
                        </div>
                        <div className='content-display'>
                            {item.description}
                        </div>
                        <div className='iconsStyle'>
                            <div className='icon-lists'>
                                <IconButton color="inherit" > <AddAlertOutlinedIcon /> </IconButton>
                                <IconButton color="inherit"> <PersonAddAlt1OutlinedIcon /> </IconButton>
                                <IconButton color="inherit"> <ColorLensOutlinedIcon /> </IconButton>
                                <IconButton color="inherit"> <ImageOutlinedIcon /> </IconButton>
                                <IconButton color="inherit"> <ArchiveOutlinedIcon /> </IconButton>
                                <IconButton color="inherit"> <MoreVertOutlinedIcon /> </IconButton>
                            </div>
                        </div>
                    </div>
                ))}

                <BootstrapDialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.open}>
                    <div style={{ width: "100%", overflow: "hidden" }}>
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={this.handleClose} >
                            <div className='hower-title'>
                                <input type="text" style={{ border: "none", outline: "none" }} value={this.state.title} name="title" onChange={(e) => this.howerTitleDesc(e)} />
                            </div>
                        </BootstrapDialogTitle>
                        <DialogContent>
                            <div className='hower-desp'>
                                <input type="text" style={{ border: "none", outline: "none" }} value={this.state.description} name="description" onChange={(e) => this.howerTitleDesc(e)} />
                            </div>
                        </DialogContent>
                        <DialogContent className="close-Icon" >
                            <Icons mode="update"/>
                            <button autoFocus onClick={(title, description) => this.handleClose(title, description)}> Close</button>
                        </DialogContent>
                    </div>
                </BootstrapDialog>
            </div>
        )
    }
}




export default DisplayNotes
