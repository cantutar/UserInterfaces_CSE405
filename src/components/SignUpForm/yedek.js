/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
const [errorType, setErrorType] = useState("");
const [ShowError, setShowError] = useState(false);
const [errorName, setErrorName] = useState(false);
const [errorSurname, setErrorSurname] = useState(false);
const [errorPhone, setErrorPhone] = useState(false);
const [errorAdress, setErrorAdress] = useState(false);
const [errorEmail, setErrorEmail] = useState(false);
const [errorPass, setErrorPass] = useState(false);
const [typePass, setTypePass] = useState(false);
const [infoPass, setInfoPass] = useState(false);
// const [formIsValid, setFormIsValid] = useState(false);
const [errorInvalidPass, setErrorInvalidPass] = useState(false);
const nameRegex = /^[A-Z][a-z]*(([,.] |[ '-])[A-Za-z][a-z]*)*(\.?)$/;
const surnameRegex = /^[A-Z][a-z]*(([,.] |[ '-])[A-Za-z][a-z]*)*(\.?)$/;
// const passRegex =
// /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

// if (phone === "" || null) {
//   return dispatch({ type: ACTIONS.PHONE_SUCCESS });
//   // return setErrorMessage(() => {
//   //   return (
//   //     <div>
//   //       <p>Phone number area cannot leave empty...</p>
//   //     </div>
//   //   );
//   // });
// } else {
//   if (validator.isMobilePhone(phone) === true) {
//     return dispatch({ type: ACTIONS.PHONE_SUCCESS });
//   } else {
//     return dispatch({ type: ACTIONS.PHONE_ERROR });
//     // return setErrorMessage(() => {
//     //   return (
//     //     <div>
//     //       <p>Phone number is invalid...</p>
//     //       <p>
//     //         Ex: Please enter like <ins>(xxx)xxx xxxx</ins>
//     //       </p>
//     //     </div>
//     //   );
//     // });
//   }
// }
