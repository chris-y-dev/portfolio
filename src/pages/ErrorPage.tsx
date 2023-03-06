import React from "react";
import { useRouteError } from "react-router-dom";
import "../App.scss";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>Error</h1>
      <p>
        Page Not Found. Please go back to the{" "}
        <a href="https://chris-y.pages.dev" className="error-link">
          Homg Page
        </a>{" "}
        and try again!
      </p>
    </div>
  );
};

export default ErrorPage;
