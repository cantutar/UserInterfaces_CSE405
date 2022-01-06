import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import lost from "../assets/images/lost.svg";
import { useTheme } from "../store/darkmode-context";

function Page404(props) {
  let theme = useTheme();
  return (
    <div className="container-fluid h-100">
      <div className="row">
        <div className="col-md-4 align-self-center text-center">
          <h1 className={`display-1 text-${theme ? "light" : "dark"}`}>404 </h1>
          <h2 className={`display-3 text-${theme ? "light" : "dark"}`}>
            UH OH! You're lost.
          </h2>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>
          <Button type="button" className="btn btn-primary" as={Link} to="/">
            HOME
          </Button>
        </div>
        <div className="col-md-8 align-self-center">
          <img src={lost} className="img-fluid float-end" alt="404" />
        </div>
      </div>
    </div>
  );
}

export default Page404;
