import { graphql } from "gatsby";

import SlipLayout from "../components/slip-layout";

export default SlipLayout;

export const pageQuery = graphql`
  query($id: String!) {
    file(id: { eq: $id }) {
      childMdx {
        body
        ...GatsbyGardenReferences
      }
      fields {
        slug
        title
      }
    }
  }
`;
