import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { facultyLogin } from "../../redux/action/facultyAction";
import { studentLogin } from "../../redux/action/studentAction";
import classnames from "classnames";
import Caraousel from "../Caraousel";
import Footer from "../Footer";
import EventNews from "../EventNews";

const FacultyStudentLoginPags = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [facultyRegNum, setFacultyRegNum] = useState("");
  const [facultyPassword, setFacultyPassword] = useState("");
  const [studentRegNum, setStudentRegNum] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [errorsHelper, setErrorsHelper] = useState({});
  const [isFacultyLoading, setIsFacultyLoading] = useState(false);
  const [isStudentLoading, setIsStudentLoading] = useState(false);
  const refClose = useRef(null);

  const history = useHistory();

  useEffect(() => {
    if (store.faculty.isAuthenticated) {
      history.push("/faculty");
    }
  }, [store.faculty.isAuthenticated]);

  useEffect(() => {
    if (store.error) {
      setErrors(store.error);
    }
  }, [store.error]);
  useEffect(() => {
    if (store.student.isAuthenticated) {
      history.push("/home");
    }
  }, [store.student.isAuthenticated]);

  useEffect(() => {
    if (store.errorHelper) {
      setErrorsHelper(store.errorHelper);
    }
  }, [store.errorHelper]);

  const facultyFormHandler = (e) => {
    e.preventDefault();
    let registrationNumber;
    let password;
    setIsFacultyLoading(true);
    dispatch(
      facultyLogin({
        registrationNumber: facultyRegNum,
        password: facultyPassword,
      })
    );
  };

  useEffect(() => {
    if (store.error || store.faculty.isAuthenticated) {
      setIsFacultyLoading(false);
    } else {
      setIsFacultyLoading(true);
    }
  }, [store.error, store.faculty.isAuthenticated]);

  const studentFormHandler = (e) => {
    e.preventDefault();
    let registrationNumber;
    let password;
    setIsStudentLoading(true);
    dispatch(
      studentLogin({
        registrationNumber: studentRegNum,
        password: studentPassword,
      })
    );
  };

  useEffect(() => {
    if (store.errorHelper || store.student.isAuthenticated) {
      setIsStudentLoading(false);
    } else {
      setIsStudentLoading(false);
    }
  }, [store.errorHelper, store.student.isAuthenticated]);

  return (
    <>
      <nav className="fixed navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          RK Engineering College
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>
          <li className="nav-item active list-unstyled">
            <Link className="nav-link text-white" to="#">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item list-unstyled">
            <Link className="nav-link  text-white" to="/adminLogin">
              Admin
            </Link>
          </li>
          <li className="nav-item list-unstyled">
            <div
              type="button"
              className="text-white  nav-link"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Faculty
            </div>
          </li>
          <li className="nav-item list-unstyled">
            <div
              type="button"
              className=" text-white nav-link"
              data-toggle="modal"
              data-target="#exampleModal1"
            >
              Student
            </div>
          </li>
        </div>
      </nav>
      {/* Faculty Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Faculty Login
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div
                className=" m-auto border"
                style={{
                  backgroundColor: "white",
                  padding: "1rem 1rem 0rem 1rem",
                }}
              >
                <div>
                  <form noValidate>
                    <div className="form-group">
                      <label htmlFor="facRegId">Registration Number</label>
                      <input
                        onChange={(e) => setFacultyRegNum(e.target.value)}
                        type="text"
                        value={facultyRegNum}
                        className={classnames("form-control", {
                          "is-invalid": errors.registrationNumber,
                        })}
                        id="facRegId"
                      />
                      {errors.registrationNumber && (
                        <div className="invalid-feedback">
                          {errors.registrationNumber}
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="passwordFacId">Password</label>
                      <input
                        onChange={(e) => setFacultyPassword(e.target.value)}
                        value={facultyPassword}
                        className={classnames("form-control", {
                          "is-invalid": errors.password,
                        })}
                        type="password"
                        id="passwordFacId"
                      />
                      {errors.password && (
                        <div className="invalid-feedback">
                          {errors.password}
                        </div>
                      )}
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-md-1">
                        {isFacultyLoading && (
                          <div
                            className="spinner-border text-primary"
                            role="status"
                          >
                            <span className="sr-only">Loading...</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {!isFacultyLoading && (
                      <button
                        className="btn btn-info btn-block"
                        onClick={facultyFormHandler}
                      >
                        Login
                      </button>
                    )}
                  </form>
                  <p className="text-center mt-2 ">
                    <Link className="text-center" to="/forgotPassword/faculty">
                      Forgot Password
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Student Modal */}
      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel1"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel1">
                Student Login
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div
                className=" m-auto border"
                style={{
                  backgroundColor: "white",
                  padding: "1rem 1rem 0rem 1rem",
                }}
              >
                <div>
                  <form noValidate>
                    <div className="form-group">
                      <label htmlFor="studentId">Registration Number</label>
                      <input
                        onChange={(e) => setStudentRegNum(e.target.value)}
                        type="text"
                        value={studentRegNum}
                        className={classnames("form-control", {
                          "is-invalid": errorsHelper.registrationNumber,
                        })}
                        id="studentId"
                      />
                      {errorsHelper.registrationNumber && (
                        <div className="invalid-feedback">
                          {errorsHelper.registrationNumber}
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="passwordId">Password</label>
                      <input
                        onChange={(e) => setStudentPassword(e.target.value)}
                        value={studentPassword}
                        className={classnames("form-control", {
                          "is-invalid": errorsHelper.password,
                        })}
                        type="password"
                        id="passwordId"
                      />
                      {errorsHelper.password && (
                        <div className="invalid-feedback">
                          {errorsHelper.password}
                        </div>
                      )}
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-md-1">
                        {isStudentLoading && (
                          <div
                            className="spinner-border text-primary"
                            role="status"
                          >
                            <span className="sr-only">Loading...</span>
                          </div>
                        )}
                      </div>
                    </div>
                    {!isStudentLoading && (
                      <button
                        onClick={studentFormHandler}
                        className="btn btn-info btn-block "
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        Login
                      </button>
                    )}
                  </form>
                  <p className="text-center">
                    <Link className="text-center" to="/forgotPassword/student">
                      Forgot Password
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Caraousel />
      <EventNews />
      <Footer />
    </>
  );
};

export default FacultyStudentLoginPags;
