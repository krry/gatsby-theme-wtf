import React from "react";
import {
  LinkToSlip,
  PageIndexProvider,
  useSlip,
} from "react-slips-hook";

import "./note-wrapper.css";

function noteContainerClassName({ overlay, obstructed, highlighted } = {}) {
  return `note-container ${overlay ? "note-container-overlay" : ""} ${
    obstructed ? "note-container-obstructed" : ""
  } ${highlighted ? "note-container-highlighted" : ""}`;
}

const NoteWrapper = ({ children, slug, title }) => {
  const [, state, i] = useSlip();

  return (
    <div
      className={noteContainerClassName(state)}
      style={{ left: 40 * (i || 0), right: -585 }}
    >
      <div className="note-content">{children}</div>
      <LinkToSlip to={slug} className="obstructed-label">
        {title}
      </LinkToSlip>
    </div>
  );
};

const ContextProvider = ({ i, ...rest }) => (
  <PageIndexProvider value={i}>
    <NoteWrapper {...rest} />
  </PageIndexProvider>
);

export default ContextProvider;
