import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import './Login.scss'
import { Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserService from '../../service/UserService';
const service = new UserService();

export class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:'',
             emailError:false,
             passwordError:false
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

            let data ={
                "email": this.state.email,
                "password": this.state.password,
            }
            service.Login(data)
              .then(res=>{
                  console.log(res);
                  localStorage.setItem('token',res.data.id)
              })
              .catch(err=>{
                  console.log(err);
              })

        }
    }

    validated =() =>{
        let isError =  false;
        const error = this.state;
        error.emailError = this.state.email === ''? true : false;
        error.passwordError = this.state.password === ''? true : false;

        this.setState({
            ...error
        })

        return isError = error.emailError || error.passwordError;
    }

    render() {
        console.log(this.state);
        return (
            <div className='login-page'>

                <div className='login-page-container'>

                    <div className='Header-content'>
                        <h2 className='color1'>F</h2>
                        <h2 className='color2'>u</h2>
                        <h2 className='color3'>n</h2>
                        <h2 className='color4'>d</h2>
                        <h2 className='color5'>o</h2>
                        <h2 className='color6'>o</h2>
                    </div>

                    <div className='title-content'>
                        <h2 className='title1'>Sign in</h2>
                        <p className='title2'>to continue to fundoo</p>
                    </div>

                    <div className='fieldrow'>
                        <div className='fieldcloumn'>
                            <TextField name='email' id="outlined-basic" label="Email or phone" variant="outlined" error={this.state.emailError} helperText={this.state.emailError ? "Enter an email or phone number" : " "} fullWidth onChange={(e)=>this.changeHandle(e)}/>
                            <Link className='button-cont' to="/reset">Forgot email?</Link>
                        </div>

                        <div className='fieldcloumn'>
                            <TextField name='password' id="outlined-basic" label="Password" variant="outlined" error={this.state.passwordError} helperText={this.state.passwordError ? "Enter an password" : " "} fullWidth onChange={(e)=>this.changeHandle(e)}/>
                            <Link className='button-cont' to="/reset-password">Forgot password?</Link>
                        </div>
                    </div>

                    <div className='paragraph'>
                        <p className='para'>Not your computer? Use Guest mode to sign in privately.</p>
                        <p className='button-cont'>Learn more</p> 
                    </div>

                    <div className='footer-content'>
                    <Link className='Create-account' to="/userSignUp">Create account</Link>
                        {/* <p className='Create-account'>Create account</p> */}
                        <button className='next' onClick={(event) => this.next(event)}>Next</button>
                    </div>

                </div>

            </div >

        )
    }
}

export default Login
