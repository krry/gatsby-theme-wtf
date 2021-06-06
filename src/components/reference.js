import React from "react";
import { LinkToSlip } from "react-slips-hook";

import "./reference.css";

const Reference = ({ node }) => {
  return (
    <div>
      <LinkToSlip to={node.slug} className="reference">
        <div>
          <h5>{node.title}</h5>
          {node.content}
        </div>
      </LinkToSlip>
    </div>
  );
};

export default Reference;
