import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import './Recovery.css'
export class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             EmailorPhone:'',
             EmailorPhoneError:false,
        }
    }
    
    changeHandle =(e) =>{
        console.log(e);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    next =() =>{
        var validated = this.validated();
        if(validated){
            console.log("success");
        }
    }

    validated =() =>{
        let isError =  false;
        const error = this.state;
        error.EmailorPhoneError = this.state.EmailorPhone === ''? true : false;

        this.setState({
            ...error
        })

        return isError = error.EmailorPhoneError ;
    }

    render() {
        return (
            <div className='recovery'>

                <div className='recovery-container'>

                    <div className='Header'>
                        <h2 className='color1'>F</h2>
                        <h2 className='color2'>u</h2>
                        <h2 className='color3'>n</h2>
                        <h2 className='color4'>d</h2>
                        <h2 className='color5'>o</h2>
                        <h2 className='color6'>o</h2>
                    </div>

                    <div className='title-container'>
                        <h2 className='title_1'>Find your email</h2>
                        <p className='title_2'>Enter your phone number or recovery email</p>
                    </div>

                    <div className='field_row'>
                        <div className='field_cloumn'>
                            <TextField name='EmailorPhone' id="outlined-basic" label="Phone number or email" variant="outlined" error={this.state.EmailorPhoneError} helperText={this.state.EmailorPhoneError ? "Enter a valid email or phone number" : " "} fullWidth onChange={(e)=>this.changeHandle(e)} />
                        </div>
                    </div>
                    <div className='footer'>
                        <button className='next' onClick={this.next}>Next</button>
                    </div>

                </div>

            </div >

        )
    }
}

export default Login
