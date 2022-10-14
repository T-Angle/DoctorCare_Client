import React from "react";
import logo from "../assets/images/logo.jpg";
import "../styles/signup.css"

function Signup() {
  return (
    <section className="vh-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-black">
            <div className="px-5 ms-xl-4">
              <img src={logo} alt={logo} className="logo-icon" />
              {/* <div className="h1 fw-bold mb-0">Appointment Booking System</div> */}
            </div>

            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
              <form style={{ width: "23rem" }}>
                <h3
                  className="fw-normal mb-3 pb-3"
                  style={{ letterSpacing: "1px", textAlign: "center" }}
                >
                  SIGN UP
                </h3>

                <div className="mb-4">
                    <label className="form-label" htmlFor="form2Example18">
                        Email address
                    </label>
                  <input
                    type="email"
                    // id="form2Example18"
                    className="form-control form-control-lg"
                  />
                  {/* <label className="form-label" htmlFor="form2Example18">
                    Email address
                  </label> */}
                </div>

                <div className=" mb-4">
                    <label className="form-label" htmlFor="form2Example28">
                        Password
                    </label>
                  <input
                    type="password"
                    // id="form2Example28"
                    className="form-control form-control-lg"
                  />
                  {/* <label className="form-label" htmlFor="form2Example28">
                    Password
                  </label> */}
                </div>

                <div className=" mb-4">
                    <label className="form-label" htmlFor="form2Example28">
                        Confirm password
                    </label>
                  <input
                    type="password"
                    // id="form2Example28"
                    className="form-control form-control-lg"
                  />
                  {/* <label className="form-label" htmlFor="form2Example28">
                    Confirm password
                  </label> */}
                </div>

                <div className="mb-4">
                    <label className="form-label" htmlFor="form2Example38">
                        Address
                    </label>
                  <input
                    type="address"
                    // id="form2Example38"
                    className="form-control form-control-lg"
                  />
                  {/* <label className="form-label" htmlFor="form2Example38">
                    Address
                  </label> */}
                </div>

                <div className="mb-4">
                    <label className="form-label" htmlFor="form2Example48">
                        Phone number
                    </label>
                  <input
                    type="phone-number"
                    // id="form2Example48"
                    className="form-control form-control-lg"
                  />
                  {/* <label className="form-label" htmlFor="form2Example48">
                    Phone number
                  </label> */}
                </div>

                <div className="pt-1 mb-4">
                  <button
                    className="btn btn-info btn-lg btn-block"
                    type="button"
                  >
                    Sign up
                  </button>
                </div>

                {/* <p className="small mb-5 pb-lg-2">
                  <a className="text-muted" href="#!">
                    Forgot password?
                  </a>
                </p> */}
                <p>
                  I have an account!{" "}
                  <a href="#!" className="link-info">
                    Log in here
                  </a>
                </p>
              </form>
            </div>
          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block">
            <img
              src={"https://source.unsplash.com/random?clinic"}
              alt={"logo"}
              className="w-100 vh-100"
              style={{ objectFit: "cover", objectPosition: "left" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
