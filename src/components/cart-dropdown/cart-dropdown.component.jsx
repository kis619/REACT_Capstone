import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import {
  CartDropDownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
// import "./cart-dropdown.styles.scss";
const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goToCheckouthandler = () => {
    navigate("/checkout");
    closeDropDown();
  };
  const closeDropDown = () => {
    dispatch(setIsCartOpen(false));
  };
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((product) => (
            <CartItem key={product.id} cartItem={product} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckouthandler}>Checkout</Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
