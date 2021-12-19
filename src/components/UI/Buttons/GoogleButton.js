import classes from "./GoogleButton.module.css";

export default function GoogleButton(props) {
  return (
    <button
      className={`btn btn-social ${classes.btnGoogle} col-lg-4 col-md-3 mx-auto d-flex justify-content-center`}
    >
      <span className="fa fa-google"></span>{" "}
      <strong>Continue with Google</strong>
    </button>
  );
}
