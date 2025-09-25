import React from "react";
import { useRouteError } from "react-router-dom";
import "../App.scss";
import Header from "../components/header/Header";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <h1>Error</h1>
        <div className="inner-container">
          <p>
            Page Not Found. Please go back to the{" "}
            <a
              href="https://chris-y-dev.github.io/portfolio"
              className="error-link"
            >
              Home Page
            </a>{" "}
            and try again!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
