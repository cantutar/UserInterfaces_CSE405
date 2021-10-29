import { useState } from "react";
import { Alert } from "react-bootstrap";
import FacebookButton from "../UI/Buttons/FacebookButton";
import GoogleButton from "../UI/Buttons/GoogleButton";

function Form(props) {
  const [errorType, setErrorType] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [ShowError, setShowError] = useState(false);

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

  function onSubmitHandler(e) {
    e.preventDefault();

    //!Name ve surname için regex
    if (Name === "" || (null && Surname === "") || null) {
      setShowError(true);
      setErrorType("danger");
      setErrorMessage("You can not leave blank this area...");
    } else {
      const nameRegex = /^[A-Z][a-z]*(([,.] |[ '-])[A-Za-z][a-z]*)*(\.?)$/;
      if (nameRegex.test(Name && Surname) === true) {
        setShowError(false);
      } else {
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

    // console.log(Name, Surname, Password, Email);
    setSurname("");
    setName("");
    setEmail("");
    setPassword("");
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
          <div class="input-group mb-3">
            <span class="input-group-text">
              <strong>Name</strong>
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="User's name"
              aria-label="User's name"
              value={Name}
              onChange={nameChangeHandler}
            />
          </div>
        </div>
        <div className="row">
          <div class="input-group mb-3">
            <span class="input-group-text">
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
          <div class="input-group mb-3">
            <span class="input-group-text">
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
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
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
      </div>
      {
        <div className={!ShowError ? "visually-hidden" : ""}>
          <Alert
            onClose={() => setShowError(false)}
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

export default Form;
