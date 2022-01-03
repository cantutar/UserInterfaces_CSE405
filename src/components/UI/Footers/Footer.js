// import { useTheme } from "../../../store/darkmode-context";

export default function Footer(props) {
  // const theme = useTheme();
  return (
    <div className="container">
      <footer className="py-5">
        <div className="row d-flex justify-content-around">
          <div className="col-3 col-sm-2">
            <h5>Section1</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="https://" className="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://" className="nav-link p-0 text-muted">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://" className="nav-link p-0 text-muted">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://" className="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://" className="nav-link p-0 text-muted">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col-3 col-sm-2">
            <h5>Section2</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="https://" className="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://" className="nav-link p-0 text-muted">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://" className="nav-link p-0 text-muted">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://" className="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://" className="nav-link p-0 text-muted">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col-3 col-sm-2">
            <h5>Section3</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="https://" className="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://" className="nav-link p-0 text-muted">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://" className="nav-link p-0 text-muted">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://" className="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://" className="nav-link p-0 text-muted">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="col-3 col-sm-2">
            <h5>Section4</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="https://" className="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://" className="nav-link p-0 text-muted">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://" className="nav-link p-0 text-muted">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://" className="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://" className="nav-link p-0 text-muted">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-8 mx-auto">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of whats new and exciting from us.</p>
              <div className="d-flex w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex justify-content-between py-4 my-4 border-top">
          <p>© 2021 Your Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-dark" href="https://">
                <i className="fa fa-twitter fa-2x" />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="https://">
                <i className="fa fa-instagram fa-2x" />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="https://">
                <i className="fa fa-facebook fa-2x" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
