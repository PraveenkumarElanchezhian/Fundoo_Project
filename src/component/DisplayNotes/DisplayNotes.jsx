import React, { Component } from 'react'

import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import IconButton from '@mui/material/IconButton';
import './DisplayNotes.scss'

export class DisplayNotes extends Component {
    constructor(props) {
      super(props)
      this.state = {
        //  data: props
      }
    }
    
    render() {
        console.log(this.props.AddingValues)
        return (
            // <div>
            // { this.props.AddingValues.map((item,index)=>{
            //     console.log(item);
            // <div className='display-body'>
            //     <div className='display-container'>

            //         <input type="text" name="" id="" placeholder='Title' />
            //         <input type="text" name="" id="" placeholder='Take a notes...' /> 
            //         <div className='icons'>
            //             <div className='icon-list'>
            //                 <IconButton color="inherit"> <AddAlertOutlinedIcon /> </IconButton>
            //                 <IconButton color="inherit"> <PersonAddAlt1OutlinedIcon /> </IconButton>
            //                 <IconButton color="inherit"> <ColorLensOutlinedIcon /> </IconButton>
            //                 <IconButton color="inherit"> <ImageOutlinedIcon /> </IconButton>
            //                 <IconButton color="inherit"> <ArchiveOutlinedIcon /> </IconButton>
            //                 <IconButton color="inherit"> <MoreVertOutlinedIcon /> </IconButton>
            //                 </div>
            //             </div>
            //         </div>
            // </div>
         
            //  })
            // }
            // </div>

            <div className='display-body'>
                { this.props.AddingValues.map((item,index)=>(
                <div className='display-container'>
                    <div>
                        {item.title} <br/>
                        {item.description}
                    </div>
                    {/* <input type="text" name="" id="" placeholder='Title' />
                    <input type="text" name="" id="" placeholder='Take a notes...' /> */}
                    {/* <div className='icons'>
                        <div className='icon-list'>
                            <IconButton color="inherit"> <AddAlertOutlinedIcon /> </IconButton>
                            <IconButton color="inherit"> <PersonAddAlt1OutlinedIcon /> </IconButton>
                            <IconButton color="inherit"> <ColorLensOutlinedIcon /> </IconButton>
                            <IconButton color="inherit"> <ImageOutlinedIcon /> </IconButton>
                            <IconButton color="inherit"> <ArchiveOutlinedIcon /> </IconButton>
                            <IconButton color="inherit"> <MoreVertOutlinedIcon /> </IconButton>
                            </div>
                        </div> */}
                    </div>
                ))}
            </div>
        
        )
   
    }
}

export default DisplayNotes
