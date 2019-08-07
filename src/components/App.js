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
   }

  handleSaveInformation = (aim, price) =>{
    // console.log(aim.length) ;
    const reg = new RegExp('[A-Za-z]');
    const validAim = aim.search(reg);
    console.log(validAim);

    if(aim.length > 2 && Number(price) >= 1 && validAim > -1) {
     this.setState({
      aim,
      price,
      moneyToSavingYet: price,
    })

    } else {
      return alert("Za krótka nazwa celu (min.3 znaki) lub za mała kwota (min. 1$) !")
    }

  }

  handleCounter = (payment) =>{
    if(Number(payment) > 1 && Number(payment) <= this.state.moneyToSavingYet){
      this.setState({
        payment,
      })
    }
    else{
    return alert('Wartość musi być liczbą większą od 1 i nie może być większa niż to co zostało do zaoszczędzenia');
  }

    this.setState((prev)=>({
      moneySaved : parseInt(prev.payment) + prev.moneySaved,
      moneyToSavingYet: prev.moneyToSavingYet - parseInt(prev.payment),
    }))

    console.log('Obliczam...');
    console.log(`
    Pobrana wartość z formularza: ${this.state.price}
    Wpłata wynosi: ${this.state.payment}
    `);
  }

 
  render() { 
       return ( 
      <div className="App">
          <FormSaving saveInformation={this.handleSaveInformation} />
          <Panels aim={this.state.aim} price={this.state.price} />
          <Counters 
            handleCount={this.handleCounter} 
            moneySaved={this.state.moneySaved}
            moneyToSavingYet={this.state.moneyToSavingYet}
          />
          <Footer />
      </div>
     );
  }
}
 
export default App;