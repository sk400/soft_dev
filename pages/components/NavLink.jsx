import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const NavLink = ({ name, to }) => {
  return (
    <>
      <Typography>
        <Link style={{ textDecoration: "none", color: "black" }} href={`${to}`}>
          {name}
        </Link>
      </Typography>
    </>
  );
};

export default NavLink;
