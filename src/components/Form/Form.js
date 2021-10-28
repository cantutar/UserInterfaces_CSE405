import { useState } from "react";
import FacebookButton from "../UI/Buttons/FacebookButton";
import GoogleButton from "../UI/Buttons/GoogleButton";

function Form(props) {
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
    const nameRegex = /^[a-zA-Z\-]+$/;

    console.log(Name, Surname, Password, Email);
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
      <hr className="mt-5 mb-4" />
      <div className="row">
        <h4 className="text-center">Or...Sign up with Email.</h4>
      </div>
      <div className="form">
        <div className="row">
          <div className="col">
            <div class="input-group mb-3">
              <span class="input-group-text">Name</span>
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
          <div className="col">
            <div class="input-group mb-3">
              <span class="input-group-text">Surname</span>
              <input
                type="text"
                class="form-control"
                placeholder="User's Surname"
                value={Surname}
                onChange={surnameChangeHandler}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div class="input-group mb-3">
            <span class="input-group-text">Email</span>
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
              Password
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Password"
              value={Password}
              onChange={passwordChangeHandler}
            />
          </div>
        </div>
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-outline-dark btn-block">
          Sign up
        </button>
      </div>
    </form>
  );
}

export default Form;
