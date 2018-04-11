import React from 'react';
const loadIcon = '../../dist/logo.png';

export class Header extends React.Component{
constructor(props){
	super();
	this.state = {
		name:props.user.name,
		age:props.user.age
	}
}

changeName() {
		this.setState({
			name:"Shallu"
		})
		}

	render(){
		return (
				<header className="App-header">
       				<img src={loadIcon} className='iconCs'/>
         			 <h1 className="App-title">Welcome {this.state.name},How are you doing.</h1>
       		    </header>
			);
	}
}





         			 /*<button className='btn btn-primary' onClick={()=>this.changeName()}>Click to change name</button>*/
