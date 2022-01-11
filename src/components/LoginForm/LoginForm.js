import { useReducer, useRef } from "react";
import FormInput from "../FormInput/FormInput";
import { LoginReducer, actions } from "./LoginFormReducer";
import Socials from "../UI/Buttons/Socials";
import classes from "../SignUpForm/SignupForm.module.css";
import WrongInputError, { switcher } from "../Error/WrongInputError";
import { useDebounce } from "../../hooks/debounce";
import { useAuth, firebaseErrors } from "../../store/auth-context";
import { useNavigate } from "react-router-dom";
//TODO fix css

const initialState = {
  loginEmail: "",
  loginPassword: "",
  errorLoginEmail: false,
  errorLoginPass: false,
  loginTypePass: false,
  isLoginLoading: false,
  isLoginFormNotValid: true,
};
function LoginForm(props) {
  const { signin } = useAuth();
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(LoginReducer, initialState);
  const emailRef = useRef();
  const passwordRef = useRef();
  const {
    loginEmail,
    loginPassword,
    errorLoginEmail,
    // errorLoginPass,
    loginTypePass,
    isLoginLoading,
    isLoginFormNotValid,
  } = state;

  function emailChangeHandler(e) {
    dispatch({
      type: actions.EMAIL_INPUT_FIELD,
      FIELD: "loginEmail",
      value: e.target.value.toLowerCase().trim(),
    });
  }
  function passwordChangeHandler(e) {
    dispatch({
      type: actions.PASSWORD_INPUT_FIELD,
      FIELD: "loginPassword",
      value: e.target.value.trim(),
    });
  }
  function buttonTogglerHandler() {
    return dispatch({ type: actions.PASS_INPUT_TYPE });
  }
  function disabledHandler() {
    if (loginEmail && loginPassword) {
      dispatch({ type: actions.FORM_VALIDITY });
    }
  }
  useDebounce(disabledHandler, 100);
  function onSubmitHandler(e) {
    e.preventDefault();
    try {
      dispatch({ type: actions.LOADING, value: true });
      signin(emailRef.current.value, passwordRef.current.value)
        .then(() => navigate("/"))
        .catch((err) => alert(firebaseErrors[err.code]));
      dispatch({ type: actions.LOADING, value: false });

      // return navigate("/");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div className="row text-center mt-3">
          <h2 className={`fs-1 ${classes.formYazi}`}>Sign in your account</h2>
        </div>
        <div className="row mt-3">
          <Socials />
        </div>
        <div className="row mt-2 mb-1">
          <p className="text-center">...or sign in with e-mail:</p>
        </div>
        {/* E-mail */}
        <div className="mb-3">
          <FormInput
            type={"email"}
            error={errorLoginEmail}
            InputName={"loginEmail"}
            InputNameLabel={"E-mail"}
            onChangeHandler={emailChangeHandler}
            inputRef={emailRef}
          />
          {errorLoginEmail && (
            <WrongInputError ErrorInputName={switcher.email} />
          )}
        </div>
        {/* pass */}
        <div className="row mb-3">
          <div className="input-group">
            <FormInput
              type={loginTypePass ? "text" : "password"}
              InputName={"loginPassword"}
              InputNameLabel={"Password"}
              onChangeHandler={passwordChangeHandler}
              cssClasses={"col-lg-11 col-sm-10"}
              inputRef={passwordRef}
            />
            <button
              type="button"
              className={
                loginTypePass
                  ? `btn ${classes.formButtonRed} col-lg-1 col-sm-2`
                  : `btn ${classes.formButtonMavi} col-lg-1 col-sm-2`
              }
              onClick={buttonTogglerHandler}
            >
              <span className="fa fa-fw fa-eye" />
            </button>
          </div>
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className={`btn col-6 mx-auto ${classes.formButton}`}
            disabled={isLoginLoading || isLoginFormNotValid}
          >
            Sign in
          </button>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
