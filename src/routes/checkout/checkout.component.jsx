import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styless.scss";

const HeaderBlock = ({ name }) => {
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
  const { cartItems, priceTotal } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <CheckoutHeader />
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">{`Total: ${priceTotal}`}</span>
      <PaymentForm/>
    </div>
  );
};

export default Checkout;
