import React, { Component } from 'react';
import {FormVal} from './form';
import {Header} from '../common/script/header'
import {Footer} from '../common/script/footer'
import {Login}  from './loginFile';
class Apps extends Component {

   render() {

   var pageTitle='Login'
   var user ={
   name:'vishal rana',
   age: 23
   }


      return (
      <div className="App">
        <Header user={user}/>
          <div className='row'>

         <div className='container'>
            <h1>{pageTitle}</h1>
        <Login />
         </div>
         </div>
         <Footer />
         </div>

      );
   }
}


export default Apps;