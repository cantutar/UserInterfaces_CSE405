import validator from "validator";

const nameRegex = /^[A-Z][a-z]*(([,.] |[ '-])[A-Za-z][a-z]*)*(\.?)$/,
  surnameRegex = /^[A-Z][a-z]*(([,.] |[ '-])[A-Za-z][a-z]*)*(\.?)$/;
export const ACTIONS = {
  FIELD: "field",
  NAME_INPUT_FIELD: "name input field",
  SURNAME_INPUT_FIELD: "surname input field",
  EMAIL_INPUT_FIELD: "email input field",
  PHONE_INPUT_FIELD: "phone input field",
  ADRESS_INPUT_FIELD: "adress input field",
  PASSWORD_INPUT_FIELD: "password input field",
  PASSWORDEQ_INPUT_FIELD: "password equal success",
  FORM_VALIDITY: "form is valid",
  PASS_INPUT_TYPE: "form input type",
  CLEAN_FORM: "form cleaner",
  LOADING: "loading",
};
export function SignupReducer(state, action) {
  switch (action.type) {
    case ACTIONS.FIELD:
      return { ...state, [action.FIELD]: action.value };
    case ACTIONS.NAME_INPUT_FIELD:
      return {
        ...state,
        [action.FIELD]: action.value,
        errorName: !nameRegex.test(action.value),
      };
    case ACTIONS.SURNAME_INPUT_FIELD:
      return {
        ...state,
        [action.FIELD]: action.value,
        errorSurname: !surnameRegex.test(action.value),
      };
    case ACTIONS.EMAIL_INPUT_FIELD:
      return {
        ...state,
        [action.FIELD]: action.value,
        errorEmail: !validator.isEmail(action.value),
      };
    case ACTIONS.PHONE_INPUT_FIELD:
      // return { ...state, [action.FIELD]: action.value };

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
      return {
        ...state,
        [action.FIELD]: formatPhoneNumber(action.value),
        errorPhone: !validator.isMobilePhone(action.value),
      };
    case ACTIONS.ADRESS_INPUT_FIELD:
      return {
        ...state,
        [action.FIELD]: action.value,
        errorAdress: action.value !== String ? false : true,
      };
    case ACTIONS.PASSWORD_INPUT_FIELD:
      return {
        ...state,
        [action.FIELD]: action.value,
        errorPass: !validator.isStrongPassword(action.value),
      };
    case ACTIONS.PASSWORDEQ_INPUT_FIELD:
      return {
        ...state,
        [action.FIELD]: action.value,
        passEqual: state.Password !== action.value,
      };
    case ACTIONS.FORM_VALIDITY:
      return {
        ...state,
        isFormNotValid:
          state.errorName &&
          state.errorSurname &&
          state.errorEmail &&
          state.errorPass &&
          state.passEqual &&
          state.errorPhone &&
          state.errorAdress,
      };
    case ACTIONS.PASS_INPUT_TYPE:
      return { ...state, typePass: !state.typePass };
    case ACTIONS.CLEAN_FORM:
      return {
        ...state,
        Name: "",
        Surname: "",
        Password: "",
        passAgain: "",
        Email: "",
        Phone: "",
        Adress: "",
      };
    case ACTIONS.LOADING:
      return { ...state, isLoading: !action.value };
    default:
      return state;
  }
}
