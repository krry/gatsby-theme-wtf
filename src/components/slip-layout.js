import React, { memo } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import {
  useSlipsProvider,
  SlipsProvider,
} from "react-slips-hook";
import { dataToNote, dataToSlug } from "../utils/data-to-note";
import Note from "./note";
import NoteWrapper from "./note-wrapper";
import Header from "./header";
import SEO from "./seo";

import "./theme.css";
import "./slip-layout.css";
import "./custom.css";

const Content = ({ windowWidth, scrollContainer, slip, index }) => {
  return (
    <div className="layout">
      <SEO title={slip[slip.length - 1].data.title} />
      <Header />
      <div className="note-columns-scrolling-container" ref={scrollContainer}>
        <div
          className="note-columns-container"
          style={{ width: 625 * (slip.length + 1) }}
        >
          {slip.map((page, i) => (
            <NoteWrapper
              key={page.slug}
              i={typeof index !== "undefined" ? index : i}
              slug={page.slug}
              title={page.data.title}
            >
              <Note {...page.data} />
            </NoteWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};
const MemoContent = memo(Content);

const NotesLayout = ({ location, slug, data }) => {
  const windowWidth = useWindowWidth();

  const [state, scrollContainer] = useSlipsProvider({
    firstPage: { slug: dataToSlug(data), data },
    location,
    processPageQuery: dataToNote,
    pageWidth: 625,
  });

  let pages = state.slips;
  let activeIndex;
  if (windowWidth <= 800) {
    const activeSlug = Object.keys(state.slipStates).find(
      (slug) => state.slipStates[slug].active
    );
    activeIndex = state.slips.findIndex(
      (page) => page.slug === activeSlug
    );
    if (activeIndex === -1) {
      activeIndex = state.slips.length - 1;
    }

    pages = [state.slips[activeIndex]];
  }

  return (
    <SlipsProvider value={state}>
      <MemoContent
        windowWidth={windowWidth}
        scrollContainer={scrollContainer}
        slip={pages}
        index={activeIndex}
      />
    </SlipsProvider>
  );
};

export default NotesLayout;
