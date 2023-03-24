import {  useState } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import "./sign-in-form.styles.scss";

const defaultFormValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const { email, password } = formValues;
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const {user} = await signInAuthUserWithEmailAndPassword(email, password);
    } catch (error) {}
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  return (
    <div className="sign-up-container ">
      <h2>Have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="text"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">SIGN IN</Button>
          <Button type="button" buttonType="google" onClick={logGoogleUser}>
            GOOGLE SIGN IN
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
