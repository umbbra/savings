import React, { Component } from 'react';


class Counters extends Component{
  
    state = {
    howPayed: 0,
    remains: 0,
    justPaidMoney:0
  }

  handlePay = e => {
    console.log('Wpłacono:' + e.target.value);
    this.setState({
      justPaidMoney: e.target.value * 1,
      remains: this.props.price,
    })
   
  }

  handleCounter = e => {
    e.preventDefault();
    this.setState(prev => ({
      howPayed: prev.howPayed + prev.justPaidMoney,
      remains: prev.remains - prev.justPaidMoney,
    }))

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
        <input type="number" value={this.state.justPaidMoney} onChange={this.handlePay} /> $
        <button onClick={this.handleCounter}>Save</button>
      </div>
    );
    }
  }
 
export default Counters;