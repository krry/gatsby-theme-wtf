// import React from "react";

const mapOutboundRefs = (ref) =>
  ref.parent.fields && typeof ref.parent.fields.title !== "undefined" // File
    ? {
        mdx: ref.body,
        title: ref.parent.fields.title,
        id: ref.parent.id,
        displayTitle: ref.parent.fields.title,
        slug: ref.parent.fields.slug,
        aliases: (ref.frontmatter || {}).aliases || [],
      }
    : console.warn(`Cannot map outbound ref`, ref) || null;

const mapInboundRefs = (ref) =>
  ref.parent.fields && ref.parent.fields.title // File
    ? {
        content: null,
        title: ref.parent.fields.title,
        id: ref.parent.id,
        slug: ref.parent.fields.slug,
        aliases: (ref.frontmatter || {}).aliases || [],
      }
    : console.warn(`Cannot map inbound ref`, ref) || null;

export const dataToNote = (data) =>
  data.file
    ? {
        title: data.file.fields.title,
        mdx: data.file.childMdx.body,
        outboundReferences: data.file.childMdx.outboundReferences
          .map(mapOutboundRefs)
          .filter((x) => !!x),
        inboundReferences: data.file.childMdx.inboundReferences
          .map(mapInboundRefs)
          .filter((x) => !!x),
      }
    : null;

export const dataToSlug = (data) =>
  data.file
    ? data.file.fields.slug
    : null;
