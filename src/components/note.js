import React from "react";
import { MDXProvider } from "@mdx-js/react";
import * as components from "./mdx-components";
import MDXRenderer from "./mdx-components/mdx-renderer";
import ReferencesBlock from "./references-block";
import { LinkToSlip } from "react-slips-hook";

const Note = (data) => {
  const AnchorTag = (props) => (
    <components.a {...props} references={data.outboundReferences} />
  );

  return (
    <React.Fragment>
      {data.partOf ? (
        <div>
          Part of{" "}
          <LinkToSlip to={data.partOf.slug}>
            {data.partOf.title}
          </LinkToSlip>
        </div>
      ) : null}
      <MDXProvider components={{ ...components, a: AnchorTag }}>
        <MDXRenderer>{data.mdx}</MDXRenderer>
      </MDXProvider>
      <ReferencesBlock references={data.inboundReferences} />
    </React.Fragment>
  );
};

export default Note;
