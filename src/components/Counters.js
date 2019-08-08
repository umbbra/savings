import React, { Component } from 'react';


class Counters extends Component{
 
  state={
    payment:0,
    // price: 0,
    // moneySaved: 0,
    // moneyToSavingYet: 0,
  }

  handlePayment = (e) =>{
    this.setState({
      payment: e.target.value,
    })
  }

   payment_incorrect = "The deposit can't contain letters and amount can't be larger than remains to the end";


  render(){
      const { payment } = this.state;
    return ( 
      <div className="counters">
        <div className="panelsCounters">
        <div className="panelsCounters__panel">
         <h4> Saved money: </h4>
          {this.props.moneySaved} $
        </div>
        <div className="panelsCounters__panel">
          <h4>It remains to the end: </h4>
           {this.props.moneyToSavingYet}$
        </div>
        </div>
        <div className="counters__form">
        <input className="counters__form__input" type="text" value={this.state.payment} onChange={this.handlePayment} min="1" /> $
        {this.props.paymentErr && <span style={this.props.style}>{this.payment_incorrect} </span>} 

        <button 
        className="counters__form__button" 
        type="submit"
        onClick={(e)=> {
          e.preventDefault();
          this.props.handleCount(payment)} 
          }
        >
          Save
        </button>
        </div>
      </div>
    );
    }
  }
 
export default Counters;