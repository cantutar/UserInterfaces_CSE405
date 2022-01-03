import { useReducer, useState } from "react";
import classes from "./SignupForm.module.css";
import validator from "validator";
import Socials from "../UI/Buttons/Socials";
import BlankInputError from "../Error/BlankInputError";
import NameError from "../Error/NameError";
// import SurnameError from "../Error/SurnameError";
import { useDebounce } from "../../hooks/debounce";
import { SignupReducer, ACTIONS } from "./SignupFormReducer";
// import PassError from "../Error/PassError";
// import MailError from "../Error/MailError";

const initialState = {
  errorType: "",
  ShowError: false,
  errorName: false,
  errorSurname: false,
  errorPhone: false,
  errorAdress: false,
  errorEmail: false,
  errorPass: false,
  typePass: false,
  passEq: false,
  nameRegex: /^[A-Z][a-z]*(([,.] |[ '-])[A-Za-z][a-z]*)*(\.?)$/,
  surnameRegex: /^[A-Z][a-z]*(([,.] |[ '-])[A-Za-z][a-z]*)*(\.?)$/,
};

function SignupForm(props) {
  const [state, dispatch] = useReducer(SignupReducer, initialState);
  const {
    errorType,
    ShowError,
    errorName,
    errorSurname,
    errorPhone,
    errorAdress,
    errorEmail,
    errorPass,
    infoPass,
    errorInvalidPass,
    passEq,
    Name,
    Email,
    Surname,
    Password,
    passCheck,
    adress,
  } = state;

  function NameChangeHandler(e) {
    dispatch({ type: ACTIONS.FIELD, FIELD: "Name", value: e.target.value });
  }
  function nameCheck() {
    //! Name için sorgu
    if (Name === "") {
      return dispatch({ type: ACTIONS.NAME_SUCCESS });
    } else {
      if (initialState.nameRegex.test(Name) === true) {
        return dispatch({ type: ACTIONS.NAME_SUCCESS });
      } else {
        return dispatch({ type: ACTIONS.NAME_ERROR });
      }
    }
  }

  useDebounce(nameCheck, 500);
  // function nameBlurHandler(e) {
  //   if (Name === "") {
  //     setErrorName(true);
  //     setShowError(true);
  //     return setErrorMessage(() => {
  //       return <BlankInputError inputName={"Name"} />;
  //     });
  //   }
  // }

  function surnameChangeHandler(e) {
    dispatch({
      type: ACTIONS.FIELD,
      FIELDNAME: "Surname",
      value: e.target.value.trim(),
    });
  }
  //!Surname için sorgu
  function surnameCheck() {
    if (Surname === "" || null) {
      return dispatch({ type: ACTIONS.SURNAME_SUCCESS });
    } else {
      if (initialState.surnameRegex.test(Surname) === true) {
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

  const [typePass, setTypePass] = useState(false);
  function buttonToggleHandler() {
    setTypePass((prevtypePass) => !prevtypePass);
  }

  function passwordCheckChangeHandler(e) {
    dispatch({
      type: ACTIONS.FIELD,
      FIELD: "passCheck",
      value: e.target.value.trim(),
    });
  }
  //!passcheck
  function passEqualCheck() {
    if (passCheck === "" || null) {
      return dispatch({ type: ACTIONS.PASSWORDEQ_SUCCESS });

      // setErrorType("danger");
      // return setErrorMessage("Password check area cannot leave blank...");
    } else {
      if (Password === passCheck) {
        return dispatch({ type: ACTIONS.PASSWORDEQ_SUCCESS });
      } else {
        return dispatch({ type: ACTIONS.PASSWORDEQ_ERROR });
      }
    }
  }
  useDebounce(passEqualCheck, 500);
  const [phone, setPhone] = useState("");
  function formatPhoneNumber(value) {
    // if input value is falsy eg if the user deletes the input, then just return
    if (!value) return value;

    // clean the input for any non-digit values.
    const phoneNumber = value.replace(/[^\d]/g, "");

    // phoneNumberLength is used to know when to apply our formatting for the phone number
    const phoneNumberLength = phoneNumber.length;

    // we need to return the value with no formatting if its less then four digits
    // this is to avoid weird behavior that occurs if you  format the area code to early
    if (phoneNumberLength < 4) return phoneNumber;

    // if phoneNumberLength is greater than 4 and less the 7 we start to return
    // the formatted number
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }

    // finally, if the phoneNumberLength is greater then seven, we add the last
    // bit of formatting and return it.
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )} ${phoneNumber.slice(6, 10)}`;
  }

  function phoneChangeHandler(e) {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);

    setPhone(formattedPhoneNumber);
  }
  function phoneCheck() {
    //!phone number
    if (phone === "" || null) {
      return dispatch({ type: ACTIONS.PHONE_SUCCESS });
    } else {
      if (validator.isMobilePhone(phone) === true) {
        return dispatch({ type: ACTIONS.PHONE_SUCCESS });
      } else {
        dispatch({ type: ACTIONS.PHONE_SUCCESS });
      }
    }
  }

  function adressChangeHandler(e) {
    dispatch({
      type: ACTIONS.FIELD,
      FIELDNAME: "adress",
      value: e.target.value,
    });
  }
  //TODO

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

    if (phone === "" || null) {
      return dispatch({ type: ACTIONS.PHONE_ERROR });
    }
    //! adress
    if (adress === "" || null) {
      return dispatch({ type: ACTIONS.ADRESS_ERROR });

      // return setErrorMessage(() => {
      //   return (
      //     <div>
      //       <p>Adress area cannot leave empty...</p>
      //     </div>
      //   );
      // });
    }
    // localStorage.setItem("isLoggedIn", "true");

    //! email sorgu
    if (Email === "" || null) {
      return dispatch({ type: ACTIONS.EMAIL_SUCCESS });
      // return setErrorMessage("You cannot leave blank Email area...");
    } else {
      if (validator.isEmail(Email) === true) {
        dispatch({ type: ACTIONS.EMAIL_SUCCESS });
      } else {
        return dispatch({ type: ACTIONS.EMAIL_ERROR });
        // return setErrorMessage(() => {
        //   return <MailError />;
        // });
      }
    }

    console.log(Name, Surname, Password, passCheck, Email, phone, adress);

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
          {/* //TODO Fix the mobile version */}
          <Socials />
        </div>
        <div className="row mt-2 mb-1">
          <p className="text-center">...or sign up with e-mail:</p>
        </div>
        <div className="form">
          {/* Name */}
          <div className="row">
            <div className="col-md">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control ${
                    errorName ? `is-invalid ${classes.false}` : null
                  }`}
                  placeholder="User's Name"
                  value={Name}
                  onChange={NameChangeHandler}
                  // onBlur={nameBlurHandler}
                  id="name"
                />
                <label
                  htmlFor="name"
                  className={`${
                    errorName ? `is-invalid ${classes.false}` : null
                  }`}
                >
                  Name
                </label>
              </div>
              {errorName && (
                <div className={`text-${errorType}`}>
                  {<NameError />}
                  {<BlankInputError inputName={"Name"} />}
                </div>
              )}
            </div>
            <div className="col-md">
              {/* Surname */}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control ${
                    errorSurname ? `is-invalid` : null
                  }`}
                  placeholder="User's Surname"
                  value={Surname}
                  onChange={surnameChangeHandler}
                  id="surname"
                />
                <label
                  htmlFor="surname"
                  className={`${
                    errorSurname ? `is-invalid ${classes.false}` : null
                  }`}
                >
                  Surname
                </label>
              </div>
              {errorSurname && (
                <div className={`text-${errorType}`}>
                  {/*TODO add a surname error*/}
                </div>
              )}
            </div>
          </div>
          {/* email */}
          <div className="form-floating mb-3">
            <input
              type="email"
              className={`form-control ${errorEmail ? `is-invalid` : null}`}
              placeholder="E-mail"
              value={Email}
              onChange={emailChangeHandler}
              id="mail"
            />
            <label
              htmlFor="mail"
              className={`${errorEmail ? `${classes.false}` : null}`}
            >
              E-mail
            </label>
          </div>
          {/* pass */}
          <div className="row mb-3">
            <div className="input-group">
              <div className="form-floating col-lg-11 col-sm-10">
                <input
                  type={typePass ? "text" : "password"}
                  className={`form-control ${errorPass ? "is-invalid" : null}`}
                  placeholder="Password"
                  value={Password}
                  onChange={passwordChangeHandler}
                  id="pass"
                />

                <label
                  htmlFor="pass"
                  className={`${
                    errorPass ? `is-invalid ${classes.false}` : null
                  }`}
                >
                  Password
                </label>
              </div>

              <button
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
              <div className={`text-${errorType}`}>
                {/*TODO add a invalid pass error */}
              </div>
            )}
          </div>
          {/* passwcheck */}
          <div className="row mb-3">
            <div className="input-group">
              <div className="form-floating col-lg-11 col-sm-10">
                <input
                  type={typePass ? "text" : "password"}
                  className={`form-control ${
                    errorInvalidPass ? "is-invalid" : null
                  }`}
                  placeholder="Password"
                  value={passCheck}
                  onChange={passwordCheckChangeHandler}
                  id="passCheck"
                />
                <label
                  htmlFor="passCheck"
                  className={`${
                    errorInvalidPass ? `is-invalid ${classes.false}` : null
                  }`}
                >
                  Password Again
                </label>
              </div>
              <button
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
            {passEq && (
              <div className={`text-${errorType}`}>
                "Passwords doesn't match..."
              </div>
            )}
          </div>
          {/* Phone1 */}
          <div className="form-floating mb-3">
            <input
              type="text"
              className={`form-control ${errorPhone ? "is-invalid" : null}`}
              placeholder="(xxx)"
              value={phone}
              onChange={phoneChangeHandler}
              id="phone"
            />
            <label
              htmlFor="phone"
              className={`${errorPhone ? `is-invalid ${classes.false}` : null}`}
            >
              Phone Number
            </label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              style={{ height: "150px" }}
              type="textarea"
              className="form-control"
              placeholder="Please enter Your Adress..."
              value={adress}
              onChange={adressChangeHandler}
              id="adress"
            />
            <label htmlFor="adress">Adress</label>
          </div>
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className={`btn col-6 mx-auto ${classes.formButton}`}
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
