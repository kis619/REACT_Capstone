import {
  CheckoutItemContainet,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  RemoveButton,
  Value,
} from "./checkout-item.styles";
import {
  clearItemfromCart,
  removeItemfromCart,
  addItemToCart,
} from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({ cartItem }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = cartItem;

  const deleteFromCart = () => dispatch(clearItemfromCart(cartItems, cartItem));
  const removeItem = () => dispatch(removeItemfromCart(cartItems, cartItem));
  const addItem = () => dispatch(addItemToCart(cartItems, cartItem));

  return (
    <CheckoutItemContainet>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItem}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItem}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={deleteFromCart}>&#10005;</RemoveButton>
    </CheckoutItemContainet>
  );
};
export default CheckoutItem;
