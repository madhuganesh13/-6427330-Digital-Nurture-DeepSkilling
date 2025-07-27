import React, { Component } from 'react';
import Cart from './Cart';

class OnlineShopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { itemname: 'Laptop', price: 80000 },
        { itemname: 'TV', price: 120000 },
        { itemname: 'Washing Machine', price: 50000 },
        { itemname: 'Mobile', price: 30000 },
        { itemname: 'Fridge', price: 70000 }
      ]
    };
  }

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <h2 style={{ color: 'green' }}>Items Ordered :</h2>
        <table
          border="1"
          cellPadding="10"
          style={{
            margin: 'auto',
            borderCollapse: 'collapse',
            border: '1px solid grey'
          }}
        >
          <thead>
            <tr style={{ color: 'green' }}>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((item, index) => (
              <Cart key={index} itemname={item.itemname} price={item.price} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default OnlineShopping;
