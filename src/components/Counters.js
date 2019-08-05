import React, { Component } from 'react';


class Counters extends Component{
  
    state = {
    howPayed: 0,
    remains: 0,
    justPaidMoney:0
  }

  handlePay = e => {
    this.setState({
      justPaidMoney: e.target.value * 1,
      remains: this.props.price,
    })
   
  }

  handleCounter = e => {
    e.preventDefault();
    if(this.state.justPaidMoney > this.state.remains || this.state.remains <= 0){
      return console.log('Przykor nam...');
    } else {
    this.setState(prev => ({
      howPayed: prev.howPayed + prev.justPaidMoney,
      remains: prev.remains - prev.justPaidMoney,
    }))
    }
  }
  

  render(){
    const remainsFromParent = this.props.price;
   
    return ( 
      <div className="counters">
        <div className="panelsCounters">
        <div className="panelsCounters__panel">
         <h4> Saved money: </h4>
         {this.state.howPayed} $
        </div>
        <div className="panelsCounters__panel">
          <h4>It remains to the end: </h4>
          {this.state.remains === 0 ? remainsFromParent : this.state.remains} $
        </div>
        </div>
        <div className="counters__form">
        <input className="counters__form__input" type="number" value={this.state.justPaidMoney} onChange={this.handlePay} min="1" /> $
        <button className="counters__form__button"onClick={this.handleCounter}>Save</button>
        </div>
      </div>
    );
    }
  }
 
export default Counters;