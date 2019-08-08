import React, { Component } from 'react';

class FormSaving extends Component {
  state = { 
    aim : "",
    price: 0,
   }

   messanges = {
    aim_incorrect: "Check that the destination name has a minimum of 3 characters and contains letters",
    price_incorrect : "Check if the amount is at least 1$ ",
   }

   handleInput = (e) =>{
     console.log(this.props.aimError, this.props.priceError);
    const value = e.target.value;  
    const type = e.target.type;
    const name = e.target.name;

    if(type === "text" || type === "number"){
        this.setState({
          [name]: value,
        })
    }

   }

  render() { 
    const {aim, price} = this.state;
    
    return ( 
      <div className="headerForm">
        <h1 className="headerForm__slogan">Welcome in savings application!</h1>
        <form className="form">
          <label className="form__label"> Please, write what's your aim:
          <input className="form__label__aim" type="text" value={this.state.aim} onChange={this.handleInput} name="aim" required/> 
          {this.props.aimError && <span style={this.props.style}>{this.messanges.aim_incorrect} </span>} 
          </label>
           <br />
          <label className="form__label">and how much it costs: 
           <input className="form__label__price" type="text" value={this.state.price} onChange={this.handleInput} name="price" min="1" required/> $ 
           {this.props.priceError && <span style={this.props.style}>{this.messanges.price_incorrect} </span>} </label> 
           <br />
           <button className="form__button" type="submit" onClick={(e)=> {
             e.preventDefault();
             this.props.saveInformation(aim, price)
           }}>Let's go!</button>
        </form>
      </div>
     );
  }
}
 
export default FormSaving;