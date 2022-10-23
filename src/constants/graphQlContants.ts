import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      username
      firstName
      lastName
    }
  }
`;

export const USER = gql`
  query user {
    user {
      id
      username
      firstName
      lastName
    }
  }
`;

export const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

export const ADD_WOOD_PRICE = gql`
  mutation addWoodPrice($woodSpecies: String!, $price: Float!) {
    addWoodPrice(woodSpecies: $woodSpecies, price: $price) {
      id
      woodSpecies
      price
    }
  }
`;

export const DELETE_WOOD_PRICE = gql`
  mutation deleteWoodPrice($id: Int!) {
    deleteWoodPrice(id: $id) {
      id
      woodSpecies
      price
    }
  }
`;

export const GET_WOOD_PRICES = gql`
  query woodPrices {
    woodPrices {
      __typename
      id
      woodSpecies
      price
    }
  }
`;
