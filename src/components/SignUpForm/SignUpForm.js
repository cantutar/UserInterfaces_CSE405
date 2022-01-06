import { useReducer, useRef } from "react";
import classes from "./SignupForm.module.css";
import Socials from "../UI/Buttons/Socials";
import BlankInputError from "../Error/BlankInputError";
import { useDebounce } from "../../hooks/debounce";
import { SignupReducer, ACTIONS } from "./SignupFormReducer";
import FormInput from "../FormInput/FormInput";
import FormInputPhone from "../FormInput/FormInputPhone";
import WrongInputError, { switcher } from "../Error/WrongInputError";
import { useAuth, signup, auth } from "../../store/auth-context";

const initialState = {
  Name: "",
  Surname: "",
  Email: "",
  Password: "",
  passAgain: "",
  Phone: "",
  Adress: "",
  errorType: "",
  errorName: false,
  errorSurname: false,
  errorPhone: false,
  errorAdress: false,
  errorEmail: false,
  errorPass: false,
  typePass: false,
  passEqual: false,
  //!! TODO Change the value of form valid to false
  isFormNotValid: true,
  isLoading: false,
};
function SignupForm(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [state, dispatch] = useReducer(SignupReducer, initialState);
  const {
    Name,
    Surname,
    Email,
    Password,
    passAgain,
    Phone,
    Adress,
    errorName,
    errorSurname,
    errorPhone,
    errorAdress,
    errorEmail,
    errorPass,
    passEqual,
    isFormNotValid,
    typePass,
    isLoading,
  } = state;

  function nameChangeHandler(e) {
    dispatch({
      type: ACTIONS.NAME_INPUT_FIELD,
      FIELD: e.target.name,
      value: e.target.value,
    });
  }
  function surnameChangeHandler(e) {
    dispatch({
      type: ACTIONS.SURNAME_INPUT_FIELD,
      FIELD: "Surname",
      value: e.target.value.trim(),
    });
  }

  function emailChangeHandler(e) {
    dispatch({
      type: ACTIONS.EMAIL_INPUT_FIELD,
      FIELD: "Email",
      value: e.target.value.toLowerCase().trim(),
    });
  }
  console.log();

  function passwordChangeHandler(e) {
    dispatch({
      type: ACTIONS.PASSWORD_INPUT_FIELD,
      FIELD: "Password",
      value: e.target.value.trim(),
    });
  }

  function buttonToggleHandler() {
    dispatch({
      type: ACTIONS.PASS_INPUT_TYPE,
    });
  }

  function passwordCheckChangeHandler(e) {
    dispatch({
      type: ACTIONS.PASSWORDEQ_INPUT_FIELD,
      FIELD: "passAgain",
      value: e.target.value.trim(),
    });
  }

  function phoneChangeHandler(e) {
    const PhoneInput = e.target.value;
    dispatch({
      type: ACTIONS.PHONE_INPUT_FIELD,
      FIELD: "Phone",
      value: PhoneInput,
    });
  }
  function disabledHandler() {
    if (
      Name &&
      Surname &&
      Password &&
      passAgain &&
      Email &&
      Phone &&
      Adress !== ""
    ) {
      dispatch({ type: ACTIONS.FORM_VALIDITY });
    }
  }
  useDebounce(disabledHandler, 1500);

  function adressChangeHandler(e) {
    dispatch({
      type: ACTIONS.ADRESS_INPUT_FIELD,
      FIELD: "Adress",
      value: e.target.value,
    });
  }

  //TODO fix the on submit
  function onSubmitHandler(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.LOADING, value: false });
    signup(auth, emailRef.current.value, passwordRef.current.value);
    localStorage.setItem("isLoggedIn", "true");
    dispatch({ type: ACTIONS.LOADING, value: true });
    console.log(Name, Surname, Password, passAgain, Email, Phone, Adress);
  }

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div className="row text-center mt-3">
          <h2 className={`fs-1 ${classes.formYazi}`}>Create Account</h2>
        </div>
        <div className="row mt-3">
          <Socials />
        </div>
        <div className="row mt-2 mb-1">
          <p className="text-center">...or sign up with e-mail:</p>
        </div>
        <div className="form">
          {/* Name */}
          <div className="row mb-3">
            <div className="col-md">
              <FormInput
                type={"text"}
                error={errorName}
                InputName={"Name"}
                InputNameLabel={"Name"}
                onChangeHandler={nameChangeHandler}
              />
              {errorName && <WrongInputError ErrorInputName={switcher.name} />}
              {/*TODO add a blank input var for every input*/}
            </div>
            <div className="col-md">
              {/* Surname */}
              <FormInput
                type={"text"}
                error={errorSurname}
                InputName={"Surname"}
                InputNameLabel={"Surname"}
                onChangeHandler={surnameChangeHandler}
              />
              {errorSurname && (
                <WrongInputError ErrorInputName={switcher.surname} />
              )}
            </div>
          </div>
          {/* E-mail */}
          <div className="mb-3">
            <FormInput
              type={"email"}
              error={errorEmail}
              InputName={"Email"}
              InputNameLabel={"E-mail"}
              onChangeHandler={emailChangeHandler}
              inputRef={emailRef}
            />
            {errorEmail && <WrongInputError ErrorInputName={switcher.email} />}
          </div>
          {/* pass */}
          <div className="row mb-3">
            <div className="input-group">
              <FormInput
                type={typePass ? "text" : "password"}
                error={errorPass}
                InputName={"Password"}
                InputNameLabel={"Password"}
                onChangeHandler={passwordChangeHandler}
                cssClasses={"col-lg-11 col-sm-10"}
                inputRef={passwordRef}
              />
              <button
                type="button"
                className={
                  typePass
                    ? `btn ${classes.formButtonRed} col-lg-1 col-sm-2`
                    : `btn ${classes.formButtonMavi} col-lg-1 col-sm-2`
                }
                onClick={buttonToggleHandler}
              >
                <span className="fa fa-fw fa-eye" />
              </button>
            </div>
            {errorPass && (
              <WrongInputError ErrorInputName={switcher.password} />
            )}
          </div>
          {/* passwcheck */}
          <div className="row mb-3">
            <div className="input-group">
              <FormInput
                type={typePass ? "text" : "password"}
                error={passEqual}
                InputName={"passAgain"}
                InputNameLabel={"Password Again"}
                onChangeHandler={passwordCheckChangeHandler}
                cssClasses={"col-lg-11 col-sm-10"}
              />

              <button
                type="button"
                className={
                  typePass
                    ? `btn ${classes.formButtonRed} col-lg-1 col-sm-2`
                    : `btn ${classes.formButtonMavi} col-lg-1 col-sm-2`
                }
                onClick={buttonToggleHandler}
              >
                <span className="fa fa-fw fa-eye" />
              </button>
            </div>
            {passEqual && (
              <WrongInputError ErrorInputName={switcher.passAgain} />
            )}
          </div>
          {/* Phone */}
          <div className="mb-3">
            <FormInputPhone
              type={"text"}
              error={errorPhone}
              InputName={"Phone"}
              InputNameLabel={"Phone Number"}
              onChangeHandler={phoneChangeHandler}
              value={Phone}
            />
          </div>
          {errorPhone && <WrongInputError ErrorInputName={switcher.phone} />}
          <div className="form-floating mb-3">
            <textarea
              style={{ height: "110px" }}
              type="textarea"
              className="form-control"
              placeholder="Please enter Your Adress..."
              onChange={adressChangeHandler}
              id="Adress"
              name="Adress"
            />
            <label htmlFor="Adress">Adress</label>
          </div>
          {errorAdress && <BlankInputError inputName="adress" />}
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className={`btn col-6 mx-auto ${classes.formButton}`}
            disabled={isFormNotValid}
          >
            Sign up
          </button>
        </div>
      </form>
      <p className="mt-4 text-center">
        By clicking Sign up button you will agree with{" "}
        <a href="http://" target="_blank" rel="noopener noreferrer">
          user agreement bla bla.
        </a>
      </p>
    </>
  );
}

export default SignupForm;
