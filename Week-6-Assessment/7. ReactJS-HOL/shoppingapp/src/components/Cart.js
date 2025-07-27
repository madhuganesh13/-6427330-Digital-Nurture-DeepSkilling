import React, { Component } from 'react';

class Cart extends Component {
  static defaultProps = {
    itemname: 'Unknown Item',
    price: 0
  };

  render() {
    return (
      <tr style={{ color: 'green', textAlign: 'center' }}>
        <td>{this.props.itemname}</td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
}

export default Cart;
