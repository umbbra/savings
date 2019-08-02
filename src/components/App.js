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
   }

  handleSaveInformation = (aim, price) =>{
    // console.log(typeof Number(price)) ;
    if(aim.length > 2 || Number(price) > 1) {
     this.setState({
      aim,
      price,
    })
    } else {
      alert("Za krótka nazwa celu (min.2 znaki) lub za mała kwota (min.1)!")
    }

  }

 
  render() { 
       return ( 
      <div className="App">
          <FormSaving saveInformation={this.handleSaveInformation} />
          <Panels aim={this.state.aim} price={this.state.price} />
          <Counters price={this.state.price} />
          <Footer />
      </div>
     );
  }
}
 
export default App;