import React,{PropTypes} from 'react';
import serviceApi from '../common/script/service';

export class FormVal extends React.Component{
    constructor(props){
        super();
        this.state={
            firstName   : "",
            lastName    : "",
            phone: "",
            email:"",
            gender :"",
            confirm: "",
            password: ""
        }
    }


    onFirstNameChange(e){
        switch(e.target.name){
            case "firstName":
                this.setState({firstName : e.target.value}) ;
                break;
            case "lastName" :
                this.setState({lastName : e.target.value});
                 break;
            case "email" :
                this.setState({email : e.target.value});
                 break;
            case "gender" :
                this.setState({gender:e.target.value})
                 break;
            case "phone" :
                 this.setState({phone:e.target.value})
                 break;
            case "confirm" :
                 this.setState({confirm:e.target.value})
                 break;
            case "password" :
                 this.setState({password:e.target.value})
                 break;
        }
    }

    validateForm(e,value){
        console.log("val"+value)
        // var result = this.checkValidations()
        e.preventDefault()

        if(this.state.password === this.state.confirm){
        serviceApi.signupApi(this.state)
        }else{
            alert("PLease check your password.")
        }


    }

    render(){
    return (
    <div className='col-xs-6 col-lg-6 col-md-6 col-xs-offset-3 col-lg-offset-3 col-md-offset-3'>
    <form id="contactForm" className="form-horizontal wrapper">
        <div className="form-group">
            <label className="col-xs-3 control-label">Full name</label>
            <div className="col-xs-4">
                <input type="text" className="form-control" name="firstName" placeholder="First name" 
                value={this.state.firstName}
                onChange={(event)=>this.onFirstNameChange(event)} 
                />
            </div><br/> 
            <div className="col-xs-4">
                <input type="text" className="form-control" name="lastName" placeholder="Last name" 
                value={this.state.lastName}
                onChange={(event)=>this.onFirstNameChange(event)} 
                />
            </div>
        </div>

        <div className="form-group">
            <label className="col-xs-3 control-label">Phone number</label>
            <div className="col-xs-5">
                <input type="text" className="form-control" name="phone" 
                 value={this.state.phone}
                onChange={(event)=>this.onFirstNameChange(event)} 
                />
            </div>
        </div>

        <div className="form-group">
            <label className="col-xs-3 control-label">Email address</label>
            <div className="col-xs-5">
                <input type="text" className="form-control" name="email" 
                 value={this.state.email}
                onChange={(event)=>this.onFirstNameChange(event)} 
                />
            </div>
        </div>

        <div className="form-group">
            <label className="col-xs-3 control-label">Password</label>
            <div className="col-xs-5">
                <input type="password" className="form-control" name="password" 
                 value={this.state.password}
                onChange={(event)=>this.onFirstNameChange(event)} 
                />
            </div>
        </div>

        <div className="form-group">
            <label className="col-xs-3 control-label">Confirm Password</label>
            <div className="col-xs-5">
                <input type="password" className="form-control" name="confirm" 
                 value={this.state.confirm}
                onChange={(event)=>this.onFirstNameChange(event)} 
                />
            </div>
        </div>
        <div className="form-group">
            <label className="col-xs-3 control-label" id="captchaOperation">Gender</label>
            <div className="row">
            <div className="col-xs-5">
                
                <div>
                <input type='radio' value='Male' name='gender' onClick={(e)=>this.onFirstNameChange(e)} checked={this.state.gender === 'Male'} />Male
                <br/>
                <input type='radio' value='Female' name='gender' onClick={(e)=>this.onFirstNameChange(e)} checked={this.state.gender === 'Female'} />Female
                </div>
                
            </div>

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



FormVal.propTypes ={
    phone: PropTypes.number,
    firstName: PropTypes.string.isRequired,
    lastName : PropTypes.string
}
    }

}
