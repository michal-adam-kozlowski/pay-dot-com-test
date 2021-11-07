import { gql } from 'apollo-server-core';

export const postsQueriesMockup = {
  GET_POSTS: gql`
  query {
    posts {
      name
    }
  }
  `,
  GET_SINGLE_POST: gql`
  query {
    post(id: "1") {
      name
    }
  }
`,
  GET_POSTS_WITH_USERS: gql`
  query {
    posts {
      name
      users {
        name
        posts {
          name
        }
      }
    }
  }
  `,
  GET_SINGLE_POST_WITH_USERS: gql`
  query {
    post (id: "2") {
      name
      users {
        name
        posts {
          name
        }
      }
    }
  }
  `,
  GET_POST_FAILD: gql`
  query {
    post (id: "8") {
      name
      users {
        name
      }
    }
  }`,
};
