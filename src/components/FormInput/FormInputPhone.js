import classes from "../SignUpForm/SignupForm.module.css";
export default function FormInputPhone(props) {
  return (
    <div className={`form-floating ${props.cssClasses}`}>
      <input
        type={props.type}
        className={`form-control ${props.error ? `is-invalid` : null}`}
        placeholder={`User's ${props.InputName}`}
        onChange={props.onChangeHandler}
        id={props.InputName}
        value={props.value}
        onKeyPress={(e) => {
          e.key === "Enter" && e.preventDefault();
        }}
      />
      <label
        htmlFor={props.InputName}
        className={`${props.error ? `is-invalid ${classes.false}` : null}`}
      >
        {props.InputNameLabel}
      </label>
    </div>
  );
}
