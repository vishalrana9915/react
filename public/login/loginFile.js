import React,{PropTypes} from 'react';
import serviceApi from '../common/script/service';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
export class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email       : "",
            password    : ""
        }
    }


    onChangeFunction(e){
        console.log("hello")
        switch(e.target.name){
            case "email":
                this.setState({email : e.target.value}) ;
                break;
            case "password" :
                this.setState({password : e.target.value});
                 break;
        }
        // cookies.set('token','vishal here is your token')
    }

    validateForm(e,value){
        console.log("val"+value)
        // var result = this.checkValidations()
        e.preventDefault()
        var emailVaidater = serviceApi.registerApi(this.state.email);
            if(emailVaidater){
                serviceApi.login(this.state)
            }else{
            alert("PLease check your Email.")

            }
     

    }

    render(){
    return (
    <div className='col-xs-6 col-lg-6 col-md-6 col-xs-offset-3 col-lg-offset-3 col-md-offset-3'>
    <form id="contactForm" className="form-horizontal wrapper">
       

        <div className="form-group">
            <label className="col-xs-3 control-label">Email address</label>
            <div className="col-xs-5">
                <input type="text" className="form-control" name="email" 
                 value={this.state.email}
                onChange={(event)=>this.onChangeFunction(event)} 
                />
            </div>
        </div>

        <div className="form-group">
            <label className="col-xs-3 control-label">Password</label>
            <div className="col-xs-5">
                <input type="password" className="form-control" name="password" 
                 value={this.state.password}
                onChange={(event)=>this.onChangeFunction(event)} 
                />
            </div>
        </div>

        
       
        <div className="form-group">
            <div className="col-xs-9 col-xs-offset-3">
                <button className="btn btn-primary" onClick={(event)=>this.validateForm(event,this.state)}>Submit</button>
            </div>
        </div>
    </form>
    </div>
    );
    }

}
