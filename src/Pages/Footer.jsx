import React from 'react'
import {  Link } from "react-router-dom";

import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillTwitterSquare,
    AiFillLinkedin,
    AiFillYoutube,
    AiFillGoogleCircle
  } from "react-icons/ai";
const Footer = () => {
  return (
<div className=" ">
<footer className="text-center text-white" style={{backgroundColor: "#3f51b5"}}>
  <div className="container">
    <section className="mt-5">
      <div className="row text-center d-flex justify-content-center pt-5">
        <div className="col-md-2">
          <h6 className="text-uppercase font-weight-bold">
            <Link to="/" className="text-white text-decoration-none">About us</Link>
          </h6>
        </div>

        <div className="col-md-2">
          <h6 className="text-uppercase font-weight-bold">
            <Link to="/" className="text-white text-decoration-none">Events</Link>
          </h6>
        </div>

        <div className="col-md-2">
          <h6 className="text-uppercase font-weight-bold">
            <Link to="/" className="text-white text-decoration-none">Awards</Link>
          </h6>
        </div>

        <div className="col-md-2">
          <h6 className="text-uppercase font-weight-bold">
            <Link to="/" className="text-white text-decoration-none">Help</Link>
          </h6>
        </div>

        <div className="col-md-2">
          <h6 className="text-uppercase font-weight-bold">
            <Link to="/" className="text-white text-decoration-none">Contact</Link>
          </h6>
        </div>
      </div>
    </section>

    <hr className="my-5" />

    <section className="mb-5">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam,
            commodi optio pariatur est quia magnam eum harum corrupti
            dicta, aliquam sequi voluptate quas.
          </p>
        </div>
      </div>
    </section>

    <section className="text-center mb-5">
      <Link to="/" className="text-white mx-4 ">
        <AiFillFacebook/>
      </Link>
      <Link to="/" className="text-white mx-4 ">
      <AiFillInstagram/>
      </Link>
      <Link to="/" className="text-white mx-4 ">
      <AiFillTwitterSquare/>
      </Link>
      <Link to="/" className="text-white mx-4 ">
      <AiFillLinkedin/>
      </Link>
      <Link to="/" className="text-white mx-4 ">
      <AiFillGoogleCircle/>
      </Link>
      <Link to="/" className="text-white mx-4 ">
      <AiFillYoutube/>
      </Link>
     
    </section>
  </div>

  <div
       className="text-center p-3"
       style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
       >
    © 2020 Copyright 
    <Link className="text-white text-decoration-none" to="https://mdbootstrap.com/"
       > RK Engineering College</Link
      >
  </div>
</footer>
</div>
  )
}

export default Footer