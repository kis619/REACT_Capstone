import {
  CheckoutItemContainet,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  RemoveButton,
  Value,
} from "./checkout-item.styles";
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
