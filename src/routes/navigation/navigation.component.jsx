import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import {
  NavigationContainer,
  LogoContainer,
  NavigationLink,
  NavLinks,
} from "./navigation.styles";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

const NavLink = ({ title, route }) => {
  return <NavigationLink to={route}>{title}</NavigationLink>;
};

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen)

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink title="SHOP" route="/shop" />
          {currentUser ? (
            <NavigationLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavigationLink>
          ) : (
            <NavLink title="SIGN IN" route="/auth" />
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
