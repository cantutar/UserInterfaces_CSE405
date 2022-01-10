import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../store/auth-context";

export default function ProtectedRoutes(props) {
  const { currentUser } = useAuth();
  //   const isLoggedin = true;
  console.log(!currentUser);
  return !currentUser ? <Outlet /> : <Navigate to="/signup" />;
}
