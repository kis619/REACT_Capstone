import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import "./cart-dropdown.styles.scss";
const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckouthandler = () => {
    navigate("/checkout");
    closeDropDown();
  };
  const closeDropDown = () => {
    setIsCartOpen(false);
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((product) => (
          <CartItem key={product.id} cartItem={product} />
        ))}
      </div>
      <Button onClick={goToCheckouthandler}>Checkout</Button>
    </div>
  );
};

export default CartDropdown;
