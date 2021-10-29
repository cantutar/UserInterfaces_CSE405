import Form from "../components/Form/Form";

function FormPage(props) {
  return (
    <div className="col-lg-8 col-sm-12 mx-auto mt-4">
      <div className="card">
        <div className="card-body">
          <Form />
          <p>
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
