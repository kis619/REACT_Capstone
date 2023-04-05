import { CartIconContainer, ItemCount, ShopIcon } from "./cart-icon.styles";
import { useDispatch, useSelector } from "react-redux";
import { selectIsCartOpen, selectItemCount } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

const CartIcon = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectItemCount);
  const dispatch = useDispatch();
  const toggleCart = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };
  return (
    <CartIconContainer onClick={toggleCart}>
      <ShopIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
