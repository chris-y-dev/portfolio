import React from "react";
import { useRouteError } from "react-router-dom";
import "../App.scss";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="container">
      <div className="inner-container">
        <h1>Error</h1>
        <p>
          Page Not Found. Please go back to the{" "}
          <a href="https://chris-y.pages.dev" className="error-link">
            Home Page
          </a>{" "}
          and try again!
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
