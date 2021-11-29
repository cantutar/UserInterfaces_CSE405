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
  const [errorInvalidPass, setErrorInvalidPass] = useState(false);
  const nameRegex = /^[A-Z][a-z]*(([,.] |[ '-])[A-Za-z][a-z]*)*(\.?)$/;
  const surnameRegex = /^[A-Z][a-z]*(([,.] |[ '-])[A-Za-z][a-z]*)*(\.?)$/;

  const passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

  const [Name, setName] = useState("");
  function nameChangeHandler(e) {
    setName(e.target.value);
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

  const [passCheck, setPassCheck] = useState("");
  function passwordCheckChangeHandler(e) {
    setPassCheck(e.target.value.trim());
  }

  const [phone, setPhone] = useState("");
  function phoneChangeHandler(e) {
    setPhone(e.target.value);
  }
  const [adress, setAdress] = useState("");
  function adressChangeHandler(e) {
    setAdress(e.target.value);
  }

  function onSubmitHandler(e) {
    e.preventDefault();

    //! Name için sorgu
    if (Name === "" || null) {
      setShowError(true);
      setErrorName(true);
      setErrorType("danger");
      return setErrorMessage("You cannot leave blank Name area...");
    } else {
      if (nameRegex.test(Name) === true) {
        setShowError(false);
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
                    * No leading or trailing spaces are allowed, empty string is
                    NOT allowed.
                  </p>
                </div>
              );
            });
          }
        }
      } else {
        setShowError(true);
        setErrorName(true);
        setErrorType("danger");
        return setErrorMessage(() => {
          return (
            <div className="row">
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
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="row mt-2">
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
                className={`form-control ${
                  errorName ? `is-invalid ${classes.false}` : null
                }`}
                placeholder="User's Name"
                value={Name}
                onChange={nameChangeHandler}
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
                className={`${
                  errorSurname ? `is-invalid ${classes.false}` : null
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
        <div className="row g-2">
          <div className="col-md">
            <div className="form-floating mb-3">
              <input
                type="password"
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
          </div>
          <div className="col-md">
            <div className="form-floating mb-3">
              <input
                type="password"
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
          </div>
        </div>
        {/* phone */}
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Phone number"
            value={phone}
            onChange={phoneChangeHandler}
            id="phone"
            pattern="/(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g"
          />
          <label htmlFor="phone">Phone Number</label>
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
      {
        <div className={!ShowError ? "visually-hidden" : ""}>
          <Alert
            onClose={() => {
              setShowError(false);
              setErrorName(false);
              setErrorSurname(false);
              setErrorEmail(false);
              setErrorPass(false);
              setErrorInvalidPass(false);
              setErrorPhone(false);
              setErrorAdress(false);
            }}
            dismissible
            variant={`${errorType}`}
          >
            {errorMessage}
          </Alert>
        </div>
      }
      <div className="d-grid">
        <button type="submit" className="btn btn-outline-light col-6 mx-auto">
          Sign up
        </button>
      </div>
    </form>
  );
}

export default SignupForm;
