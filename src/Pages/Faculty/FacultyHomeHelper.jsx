import React, {useState,useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import {facultyLogout} from '../../redux/action/facultyAction'



const Home = () => {
    const store = useSelector((store)=>store)
    const history = useHistory()
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    useEffect(() => {

        if (store.faculty.faculty.faculty.name) {
            setName(store.faculty.faculty.faculty.name)
        }
    }, [store.faculty.faculty.faculty.name])
    const logoutHandler = () => {
        dispatch(facultyLogout())
        history.push('/')
    }
    return (
            <div className="row">
                <div className="col">
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
                    <Link className="nav-link text-white " to="/home">
                      {name.toUpperCase()}
                    </Link>
                  </li>
                  <li className="nav-item list-unstyled">
                    <Link className="nav-link text-white " to="/faculty/updateProfile">
                     Update Profile
                    </Link>
                  </li>
                  <li className="nav-item list-unstyled">
                    <Link className="nav-link text-white " to="/attendenceFaculty">
                      Mark Attendence
                    </Link>
                  </li>
                  <li className="nav-item list-unstyled">
                    <Link className="nav-link text-white " to="/faculty/uploadMarks">
                     Upload Marks
                    </Link>
                  </li>
                  <li className="nav-item list-unstyled">
                    <Link className="nav-link text-white " to="/faculty/updatePassword">
                     Update Password
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
                </div>
            </div>
    )
}

export default Home
