import React from "react";
import { Link } from "@reach/router";

const FilterBar = props => {
  return (
    <nav>
      <Link to="/">
        <button>All Articles</button>
      </Link>
      <Link to="/coding">
        <button>Coding Articles</button>
      </Link>
      <Link to="/football">
        <button>Football Articles</button>
      </Link>
      <Link to="/cooking">
        <button>Cooking Articles</button>
      </Link>
    </nav>
  );
};

export default FilterBar;
