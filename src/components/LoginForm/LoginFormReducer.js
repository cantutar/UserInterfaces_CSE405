import validator from "validator";
export const actions = {
  EMAIL_INPUT_FIELD: "email input field",
  PASSWORD_INPUT_FIELD: "password input field",
  PASS_INPUT_TYPE: "form input type change",
  RECAPTCHA: "recaptcha",
  FORM_VALIDITY: "form is valid",
  LOADING: "loading",
};
export function LoginReducer(state, action) {
  switch (action.type) {
    case actions.EMAIL_INPUT_FIELD:
      return {
        ...state,
        [action.FIELD]: action.value,
        errorLoginEmail: !validator.isEmail(action.value),
      };
    case actions.PASSWORD_INPUT_FIELD:
      return {
        ...state,
        [action.FIELD]: action.value,
        errorLoginPass: !validator.isStrongPassword(action.value),
      };
    case actions.RECAPTCHA:
      return { ...state, recaptchaValue: !action.value };
    case actions.FORM_VALIDITY:
      return {
        ...state,
        isLoginFormNotValid:
          state.recaptchaValue && state.errorLoginEmail && state.errorLoginPass,
      };
    case actions.PASS_INPUT_TYPE:
      console.log(state);
      return { ...state, loginTypePass: !state.loginTypePass };
    case actions.LOADING:
      return { ...state, isLoginFormNotValid: action.value };
    default:
      return state;
  }
}
