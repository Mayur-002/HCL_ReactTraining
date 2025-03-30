import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    updateCart(updatedCart);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    updateCart(updatedCart);
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <h5 className="text-center text-danger">Cart is empty!</h5>
      ) : (
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td><img src={item.image} alt={item.title} width="50" /></td>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>
                  <button className="btn btn-sm btn-primary me-2" onClick={() => increaseQuantity(item.id)}>+</button>
                  {item.quantity}
                  <button className="btn btn-sm btn-warning ms-2" onClick={() => decreaseQuantity(item.id)}>-</button>
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>❌ Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <h4 className="text-end text-success">Total Amount: ${totalAmount.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
