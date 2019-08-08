import React, { Component } from 'react';
import FormSaving from './FormSaving';
import Panels from './Panels';
import Counters from './Counters';
import Footer from './Footer';
import './css/App.css'

class App extends Component {
  state = { 
    aim: "",
    price: 0,
    payment: 0,
    moneySaved: 0,
    moneyToSavingYet: 0,
  
    errors: {
      aim:  false,
      price: false,
      payment: false,
    }
   }

  handleSaveInformation = (aim, price) =>{

    this.setState({
      aim: "",
      price: 0,
      payment: 0,
      moneySaved: 0,
      moneyToSavingYet: 0,

    errors: {
      aim:  false,
      price: false,
      payment: false,
    }
    })
  
    const reg = new RegExp('[A-Za-z]');
    const validAim = aim.search(reg);
    

    if(aim.length > 2 && validAim > -1) {
     this.setState({
      aim,
      price,
    })

    }    
    else {
      this.setState({
        errors :{
          aim: true,
        }
      })
    }

    if( Number(price) >= 1 ){
    this.setState({
          moneyToSavingYet: price,
        })
    } else {
      this.setState({
        errors :{
          price: true,
        }
      })
    }

  }

  handleCounter = (payment) =>{
    this.setState({
     errors: {
      payment: false,
      }
    })
    
    if(Number(payment) >= 1 && Number(payment) <= this.state.moneyToSavingYet) {
      this.setState({
        payment,
     })
 
     }    
     else {
       return this.setState({
         errors :{
           payment: true,
         }
       })
     }

      this.setState((prev)=>({
      moneySaved : parseInt(prev.payment) + prev.moneySaved,
      moneyToSavingYet: prev.moneyToSavingYet - parseInt(prev.payment),
    }))

    
  }
 
  render() { 
    const style= {
      color:'red',
      fontSize: '15px',
      display: 'block',
      margin:0,
      padding:0,
    }
       return ( 
      <div className="App">
          <FormSaving 
             saveInformation={this.handleSaveInformation} 
             aimError={this.state.errors.aim}
             priceError={this.state.errors.price}
             style={style}
          />
          <Panels 
            aim={this.state.aim} 
            price={this.state.price} 
          />
          <Counters 
            handleCount={this.handleCounter} 
            moneySaved={this.state.moneySaved}
            moneyToSavingYet={this.state.moneyToSavingYet}
            paymentErr={this.state.errors.payment}
            style={style}
          />
          <Footer />
      </div>
     );
  }
}
 
export default App;