import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { adminLogout } from "../../redux/action/adminAction";

const Home = () => {
  const store = useSelector((store) => store);
  const [name, setName] = useState("");
  useEffect(() => {
    if (store.admin.admin.name) {
      setName(store.admin.admin.name);
    }
  }, [store.admin.admin.name]);
  const history = useHistory();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(adminLogout());
    history.push("/");
  };
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
            <Link className="nav-link text-white " to="/admin">
              {name.toUpperCase()}
            </Link>
          </li>
          <li className="nav-item list-unstyled">
            <Link className="nav-link text-white " to="/admin/addFaculty">
              Add Faculty
            </Link>
          </li>
          <li className="nav-item list-unstyled">
            <Link className="nav-link text-white " to="/admin/addStudent">
              Add Student
            </Link>
          </li>
          <li className="nav-item list-unstyled">
            <Link className="nav-link text-white " to="/admin/addSubject">
              Add Subject
            </Link>
          </li>
          <li className="nav-item list-unstyled">
            <Link className="nav-link text-white " to="/admin/addAdmin">
              Add Admin
            </Link>
          </li>
          <li className="nav-item list-unstyled">
            <Link className="nav-link text-white " to="/admin/allFaculties">
              {" "}
              Faculties List
            </Link>
          </li>
          <li className="nav-item list-unstyled">
            <Link className="nav-link text-white " to="/admin/allStudents">
              {" "}
              Students List
            </Link>
          </li>
          <li className="nav-item list-unstyled">
            <Link className="nav-link text-white " to="/admin/allSubject">
              Subjects List
            </Link>
          </li>
          <div>
            <button
              style={{ listStyle: "None" }}
              onClick={logoutHandler}
              type="button"
              className="btn"
            >
              <li className="text-white">Logout</li>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Home;
