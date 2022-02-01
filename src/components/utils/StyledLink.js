import { Link } from "react-router-dom";
import React from "react";

function StyledLink({ to, children, style, color }) {
  return (
    <Link
      to={to}
      style={{ color: `${color}`, textDecoration: "none", ...style }}
    >
      {children}
    </Link>
  );
}

export default StyledLink;
