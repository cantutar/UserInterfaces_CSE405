import Form from "../components/Form/Form";
import classes from "./FormPage.module.css";

function FormPage(props) {
  return (
    <div className="col-lg-8 col-sm-12 mx-auto mt-4">
      <div className="card" style={{ borderRadius: "18px" }}>
        <div className={`card-body ${classes.dark}`}>
          <Form />
          <p className="text-white mt-4 text-center">
            By clicking Sign up button you will agree with{" "}
            <a href="http://" target="_blank" rel="noopener noreferrer">
              user agreement bla bla.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
