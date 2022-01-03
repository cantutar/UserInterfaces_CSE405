import { useTheme } from "../../store/darkmode-context";

export default function ContentPage(props) {
  const theme = useTheme();
  return (
    <>
      <div className="container mt-5">
        {/* <!-- Three columns of text below the carousel --> */}
        <div className="row">
          <div className="col-lg-4 text-center">
            <img
              className="rounded-circle"
              src="https://via.placeholder.com/140x140"
              alt="Placeholder"
              width="140"
              height="140"
            />

            <h2 className={`text-${theme ? "light" : "dark"}`}>Heading</h2>
            <p className={`text-${theme ? "light" : "dark"}`}>
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <p>
              <a className="btn btn-secondary" href="https:/">
                View details »
              </a>
            </p>
          </div>
          {/* <!-- /.col-lg-4 --> */}
          <div className="col-lg-4 text-center">
            <img
              className="rounded-circle"
              src="https://via.placeholder.com/140x140"
              alt="Placeholder"
              width="140"
              height="140"
            />

            <h2 className={`text-${theme ? "light" : "dark"}`}>Heading</h2>
            <p className={`text-${theme ? "light" : "dark"}`}>
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <p>
              <a className="btn btn-secondary" href="https:/">
                View details »
              </a>
            </p>
          </div>
          {/* <!-- /.col-lg-4 --> */}
          <div className="col-lg-4 text-center">
            <img
              className="rounded-circle"
              src="https://via.placeholder.com/140x140"
              alt="Placeholder"
              width="140"
              height="140"
            />

            <h2 className={`text-${theme ? "light" : "dark"}`}>Heading</h2>
            <p className={`text-${theme ? "light" : "dark"}`}>
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <p>
              <a className="btn btn-secondary" href="https:/">
                View details »
              </a>
            </p>
          </div>
          {/* <!-- /.col-lg-4 --> */}
        </div>
        {/* <!-- /.row --> */}

        {/* <!-- START THE FEATURETTES --> */}

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              First featurette heading.{" "}
              <span className="text-muted">It’ll blow your mind.</span>
            </h2>
            <p className="lead">
              Some great placeholder content for the first featurette here.
              Imagine some exciting prose here.
            </p>
          </div>
          <div className="col-md-5">
            <img
              src="https://via.placeholder.com/500x500"
              alt="Placeholder"
              className="img-fluid"
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
              Oh yeah, it’s that good.{" "}
              <span className="text-muted">See for yourself.</span>
            </h2>
            <p className="lead">
              Another featurette? Of course. More placeholder content here to
              give you an idea of how this layout would work with some actual
              real-world content in place.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              src="https://via.placeholder.com/500x500"
              alt="Placeholder"
              className="img-fluid"
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              And lastly, this one.{" "}
              <span className="text-muted">Checkmate.</span>
            </h2>
            <p className="lead">
              And yes, this is the last block of representative placeholder
              content. Again, not really intended to be actually read, simply
              here to give you a better view of what this would look like with
              some actual content. Your content.
            </p>
          </div>
          <div className="col-md-5">
            <img
              src="https://via.placeholder.com/500x500"
              alt="Placeholder"
              className="img-fluid"
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        {/* <!-- /END THE FEATURETTES --> */}
      </div>
    </>
  );
}
