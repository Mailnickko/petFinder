import React from "react";
import { Link } from "@reach/router";
import styled, { injectGlobal, keyframes } from "react-emotion";
import colors from "./colors";

const Spin = keyframes`

from {
	transform: rotate(0deg)
}

to {
	transform: rotate(360deg)
}
`;

const SpyGlass = styled("span")`
  display: inline-block;
  animation: 3s ${Spin} linear infinite;
`;

injectGlobal`
	* {
		color: blue;
	}
`;

const Container = styled("header")`
  background-color: ${colors.dark};
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }

  span {
    border: 1px solid red;
  }
`;

const Navbar = () => (
  <Container>
    <NavLink to="/">Adopt Me!</NavLink>
    <NavLink to="/search-params">
      <SpyGlass aria-label="search" role="img">
        🔍
      </SpyGlass>
    </NavLink>
  </Container>
);
export default Navbar;
