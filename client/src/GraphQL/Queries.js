import { gql } from "@apollo/client";

// put queries used in graphiql inside backticks
export const LOAD_USERS = gql`
  query {
    getAllUsers {
      firstName
      lastName
      email
    }
  }
`;
