import React, { Component } from 'react'

export default class ProductClass extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           id: 101,
           name: "Laptop",
           price: 50000
        }
      }

 update=()=>{
    this.setState({price: this.state.price+1000})
  }

  render() {
    return (
      <div>
        <h1>Product Details Assign5</h1>
        <p>Product ID: {this.state.id}</p>
        <p>Product Name: {this.state.name}</p>
        <p>Product Price: {this.state.price}</p>
        <button onClick={this.update}>Click Here</button>
      </div>
    )
  }
}
