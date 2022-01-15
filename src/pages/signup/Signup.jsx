import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import './Signup.scss';
import { Link } from 'react-router-dom';

export class Signup extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             firstName:'',
             lastName:'',
             userName:'',
             password:'',
             firstNameError:false,
             lastNameError:false,
             userNameError:false,
             passwordError:false,
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
            // console.log("success");
        }
    }

    validated =() =>{
        let isError =  false;
        const error = this.state;
        error.firstNameError = this.state.firstName === ''? true : false;
        error.lastNameError = this.state.lastName === ''? true : false;
        error.userNameError = this.state.userName === ''? true : false;
        error.passwordError = this.state.password === ''? true : false;

        this.setState({
            ...error
        })

        return isError = error.firstNameError || error.lastNameError || error.userNameError || error.passwordError ;
    }


    render() {
        return (
            <div className='signup'>
                <div className='signup-container'>
                    <div className='text-field-container'>

                        <div className='Header-container'>
                            <h2 className='color1'>F</h2>
                            <h2 className='color2'>u</h2>
                            <h2 className='color3'>n</h2>
                            <h2 className='color4'>d</h2>
                            <h2 className='color5'>o</h2>
                            <h2 className='color6'>o</h2>
                        </div>

                        <div className='title'>
                            <h2 className='title-1'>Create your fundoo Account</h2>
                            <p className='title-2'>to continue to fundoo</p>
                        </div>

                            <div className='field-row'>
                                <div className='field-cloumn'>
                                    <TextField style={{marginRight:'15px'}} name='firstName' id="outlined-basic" label="First name" variant="outlined" error={this.state.firstNameError} helperText={this.state.firstNameError ? "Enter first name" : " "} onChange={(e)=>this.changeHandle(e)}/>
                                    <TextField  name='lastName' id="outlined-basic" label="Last name" variant="outlined" error={this.state.lastNameError} helperText={this.state.lastNameError ? "Enter last name" : " "} onChange={(e)=>this.changeHandle(e)}/>
                                </div>
                            
                                <div className='field-cloumn-1'>
                                    <TextField name='userName' id="outlined-basic" label="User name" variant="outlined" fullWidth error={this.state.userNameError} helperText={this.state.userNameError ? "choose a fundoo address" : " "} onChange={(e)=>this.changeHandle(e)}/>
                                    <p className='paragraph'>You can use letters, numbers & periods</p>
                                </div> 
                                <div className='field-cloumn'>
                                    <TextField style={{marginRight:'15px'}} name='password' id="outlined-basic" label="Password" variant="outlined" error={this.state.passwordError} helperText={this.state.passwordError ? "Enter a password" : " "} onChange={(e)=>this.changeHandle(e)}/>
                                    <TextField id="outlined-basic" label="Confirm" variant="outlined"/>
                                </div>
                                <p className='paragraph'>Use 8 or more characters with a mix of letters, numbers & symbols</p>
                            </div>
                            
                            <div className='password'>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                            <label for="vehicle1">Show password</label> 
                            </div>

                            <div className='footer-container'>
                                <Link className='Create-button' to="/Login">Sign in instead</Link>
                                
                                <button className='next-button' onClick={this.next}>Next</button>
                            </div>
                    </div>   

                    <div className='image-container'>
                        <figure>
                            <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="" width="244" height="244" class="j9NuTc TrZEUc"></img>
                            <figcaption>One account. All of Google working for you.</figcaption>
                        </figure>
                    </div>

                </div>
            </div>
            )
    }
}

                export default Signup
