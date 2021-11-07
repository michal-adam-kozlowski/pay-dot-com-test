import { gql } from 'apollo-server-core';

export const usersQueriesMockup = {
  GET_USERS: gql`
    query {
      users {
        name
      }
    }
  `,
  GET_SINGLE_USER: gql`
    query {
      user(id: "1") {
        name
      }
    }
  `,
  GET_USERS_WITH_POSTS_WITH_USERS: gql`
    query {
      users {
        name
        posts {
          name
          users {
            name
          }
        }
      }
    }
  `,
  GET_SINGLE_USER_WITH_POSTS: gql`
    query {
      user(id: "2") {
        name
        posts {
          name
          users {
            name
          }
        }
      }
    }
  `,




  GET_USER_FAILD: gql`
    query {
      user(id: "9") {
        name
      }
    }
  `,
};
