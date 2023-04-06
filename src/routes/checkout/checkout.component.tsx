import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { selectCartItems, selectPriceTotal } from "../../store/cart/cart.selector";
import "./checkout.styless.scss";
import { CartItem } from "../../store/cart/cart.types";

const HeaderBlock = ( {name}: {name: string} ) => {
  return (
    <div className="header-block">
      <span>{name}</span>
    </div>
  );
};

const CheckoutHeader = () => {
  const sections = ["Product", "Description", "Quantity", "Price", "Remove"];

  return (
    <div className="checkout-header">
      {sections.map((section, idx) => (
        <HeaderBlock key={idx} name={section} />
      ))}
    </div>
  );
};

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const priceTotal = useSelector(selectPriceTotal);
  return (
    <div className="checkout-container">
      <CheckoutHeader />
      {cartItems.map((cartItem: CartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">{`Total: ${priceTotal}`}</span>
    </div>
  );
};

export default Checkout;
