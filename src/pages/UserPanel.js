import { useAuth } from "../store/auth-context";

export default function UserPanel(props) {
  const { displayName, verifiedEmail } = useAuth();
  return (
    <div className="text-center">
      <h1>{`Welcome! ${displayName}`} </h1>
      <p>{`Your acc is ${verifiedEmail ? "verified" : "not verified"}`}</p>
    </div>
  );
}
