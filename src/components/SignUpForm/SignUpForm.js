import { useReducer } from "react";
import classes from "./SignupForm.module.css";
import validator from "validator";
import Socials from "../UI/Buttons/Socials";
import BlankInputError from "../Error/BlankInputError";
import { useDebounce } from "../../hooks/debounce";
import { SignupReducer, ACTIONS } from "./SignupFormReducer";
import FormInput from "../FormInput/FormInput";
import FormInputPhone from "../FormInput/FormInputPhone";
import WrongInputError, { switcher } from "../Error/WrongInputError";

const initialState = {
  Name: "",
  Surname: "",
  Email: "",
  Password: "",
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
  passAgain: "",
  passEqual: false,
  //!! TODO Change the value of form valid to false
  isFormValid: false,
  pointsForValid: 0,
  nameRegex: /^[A-Z][a-z]*(([,.] |[ '-])[A-Za-z][a-z]*)*(\.?)$/,
  surnameRegex: /^[A-Z][a-z]*(([,.] |[ '-])[A-Za-z][a-z]*)*(\.?)$/,
};

function SignupForm(props) {
  const [state, dispatch] = useReducer(SignupReducer, initialState);
  const {
    Name,
    Email,
    Surname,
    Password,
    passAgain,
    Phone,
    Adress,
    errorType,
    errorName,
    errorSurname,
    errorPhone,
    errorAdress,
    errorEmail,
    errorPass,
    errorInvalidPass,
    passEqual,
    isFormValid,
    typePass,
    nameRegex,
    surnameRegex,
    pointsForValid,
  } = state;

  function nameChangeHandler(e) {
    dispatch({
      type: ACTIONS.FIELD,
      FIELD: e.target.name,
      value: e.target.value,
    });
  }
  function nameCheck() {
    //! Name için sorgu
    if (!Name) {
      return dispatch({ type: ACTIONS.NAME_SUCCESS });
    } else {
      if (nameRegex.test(Name) === true) {
        dispatch({ type: ACTIONS.FORM_VALIDITY_VALID_POINTS });
        console.log(pointsForValid);
        return dispatch({ type: ACTIONS.NAME_SUCCESS });
      } else {
        return dispatch({ type: ACTIONS.NAME_ERROR });
      }
    }
  }

  useDebounce(nameCheck, 500);

  function surnameChangeHandler(e) {
    dispatch({
      type: ACTIONS.FIELD,
      FIELD: "Surname",
      value: e.target.value.trim(),
    });
  }
  //!Surname için sorgu
  function surnameCheck() {
    if (!Surname) {
      return dispatch({ type: ACTIONS.SURNAME_SUCCESS });
    } else {
      if (surnameRegex.test(Surname)) {
        dispatch({ type: ACTIONS.FORM_VALIDITY_VALID_POINTS });
        return dispatch({ type: ACTIONS.SURNAME_SUCCESS });
      } else {
        return dispatch({ type: ACTIONS.SURNAME_ERROR });
      }
    }
  }
  useDebounce(surnameCheck, 500);

  function emailChangeHandler(e) {
    dispatch({
      type: ACTIONS.FIELD,
      FIELD: "Email",
      value: e.target.value.trim(),
    });
  }

  function passwordChangeHandler(e) {
    dispatch({
      type: ACTIONS.FIELD,
      FIELD: "Password",
      value: e.target.value.trim(),
    });
  }

  //!pass sorgu
  function passwordCheck() {
    if (!Password) {
      return dispatch({ type: ACTIONS.PASSWORD_SUCCESS });
    } else {
      if (validator.isStrongPassword(Password) === true) {
        return dispatch({ type: ACTIONS.PASSWORD_SUCCESS });
      } else {
        return dispatch({ type: ACTIONS.PASSWORD_ERROR });
      }
    }
  }
  useDebounce(passwordCheck, 500);

  function buttonToggleHandler() {
    dispatch({
      type: ACTIONS.PASS_INPUT_TYPE,
    });
  }

  function passwordCheckChangeHandler(e) {
    dispatch({
      type: ACTIONS.FIELD,
      FIELD: "passAgain",
      value: e.target.value.trim(),
    });
  }
  //!passcheck
  function passEqualCheck() {
    if (!passAgain) {
      return dispatch({ type: ACTIONS.PASSWORDEQ_SUCCESS });
    } else {
      if (Password === passAgain) {
        return dispatch({ type: ACTIONS.PASSWORDEQ_SUCCESS });
      } else {
        return dispatch({ type: ACTIONS.PASSWORDEQ_ERROR });
      }
    }
  }
  useDebounce(passEqualCheck, 500);

  function phoneChangeHandler(e) {
    const PhoneInput = e.target.value;
    dispatch({
      type: ACTIONS.PHONE_INPUT,
      FIELD: "Phone",
      value: PhoneInput,
    });
  }

  function phoneCheck() {
    //!phone number
    if (Phone === "" || null) {
      return dispatch({ type: ACTIONS.PHONE_SUCCESS });
    } else {
      if (validator.isMobilePhone(Phone) === true) {
        return dispatch({ type: ACTIONS.PHONE_SUCCESS });
      } else {
        dispatch({ type: ACTIONS.PHONE_SUCCESS });
      }
    }
  }
  useDebounce(phoneCheck, 500);

  function disabledHandler() {
    if (pointsForValid > 7) {
      dispatch({ type: ACTIONS.FORM_VALIDITY_VALID });
    }
  }
  useDebounce(disabledHandler, 1500);

  function adressChangeHandler(e) {
    dispatch({
      type: ACTIONS.FIELD,
      FIELD: "Adress",
      value: e.target.value,
    });
  }

  //TODO fix the on submit
  function onSubmitHandler(e) {
    e.preventDefault();
    //? Name için Sorgu
    if (Name === "" || null) {
      return dispatch({ type: ACTIONS.NAME_ERROR });
    }
    //? name için sorgu
    if (Surname === "" || null) {
      return dispatch({ type: ACTIONS.SURNAME_ERROR });
    }

    if (Phone === "" || null) {
      return dispatch({ type: ACTIONS.PHONE_ERROR });
    }
    //! adress
    if (Adress === "" || null) {
      return dispatch({ type: ACTIONS.ADRESS_ERROR });
    }

    //! email sorgu
    if (Email === "" || null) {
      return dispatch({ type: ACTIONS.EMAIL_SUCCESS });
    } else {
      if (validator.isEmail(Email) === true) {
        dispatch({ type: ACTIONS.EMAIL_SUCCESS });
      } else {
        return dispatch({ type: ACTIONS.EMAIL_ERROR });
      }
    }
    //TODO add a disable button check
    //TODO puan sistemi ekle her bir input için 1 puan ver ve değer doğruysa arttır sonuç doğruysa signupı trueya döndür
    // localStorage.setItem("isLoggedIn", "true");
    console.log(Name, Surname, Password, passAgain, Email, Phone, Adress);

    // setName("");
    // setSurname("");
    // setEmail("");
    // setPassword("");
    // setPassCheck("");
    // setPhone("");
    // setAdress("");
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
              type={"text"}
              error={errorEmail}
              InputName={"Email"}
              InputNameLabel={"E-mail"}
              onChangeHandler={emailChangeHandler}
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
            {errorInvalidPass && (
              <WrongInputError ErrorInputName={switcher.password} />
            )}
          </div>
          {/* passwcheck */}
          <div className="row mb-3">
            <div className="input-group">
              <FormInput
                type={typePass ? "text" : "password"}
                error={errorInvalidPass}
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
              <div className={`text-${errorType}`}>
                "Passwords doesn't match..."
              </div>
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
          {errorPhone && <BlankInputError />}
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
          {errorAdress && <BlankInputError />}
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className={`btn col-6 mx-auto ${classes.formButton}`}
            disabled={pointsForValid > 7 ? false : true}
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
