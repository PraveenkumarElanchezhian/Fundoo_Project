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
import NotesService from '../../service/NotesService';
const notesservice = new NotesService();
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
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};


export class DisplayNotes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            title: this.props.AddingValues.title,
            description: this.props.AddingValues.description,
            noteId: this.props.AddingValues.id,
            color:this.props.AddingValues.color,
            archive:false,
            delete:false
        };
    }


    handleOpenTitle = (item) => {
        this.setState({
            open: true,
            title: item.title,
            description: item.description,
            noteId: item.id,
            archive:false,
            delete:item.isDeleted,
            color:item.color
        })
        console.log(item.color);
    }

    handleClose = () => {
        let data = {
            "noteId": this.state.noteId,
            "title": this.state.title,
            "description": this.state.description,
        }
        console.log(data);
        notesservice.updateNotes(data)
            .then(res => {
                console.log('success');
                this.props.getnotes();
                this.setState({
                open: false,
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    howerTitleDesc = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    changeColor = (val) => {
        this.setState({
            color: val,
            noteId: this.state.noteId
        })
    }

    updateArchive = (val) => {
        this.setState({
            checkArchive: val,
            open:false
        })
    }

    deletenote=(val)=>{
        this.setState({
            checkArchive: val,
            open:false
        })
    }

    render() {
        console.log(this.props.AddingValues)
        return (
            <div className='display-body'>
                {this.props.AddingValues.map((item, index) => (
                    <div className='display-container' style={{ backgroundColor: item.color }}>

                        <div onClick={() => this.handleOpenTitle(item)}>
                            <div className='content-display'>
                                {item.title}
                            </div>
                            <div className='content-display'>
                                {item.description}
                            </div>
                        </div>
                        <Icons mode="update" noteId={item.id} changeColor={this.changeColor} updateArchive={this.updateArchive} deletenote={this.deleteNote}/>

                        {/* <div className='iconsStyle'>
                            <div className='icon-lists'>
                                <IconButton color="inherit" > <AddAlertOutlinedIcon /> </IconButton>
                                <IconButton color="inherit"> <PersonAddAlt1OutlinedIcon /> </IconButton>
                                <IconButton color="inherit"> <ColorLensOutlinedIcon /> </IconButton>
                                <IconButton color="inherit"> <ImageOutlinedIcon /> </IconButton>
                                <IconButton color="inherit"> <ArchiveOutlinedIcon /> </IconButton>
                                <IconButton color="inherit"> <MoreVertOutlinedIcon /> </IconButton>
                            </div>
                        </div> */}
                    </div>
                ))}

                <BootstrapDialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.open} >
                    <div style={{ width: "100%", overflow: "hidden" }} style={{ backgroundColor: this.state.color }}>
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={this.handleClose} >
                            <div className='hower-title'>
                                <input type="text" style={{ border: "none", outline: "none", backgroundColor: this.state.color }} value={this.state.title} name="title" onChange={(e) => this.howerTitleDesc(e)} />
                                <input type="text" style={{ border: "none", outline: "none", visibility: "hidden" }} value={this.state.noteId} name="noteId" />
                            </div>
                        </BootstrapDialogTitle>
                        <DialogContent>
                            <div className='hower-desp'>
                                <input type="text" style={{ border: "none", outline: "none", backgroundColor: this.state.color }} value={this.state.description} name="description" onChange={(e) => this.howerTitleDesc(e)} />
                            </div>
                        </DialogContent>
                        <DialogContent className="close-Icon" >
                            <Icons mode="update" changeColor={this.changeColor} deletenote={this.deleteNote} updateArchive={this.updateArchive} getnotes= {this.getNotes} noteId={this.state.noteId}/>
                            <button autoFocus onClick={(title, description) => this.handleClose(title, description)} changeColor={this.changeColor}> Close</button>
                        </DialogContent>
                    </div>
                </BootstrapDialog>
            </div>
        )
    }
}




export default DisplayNotes
