import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { studentLogout} from '../../redux/action/studentAction'


const Home = () => {
    const history = useHistory()
    const store = useSelector((store) => store)
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    useEffect(() => {
        if (store.student.student.student.name) {
            setName(store.student.student.student.name)
        }
    }, [store.student.student.student.name])
   
    const logoutHandler = () => {
        dispatch(studentLogout())
        history.push('/')
    }
    return (
        <div className="fluid">
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
                    <Link className="nav-link text-white " to="/student/updateProfile">
                     Update Profile
                    </Link>
                  </li>
                  <li className="nav-item list-unstyled">
                    <Link className="nav-link text-white " to="/student/testPerformance">
                     Test Performance
                    </Link>
                  </li>
                  <li className="nav-item list-unstyled">
                    <Link className="nav-link text-white " to="/student/attendence">
                     Attendence
                    </Link>
                  </li>
                  <li className="nav-item list-unstyled">
                    <Link className="nav-link text-white " to="/student/getAllSubjects">
                     Subject List
                    </Link>
                  </li>
                  <li className="nav-item list-unstyled">
                    <Link className="nav-link text-white " to="/student/updatePassword">
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
        </div>
    )
}

export default Home
