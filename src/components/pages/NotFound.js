import React from "react";
import { Link } from "react-router-dom";

export default function func() {
  return (
    <div>
      <h1 className="display-4"><span className="text-danger">404</span> Page Not Found</h1>
      <p className="lead">Sorry, the page does not exist!</p>
      <hr className="my-4"></hr>
      <p>Click the link below to go back to the Home page.</p>
      <Link to="/" className="btn btn-outline-danger btn-lg" role="button"><i className="fas fa-home"></i> Home</Link>
    </div>
  );
};
