/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Alert } from "react-bootstrap";
import FacebookButton from "../UI/Buttons/FacebookButton";
import GoogleButton from "../UI/Buttons/GoogleButton";
import classes from "./SignupForm.module.css";
import validator from "validator";

function SignupForm(props) {
  const [errorType, setErrorType] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [ShowError, setShowError] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [errorSurname, setErrorSurname] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorAdress, setErrorAdress] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const [typePass, setTypePass] = useState(false);
  const [infoPass, setInfoPass] = useState(false);
  const [errorInvalidPass, setErrorInvalidPass] = useState(false);
  const nameRegex = /^[A-Z][a-z]*(([,.] |[ '-])[A-Za-z][a-z]*)*(\.?)$/;
  const surnameRegex = /^[A-Z][a-z]*(([,.] |[ '-])[A-Za-z][a-z]*)*(\.?)$/;

  const passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
  const [Name, setName] = useState("");
  // console.log(Name);
  function nameChangeHandler(e) {
    setName(e.target.value);
    //! Name için sorgu
    if (Name === " ") {
      setShowError(true);
      setErrorName(true);
      setErrorType("danger");
      return setErrorMessage("You cannot leave blank Name area...");
    } else {
      if (nameRegex.test(Name) === true) {
        setShowError(false);
        setErrorName(false);
      } else {
        setShowError(true);
        setErrorName(true);
        setErrorType("danger");
        return setErrorMessage(() => {
          return (
            <div className="row text-danger">
              <p>
                * First character <mark>MUST</mark> be capital.
                <span>
                  Ex: <ins>sTeWaRT</ins> or like <ins>MEhMeT</ins> is not
                  allowed.
                </span>
              </p>
              <p>
                * Supports English alphabets only.{" "}
                <span>
                  Ex: <ins>ş,ç,ğ</ins> is not allowed.
                </span>
              </p>
              <p>* Numbers not allowed.</p>
            </div>
          );
        });
      }
    }
  }
  function nameBlurHandler(e) {
    if (Name === "") {
      setErrorName(true);
      return setShowError(true);
    }
  }

  const [Surname, setSurname] = useState("");
  function surnameChangeHandler(e) {
    setSurname(e.target.value.trim());
  }

  const [Email, setEmail] = useState("");
  function emailChangeHandler(e) {
    setEmail(e.target.value.trim());
  }

  const [Password, setPassword] = useState("");
  function passwordChangeHandler(e) {
    setPassword(e.target.value.trim());
  }
  function buttonToggleHandler() {
    setTypePass((prevtypePass) => !prevtypePass);
  }

  const [passCheck, setPassCheck] = useState("");
  function passwordCheckChangeHandler(e) {
    setPassCheck(e.target.value.trim());
  }

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
  const [adress, setAdress] = useState("");
  function adressChangeHandler(e) {
    setAdress(e.target.value);
  }
  function passwordFocusHandler(e) {
    setInfoPass(true);
  }
  function passwordBlurHandler() {
    setInfoPass(false);
  }

  function onSubmitHandler(e) {
    e.preventDefault();

    //!Surname için sorgu
    if (Surname === "" || null) {
      setShowError(true);
      setErrorSurname(true);
      setErrorType("danger");
      return setErrorMessage("You cannot leave blank Surname area...");
    } else {
      if (surnameRegex.test(Surname) === true) {
        setShowError(false);
        //!email sorgu
        if (Email === "" || null) {
          setShowError(true);
          setErrorEmail(true);
          setErrorType("danger");
          return setErrorMessage("You cannot leave blank Email area...");
        } else {
          if (validator.isEmail(Email) === true) {
            setShowError(false);
            //!pass sorgu
            if (Password === "" || null) {
              setShowError(true);
              setErrorPass(true);
              setErrorType("danger");
              return setErrorMessage("Password area cannot leave blank...");
            } else {
              if (validator.isStrongPassword(Password) === true) {
                setShowError(false);
                //!passcheck
                if (passCheck === "" || null) {
                  setShowError(true);
                  setErrorInvalidPass(true);
                  setErrorType("danger");
                  return setErrorMessage(
                    "Password check area cannot leave blank..."
                  );
                } else {
                  if (Password === passCheck) {
                    setShowError(false);
                    //!phone number
                    if (phone === "" || null) {
                      setShowError(true);
                      setErrorPhone(true);
                      setErrorType("danger");
                      return setErrorMessage(() => {
                        return (
                          <div>
                            <p>Phone number area cannot leave empty...</p>
                          </div>
                        );
                      });
                    } else {
                      if (validator.isMobilePhone(phone) === true) {
                        setShowError(false);
                        //!adress
                        if (adress === "" || null) {
                          setShowError(true);
                          setErrorAdress(true);
                          setErrorType("danger");
                          return setErrorMessage(() => {
                            return (
                              <div>
                                <p>Adress area cannot leave empty...</p>
                              </div>
                            );
                          });
                        } else {
                          localStorage.setItem("isLoggedIn", "true");
                        }
                      } else {
                        console.log(phone);
                        setShowError(true);
                        setErrorPhone(true);
                        setErrorType("danger");
                        return setErrorMessage(() => {
                          return (
                            <div>
                              <p>Phone number is invalid...</p>
                              <p>
                                Ex: Please enter like <ins>(xxx)xxx xxxx</ins>
                              </p>
                            </div>
                          );
                        });
                      }
                    }
                  } else {
                    setShowError(true);
                    setErrorInvalidPass(true);
                    setErrorType("danger");
                    return setErrorMessage("Passwords doesn't match...");
                  }
                }
              } else {
                setShowError(true);
                setErrorPass(true);
                setErrorType("danger");
                return setErrorMessage(() => {
                  return (
                    <div>
                      <p>Password is invalid. Please read the rules</p>
                      <p>Minimum password length is 8.</p>
                      <p>
                        Your password needs a minimum 1 lower character and
                        uppercase character.
                      </p>
                      <p></p>
                    </div>
                  );
                });
              }
            }
          } else {
            setShowError(true);
            setErrorEmail(true);
            setErrorType("danger");
            return setErrorMessage(() => {
              return (
                <div>
                  <p>
                    Please enter a valid E-mail...{" "}
                    <span>
                      Ex: <ins>test@test.com</ins>
                    </span>
                  </p>
                </div>
              );
            });
          }
        }
      } else {
        setShowError(true);
        setErrorSurname(true);
        setErrorType("danger");
        return setErrorMessage(() => {
          return (
            <div className="row">
              <p>
                * First character <mark>MUST</mark> be capital.
                <span>
                  Ex: <ins>sTatHam</ins> or like <ins>MEhMeT</ins> is not
                  allowed.
                </span>
              </p>
              <p>
                * Supports English alphabets only.{" "}
                <span>
                  Ex: <ins>ş,ç,ğ</ins> is not allowed.
                </span>
              </p>
              <p>* Numbers not allowed.</p>
              <p>
                * No leading or trailing spaces are allowed, empty string is NOT
                allowed.
              </p>
            </div>
          );
        });
      }
    }

    console.log(Name, Surname, Password, passCheck, Email, phone, adress);

    setName("");
    setSurname("");
    setEmail("");
    setPassword("");
    setPassCheck("");
    setPhone("");
    setAdress("");
  }
  const paswordInfoMessage = (
    <div>
      <p>* Please read the rules first.</p>
      <p>* Minimum password length is 8.</p>
      <p>
        * Password needs a minimum 1 <ins>lower character</ins> and{" "}
        <ins> uppercase character</ins>.
      </p>
      <p>
        * Password must have a atleast 1 <ins>numbers</ins> and{" "}
        <ins>speacial character.</ins>
      </p>
    </div>
  );

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="row">
        <GoogleButton />
      </div>
      <div className="row mt-3">
        <FacebookButton />
      </div>
      <div className="row mt-5 mb-2">
        <h4 className="text-center text-white">
          Or... <br /> <br /> Sign up with Email.
        </h4>
      </div>
      <hr />
      <div className="form">
        {/* Name */}
        <div className="row g-2">
          <div className="col-md">
            <div className="form-floating mb-3">
              <input
                type="text"
                className={`form-control ${errorName ? `is-invalid ${classes.false}` : null
                  }`}
                placeholder="User's Name"
                value={Name}
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
                id="name"
              />
              <label
                htmlFor="name"
                className={`${errorName ? `is-invalid ${classes.false}` : null
                  }`}
              >
                Name
              </label>
            </div>
            {errorName && (
              <div className={`text-${errorType}`}>{errorMessage}</div>
            )}
          </div>
          <div className="col-md">
            {/* Surname */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className={`form-control ${errorSurname ? `is-invalid` : null}`}
                placeholder="User's Surname"
                value={Surname}
                onChange={surnameChangeHandler}
                id="surname"
              />
              <label
                htmlFor="surname"
                className={`${errorSurname ? `is-invalid ${classes.false}` : null
                  }`}
              >
                Surname
              </label>
            </div>
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
          <div className="">
            <div className="input-group">
              <div className="form-floating col-lg-6 col-sm-5">
                <input
                  type={typePass ? "text" : "password"}
                  className={`form-control ${errorPass ? "is-invalid" : null}`}
                  placeholder="Password"
                  value={Password}
                  onChange={passwordChangeHandler}
                  onFocus={passwordFocusHandler}
                  onBlur={passwordBlurHandler}
                  id="pass"
                />

                <label
                  htmlFor="pass"
                  className={`${errorPass ? `is-invalid ${classes.false}` : null
                    }`}
                >
                  Password
                </label>
              </div>
              <div className="form-floating col-lg-5 col-sm-5">
                <input
                  type={typePass ? "text" : "password"}
                  className={`form-control ${errorInvalidPass ? "is-invalid" : null
                    }`}
                  placeholder="Password"
                  value={passCheck}
                  onChange={passwordCheckChangeHandler}
                  id="passCheck"
                />
                <label
                  htmlFor="passCheck"
                  className={`${errorInvalidPass ? `is-invalid ${classes.false}` : null
                    }`}
                >
                  Password Again
                </label>
              </div>
              <button
                className={
                  typePass
                    ? "btn btn-primary col-lg-1 col-sm-2"
                    : "btn btn-dark col-lg-1 col-sm-2"
                }
                onClick={buttonToggleHandler}
              >
                <span className="fa fa-fw fa-eye" />
              </button>
            </div>
          </div>
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
        <button type="submit" className="btn btn-outline-light col-6 mx-auto">
          Sign up
        </button>
      </div>
    </form>
  );
}

export default SignupForm;
