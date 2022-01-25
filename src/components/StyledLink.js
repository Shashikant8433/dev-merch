import { Link } from "react-router-dom";
import React from "react";

function StyledLink({ to, children, style }) {
  return (
    <Link
      to={to}
      style={{ color: "rgba(0, 0, 0, 0.87)", textDecoration: "none", ...style }}
    >
      {children}
    </Link>
  );
}

export default StyledLink;
