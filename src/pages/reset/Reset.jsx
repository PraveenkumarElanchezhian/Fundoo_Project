import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import './Reset.scss'
import { Link } from 'react-router-dom';
import UserService from '../../service/UserService';

const service = new UserService();

export class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             reset:'',
             confirm:'',
             resetError:false,
             confirmError:false
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
        if(!validated){
            console.log("success");
            let data = {
                "reset": this.state.reset,
                "confirm": this.state.confirm,
              }

              service.Recovery(data)
              .then(res=>{
                  console.log(res);
              })
              .catch(err=>{
                  console.log(err);
              })
        }
    }

    validated =() =>{
        let isError =  false;
        const error = this.state;
        error.resetError = this.state.reset === ''? true : false;
        error.confirmError = this.state.confirm === ''? true : false;

        this.setState({
            ...error
        })

        return isError = error.resetError || error.confirmError;
    }

    render() {
        return (
            <div className='reset'>

                <div className='reset-container'>

                    <div className='Header'>
                        <h2 className='color1'>F</h2>
                        <h2 className='color2'>u</h2>
                        <h2 className='color3'>n</h2>
                        <h2 className='color4'>d</h2>
                        <h2 className='color5'>o</h2>
                        <h2 className='color6'>o</h2>
                    </div>

                    <div className='title-conten'>
                        <h2 className='title-content-1'>Find your email</h2>
                        <p className='title-content-2'>Enter your password</p>
                    </div>

                    <div className='field-row'>
                        <div className='field-cloumn'>
                            <TextField name='reset' id="outlined-basic" label="Reset password" variant="outlined" fullWidth error={this.state.resetError} helperText={this.state.resetError ? "Enter a reset password" : " "} onChange={(e)=>this.changeHandle(e)}/>
                        </div>
                        <div className='field-cloumn'>
                            <TextField name='confirm' id="outlined-basic" label="confirm password" variant="outlined" fullWidth error={this.state.confirmError} helperText={this.state.confirmError ? "Enter a confirm password" : " "} onChange={(e)=>this.changeHandle(e)}/>
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
