/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Alert } from "react-bootstrap";
import FacebookButton from "../UI/Buttons/FacebookButton";
import GoogleButton from "../UI/Buttons/GoogleButton";
import classes from "./SignupForm.module.css";

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

  const [Name, setName] = useState("");
  function nameChangeHandler(e) {
    setName(e.target.value.trim());
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

    //! Name için regex
    if (Name === "" || null) {
      setShowError(true);
      setErrorName(true);
      setErrorType("danger");
      return setErrorMessage("You can not leave blank this area...");
    } else {
      const nameRegex = /^[A-Z][a-z]*(([,.] |[ '-])[A-Za-z][a-z]*)*(\.?)$/;
      if (nameRegex.test(Name) === true) {
        setShowError(false);
        const surnameRegex = /^[A-Z][a-z]*(([,.] |[ '-])[A-Za-z][a-z]*)*(\.?)$/;
        if (Surname === "" || null) {
          setShowError(true);
          setErrorType("danger");
          setErrorSurname(true);
          setErrorMessage("You can not leave blank this area...");
          return console.log("buraya girdi soyisim");
        } else {
          if (surnameRegex.test(Surname) === true) {
            setShowError(false);
          } else {
            //!email için regex
            if (Email === "" || null) {
              setShowError(true);
              setErrorEmail(true);
              setErrorType("danger");
              console.log("buraya girdi email");
              return setErrorMessage("You can not leave blank email area...");
            } else {
              const emailRegex =
                /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
              if (emailRegex.test(Email) === true) {
                setShowError(false);
                //! password için regex
                if (Password === "" || null) {
                  setShowError(true);
                  setErrorType("danger");
                  return setErrorMessage(
                    "You cannot leave blank password area..."
                  );
                } else {
                  const passRegex =
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
                  if (passRegex.test(Password) === true) {
                    setShowError(false);
                  } else {
                    setShowError(true);
                    setErrorType("danger");
                    setErrorMessage(() => {
                      return (
                        <div className="row">
                          <p>* Min 1 uppercase letter.</p>
                          <p>* Min 1 lowercase letter.</p>
                          <p>* Min 1 special character.</p>
                          <p>* Min 1 number.</p>
                          <p>* Contains no space.</p>
                          <p>* Min 8 characters.</p>
                          <p>* Max 30 characters.</p>
                        </div>
                      );
                    });
                  }
                }
              } else {
                setShowError(true);
                setErrorType("danger");
                setErrorMessage(() => {
                  return (
                    <div className="row">
                      <p>Allah</p>
                    </div>
                  );
                });
              }
            }
          }
        }
      } else {
        console.log("isim1 buraya girdi");
        setShowError(true);
        setErrorType("danger");
        setErrorMessage(() => {
          return (
            <div className="row">
              <p>
                * First character is <mark>MUST</mark> be capital.
              </p>
              <p>
                * Supports English alphabets only.{" "}
                <span>
                  Ex: <del>sTeWaRT</del> or like <del>MEhMeT</del> is not
                  allowed.
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

    console.log(Name, Surname, Password, Email, phone, adress);
    setSurname("");
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
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
        <h4 className="text-center">Or...Sign up with Email.</h4>
      </div>
      <hr />
      <div className="form">
        <div className="row">
          <div
            class={`input-group mb-3 ${errorName ? `${classes.false}` : null}`}
          >
            <span class="input-group-text" id="name">
              <strong>Name</strong>
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="User's Surname"
              value={Name}
              onChange={nameChangeHandler}
            />
          </div>
        </div>
        <div className="row">
          <div
            class={`input-group mb-3 ${
              errorSurname ? `${classes.false}` : null
            }`}
          >
            <span class="input-group-text" id="surname">
              <strong>Surname</strong>
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="User's Surname"
              value={Surname}
              onChange={surnameChangeHandler}
            />
          </div>
        </div>
        <div className="row">
          <div
            class={`input-group mb-3 ${errorEmail ? `${classes.false}` : null}`}
          >
            <span class="input-group-text" id="email">
              <strong>Email</strong>
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="E-mail"
              value={Email}
              onChange={emailChangeHandler}
            />
          </div>
        </div>
        <div className="row">
          <div
            class={`input-group mb-3 ${errorPass ? `${classes.false}` : null}`}
          >
            <span class="input-group-text" id="pass">
              <strong>Password</strong>
            </span>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              value={Password}
              onChange={passwordChangeHandler}
            />
          </div>
        </div>
        <div className="row">
          <div
            class={`input-group mb-3 ${errorPhone ? `${classes.false}` : null}`}
          >
            <span class="input-group-text" id="phone">
              <strong>Phone</strong>
            </span>
            <input
              type="number"
              class="form-control"
              placeholder="Phone number"
              value={phone}
              onChange={phoneChangeHandler}
            />
          </div>
        </div>
        <div className="row">
          <div class="input-group mb-3">
            <span
              class={`input-group mb-3 ${
                errorAdress ? `${classes.false}` : null
              }`}
              id="adress"
            >
              <strong>Adress</strong>
            </span>
            <textarea
              rows={5}
              type="textarea"
              class="form-control"
              placeholder="Please enter Your Adress..."
              value={adress}
              onChange={adressChangeHandler}
            />
          </div>
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
              setErrorName(false);
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
        <button type="submit" className="btn btn-outline-dark btn-block">
          Sign up
        </button>
      </div>
    </form>
  );
}

export default SignupForm;
