import "./checkout-item.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const CheckoutItem = ({ cartItem }) => {
  const { cartItems, addItemToCart, removeItemfromCart, clearItemfromCart } =
    useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;

  const deleteFromCart = () => {
    clearItemfromCart(cartItem);
  };
  const removeItem = () => {
    removeItemfromCart(cartItem);
  };
  const addItem = () => {
    addItemToCart(cartItem);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"> {name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItem}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItem}>
          &#10095;
        </div>
      </span>
      <span className="price"> {price}</span>
      <div className="remove-button" onClick={deleteFromCart}>
        &#10005;
      </div>
    </div>
  );
};
export default CheckoutItem;
