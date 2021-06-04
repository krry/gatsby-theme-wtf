/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from "gatsby";

import useSiteMetadata from "../use-site-metadata"
import GraphButton from "./graph-button"
import ThemeButton from "./theme-button"
import { Search } from "./search"

import "./header.css"

const Header = (props) => {
  const siteMetadata = useSiteMetadata();

  return (
    <header
      {...props}
      sx={{
        backgroundColor: "background",
        fontFamily: "heading",
        // fontSize: 1,
        color: "var(--theme-ui-colors-chalk)",
        padding: "1vh 2vw"
      }}
    >
      <Link to="/">
        <h3>{siteMetadata.title}</h3>
      </Link>
      <div className="controls">
        <Search />
        <GraphButton />
        <ThemeButton />
      </div>
    </header>
  );
};

export default Header;
