import { CartItemContainer, ItemDetails, Name } from "./cart-item.styles";
type CartItemProps = {
  name: string;
  quantity: number;
  price: number;
  imageUrl: string;
};

const CartItem = ({cartItem}: {cartItem: CartItemProps }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
