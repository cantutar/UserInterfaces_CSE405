export const ACTIONS = {
  FIELD: "field",
  NAME_ERROR: "name error",
  NAME_EMPTY: "name empty field",
  NAME_SUCCESS: "name success",
  SURNAME_ERROR: "surname error",
  SURNAME_EMPTY: "surname empty field",
  SURNAME_SUCCESS: "surname success",
  EMAIL_ERROR: "email error",
  EMAIL_EMPTY: "email empty field",
  EMAIL_SUCCESS: "email success",
  PHONE_INPUT: "phone input field",
  PHONE_ERROR: "phone error",
  PHONE_EMPTY: "phone empty field",
  PHONE_SUCCESS: "phone success",
  ADRESS_ERROR: "adress error",
  ADRESS_EMPTY: "adress empty",
  ADRESS_SUCCESS: "adress success",
  PASSWORD_ERROR: "password error",
  PASSWORD_EMPTY: "password empty",
  PASSWORD_SUCCESS: "password success",
  PASSWORDEQ_ERROR: "password equal error",
  PASSWORDEQ_EMPTY: "password equal empty",
  PASSWORDEQ_SUCCESS: "password equal success",
  FORM_VALIDITY_VALID: "form is valid",
  FORM_VALIDITY_VALID_POINTS: "form points",
  PASS_INPUT_TYPE: "form input type",
};
export function SignupReducer(state, action) {
  switch (action.type) {
    case ACTIONS.FIELD:
      return { ...state, [action.FIELD]: action.value };
    case ACTIONS.NAME_ERROR:
      return {
        ...state,
        errorName: true,
      };
    case ACTIONS.NAME_EMPTY:
      return {
        ...state,
        errorName: true,
      };
    case ACTIONS.NAME_SUCCESS:
      return {
        ...state,
        errorName: false,
      };
    case ACTIONS.SURNAME_ERROR:
      return {
        ...state,
        errorSurname: true,
      };
    case ACTIONS.SURNAME_EMPTY:
      return {
        ...state,
        errorSurname: true,
      };
    case ACTIONS.SURNAME_SUCCESS:
      return {
        ...state,
        errorSurname: false,
      };
    case ACTIONS.EMAIL_ERROR:
      return {
        ...state,
        errorEmail: true,
      };
    case ACTIONS.EMAIL_EMPTY:
      return {
        ...state,
        errorEmail: true,
      };
    case ACTIONS.EMAIL_SUCCESS:
      return {
        ...state,
        errorEmail: false,
      };
    case ACTIONS.PHONE_INPUT:
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
      console.log(state);

      return { ...state, [action.FIELD]: formatPhoneNumber(action.value) };
    case ACTIONS.PHONE_ERROR:
      return {
        ...state,
        errorPhone: true,
      };
    case ACTIONS.PHONE_EMPTY:
      return {
        ...state,
        errorPhone: true,
      };
    case ACTIONS.PHONE_SUCCESS:
      return {
        ...state,
        errorPhone: false,
      };
    case ACTIONS.ADRESS_ERROR:
      return {
        ...state,
        errorAdress: true,
      };
    case ACTIONS.ADRESS_EMPTY:
      return {
        ...state,
        errorAdress: true,
      };
    case ACTIONS.ADRESS_SUCCESS:
      return {
        ...state,
        errorAdress: false,
      };
    case ACTIONS.PASSWORD_ERROR:
      return {
        ...state,
        errorSurname: true,
      };
    case ACTIONS.PASSWORD_EMPTY:
      return {
        ...state,
        errorSurname: true,
      };
    case ACTIONS.PASSWORD_SUCCESS:
      return {
        ...state,
        errorSurname: false,
      };
    case ACTIONS.PASSWORDEQ_ERROR:
      return {
        ...state,
        passEqual: true,
      };
    case ACTIONS.PASSWORDEQ_EMPTY:
      return {
        ...state,
        errorSurname: true,
      };
    case ACTIONS.PASSWORDEQ_SUCCESS:
      return {
        ...state,
        passEqual: false,
      };
    case ACTIONS.FORM_VALIDITY_VALID:
      return {
        ...state,
        isFormValid: true,
      };
    case ACTIONS.FORM_VALIDITY_VALID_POINTS:
      return {
        ...state,

        pointsForValid: ++state.pointsForValid,
      };
    case ACTIONS.PASS_INPUT_TYPE:
      return { ...state, typePass: !state.typePass };
    default:
      return state;
  }
}
