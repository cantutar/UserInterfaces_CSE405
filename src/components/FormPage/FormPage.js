import classNames from "./FormPage.module.css";
import bg from "../../assets/images/background1.jpg";
import SignupForm from "../SignUpForm/SignUpForm";

function FormPage(props) {
  return (
    <div className={`vh-100 bg-${classNames.dark}`}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className={`card my-4 ${classNames.cardBoxCam}`}>
              <div className="row g-0">
                <div className="col-xl-6 px-4">
                  <SignupForm />
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
