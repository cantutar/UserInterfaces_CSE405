import classNames from "./FormPage.module.css";
import bg from "../../assets/images/background1.jpg";
import SignupForm from "../SignUpForm/SignUpForm";
import LoginForm from "../LoginForm/LoginForm";
import { useState } from "react";
import { useAuth } from "../../store/auth-context";

function FormPage(props) {
  const { setReValue } = useAuth();
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    return setReValue(false);
  };

  const handleShow = () => setShow(true);
  return (
    <div className={`vh-100 bg-${classNames.dark}`}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className={`card my-4 ${classNames.cardBoxCam}`}>
              <div
                className={`row g-0 ${
                  props.onPage === "signup"
                    ? ""
                    : "d-flex justify-content-center align-items-center h-100"
                }`}
              >
                <div className="col-xl-6 px-4">
                  {props.onPage === "signup" ? (
                    <SignupForm
                      show={show}
                      onShow={handleShow}
                      onClose={handleClose}
                    />
                  ) : (
                    <LoginForm
                      show={show}
                      onShow={handleShow}
                      onClose={handleClose}
                    />
                  )}
                </div>
                <div className="col-xl-6 d-none d-xl-block">
                  <img
                    src={bg}
                    alt="Sample_photo"
                    className={`img-fluid ${classNames.imgForm}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
