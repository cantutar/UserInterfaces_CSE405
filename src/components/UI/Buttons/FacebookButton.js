import classes from "./FacebookButton.module.css";

function FacebookButton(props) {
  return (
    <button
      className={`btn col-lg-4 col-md-3 btn-social ${classes.btnFacebook} mx-auto d-flex justify-content-center`}
    >
      <span className="fa fa-facebook"></span>{" "}
      <strong>Signup with Facebook</strong>
    </button>
  );
}

export default FacebookButton;
