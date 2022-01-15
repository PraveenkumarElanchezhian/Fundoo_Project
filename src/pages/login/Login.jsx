import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import './Login.scss'
import { Router } from 'react-router-dom';

export class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             EmailorPhone:'',
             password:'',
             EmailorPhoneError:false,
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
        if(validated){
            console.log("success");
            // Router.push("/Create account");
            // <Link to="/Create account">Create account</Link>
        }
    }

    validated =() =>{
        let isError =  false;
        const error = this.state;
        error.EmailorPhoneError = this.state.EmailorPhone === ''? true : false;
        error.passwordError = this.state.password === ''? true : false;

        this.setState({
            ...error
        })

        return isError = error.EmailorPhoneError || error.passwordError;
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
                            <TextField name='EmailorPhone' id="outlined-basic" label="Email or phone" variant="outlined" error={this.state.EmailorPhoneError} helperText={this.state.EmailorPhoneError ? "Enter an email or phone number" : " "} fullWidth onChange={(e)=>this.changeHandle(e)}/>
                            <p className='button-cont'>Forgot email?</p>
                        </div>

                        <div className='fieldcloumn'>
                            <TextField name='password' id="outlined-basic" label="Password" variant="outlined" error={this.state.passwordError} helperText={this.state.passwordError ? "Enter an password" : " "} fullWidth onChange={(e)=>this.changeHandle(e)}/>
                            <p className='button-cont'>Forgot password?</p>
                        </div>
                    </div>

                    <div className='paragraph'>
                        <p className='para'>Not your computer? Use Guest mode to sign in privately.</p>
                        <p className='button-cont'>Learn more</p> 
                    </div>

                    <div className='footer-content'>
                        <p className='Create-account'>Create account</p>
                        <button className='next' onClick={this.next}>Next</button>
                    </div>

                </div>

            </div >

        )
    }
}

export default Login
