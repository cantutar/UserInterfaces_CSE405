export const ACTIONS = {
  FIELD: "field",
  NAME_ERROR: "name error",
  NAME_SUCCESS: "name success",
  SURNAME_ERROR: "surname error",
  SURNAME_SUCCESS: "surname success",
  EMAIL_ERROR: "email error",
  EMAIL_SUCCESS: "email success",
  PHONE_ERROR: "phone error",
  PHONE_SUCCESS: "phone success",
  ADRESS_ERROR: "adress error",
  ADRESS_SUCCESS: "adress success",
  PASSWORD_ERROR: "password error",
  PASSWORD_SUCCESS: "password success",
  PASSWORDEQ_ERROR: "password equal error",
  PASSWORDEQ_SUCCESS: "password equal success",
};
//TODO fix the states with correct ones.
export function SignupReducer(state, action) {
  switch (action.type) {
    case ACTIONS.FIELD:
      return { ...state, [action.field]: action.value };
    case ACTIONS.NAME_ERROR:
      return {
        ...state,
        errorName: true,
        ShowError: true,
      };
    case ACTIONS.NAME_SUCCESS:
      return {
        ...state,
        errorName: false,
        ShowError: false,
      };
    case ACTIONS.SURNAME_ERROR:
      return {
        ...state,
        errorSurname: true,
        ShowError: true,
      };
    case ACTIONS.SURNAME_SUCCESS:
      return {
        ...state,
        errorSurname: false,
        ShowError: false,
      };
    case ACTIONS.EMAIL_ERROR:
      return {
        ...state,
        errorName: true,
        ShowError: true,
      };
    case ACTIONS.EMAIL_SUCCESS:
      return {
        ...state,
        errorName: false,
        ShowError: false,
      };
    case ACTIONS.PHONE_ERROR:
      return {
        ...state,
        errorSurname: true,
        ShowError: true,
      };
    case ACTIONS.PHONE_SUCCESS:
      return {
        ...state,
        errorSurname: false,
        ShowError: false,
      };
    case ACTIONS.ADRESS_ERROR:
      return {
        ...state,
        errorName: true,
        ShowError: true,
      };
    case ACTIONS.ADRESS_SUCCESS:
      return {
        ...state,
        errorName: false,
        ShowError: false,
      };
    case ACTIONS.PASSWORD_ERROR:
      return {
        ...state,
        errorSurname: true,
        ShowError: true,
      };
    case ACTIONS.PASSWORD_SUCCESS:
      return {
        ...state,
        errorSurname: false,
        ShowError: false,
      };
    case ACTIONS.PASSWORDEQ_ERROR:
      return {
        ...state,
        errorSurname: true,
        ShowError: true,
      };
    case ACTIONS.PASSWORDEQ_SUCCESS:
      return {
        ...state,
        errorSurname: false,
        ShowError: false,
      };

    default:
      return state;
  }
}
