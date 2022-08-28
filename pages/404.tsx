import Link from "next/link";
import React from "react";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <h3>The page you are looking for not found.</h3>
      <p>
        Please click here to go on{" "}
        <Link href="/">
          <a className="link">Home Page</a>
        </Link>
      </p>
    </div>
  );
};

export default PageNotFound;
