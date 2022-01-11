export const switcher = {
  name: "name input error",
  surname: "surname error",
  email: "email error",
  password: "pass error",
  passAgain: "pass again error",
};

function WrongInputError(props) {
  return (
    <>
      <div className="row text-danger">
        {props.ErrorInputName === switcher.name ? (
          <NameInput />
        ) : props.ErrorInputName === switcher.surname ? (
          <SurnameInput />
        ) : props.ErrorInputName === switcher.email ? (
          <EmailError />
        ) : props.ErrorInputName === switcher.password ? (
          <PassError />
        ) : props.ErrorInputName === switcher.passAgain ? (
          <PassAgainError />
        ) : props.ErrorInputName === switcher.phone ? (
          <PhoneError />
        ) : props.ErrorFirebase === switcher.firebase ? (
          <FirebaseError onError={props.onError} />
        ) : null}
      </div>
    </>
  );
}

function NameInput(params) {
  return (
    <>
      <p>
        * First character <mark>MUST</mark> be capital.
        <span>
          Ex: <ins>sTeWaRT</ins> or like <ins>MEhMeT</ins> is not allowed.
        </span>
      </p>
      <p>
        * Supports English alphabets only.{" "}
        <span>
          Ex: <ins>ş,ç,ğ</ins> is not allowed.
        </span>
      </p>
      <p>* Numbers not allowed.</p>
    </>
  );
}
function SurnameInput(params) {
  return (
    <>
      <p>
        * First character <mark>MUST</mark> be capital.
        <span>
          Ex: <ins>sTatHam</ins> or like <ins>TUtaR</ins> is not allowed.
        </span>
      </p>
      <p>
        * Supports English alphabets only.{" "}
        <span>
          Ex: <ins>ş,ç,ğ</ins> is not allowed.
        </span>
      </p>
      <p>* Numbers not allowed.</p>
    </>
  );
}
//TODO fix the pass error
function PassError(params) {
  return (
    <>
      <p>Password is invalid. Please read the rules</p>
      <p>Minimum password length is 8.</p>
      <p>
        Your password needs a minimum 1 lower character and uppercase character.
      </p>
      <p>Your password needs a minimum 1 Numbers and Symbols.</p>
    </>
  );
}
function PassAgainError(params) {
  return (
    <>
      <p>"Passwords doesn't match..."</p>
    </>
  );
}
function EmailError(params) {
  return (
    <>
      <p>
        Please enter a valid E-mail...{" "}
        <span>
          Ex: <ins>test@test.com</ins>
        </span>
      </p>
    </>
  );
}
function PhoneError(params) {
  return (
    <>
      <p>Please enter a valid phone number...</p>
    </>
  );
}
function FirebaseError(props) {
  return (
    <>
      <p>{props.onError}</p>
    </>
  );
}

export default WrongInputError;
