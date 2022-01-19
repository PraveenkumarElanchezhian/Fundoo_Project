import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import './Recovery.scss'
import { Link } from 'react-router-dom';
import UserService from '../../service/UserService';

const service = new UserService();

export class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             emailError:false,
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
                "email": this.state.email,
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
        error.emailError = this.state.email === ''? true : false;

        this.setState({
            ...error
        })

        return isError = error.emailError ;
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
                            <TextField name='email' id="outlined-basic" label="Phone number or email" variant="outlined" error={this.state.emailError} helperText={this.state.emailError ? "Enter a valid email or phone number" : " "} fullWidth onChange={(e)=>this.changeHandle(e)} />
                        </div>
                    </div>

                    <div className='footer'>
                        <button className='next' onClick={(event) => this.next(event)}>Next</button>
                        {/* <Link className='Create-account' to="/userSignUp">Create account</Link> */}
                    </div>

                </div>

            </div >

        )
    }
}

export default Login
