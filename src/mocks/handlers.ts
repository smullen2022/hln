import { graphql } from 'msw';
import { faker } from '@faker-js/faker';
import {
  AddWoodPriceMutation,
  AddWoodPriceMutationVariables,
  DeleteWoodPriceMutation,
  DeleteWoodPriceMutationVariables,
  LoginMutation,
  LoginMutationVariables,
  LogoutMutation,
  User,
  UserQuery,
  Wood,
  WoodPricesQuery
} from '../types/graphql';

export const handlers = [
  graphql.query<UserQuery>('user', (req, res, ctx) => {
    const loggedInStr = sessionStorage.getItem('loggedIn');
    if (loggedInStr) {
      return res(
        ctx.data({
          user: JSON.parse(loggedInStr)
        })
      );
    }

    return res(
      ctx.data({
        user: null
      })
    );
  }),
  graphql.query<WoodPricesQuery>('woodPrices', (req, res, ctx) => {
    const woodPricesStr = sessionStorage.getItem('woodPrices');
    if (woodPricesStr) {
      return res(ctx.data({ woodPrices: JSON.parse(woodPricesStr) }));
    }
    return res(
      ctx.data({
        woodPrices: null
      })
    );
  }),
  graphql.mutation<LoginMutation, LoginMutationVariables>('login', (req, res, ctx) => {
    const { username, password } = req.variables;

    if (username === 'non-existing') {
      return res(
        ctx.errors([
          {
            message: 'User not found',
            extensions: {
              id: 'e68d71d7-b230-3cb6-038d-8e0cb0868ec0'
            }
          }
        ])
      );
    }

    if (password === 'nope') {
      return res(
        ctx.errors([
          {
            message: 'Login failed',
            extensions: {
              id: 'e68d71d7-b230-3cb6-038d-8e0cb0868ec1'
            }
          }
        ])
      );
    }

    const loggedIn: User = {
      __typename: 'User',
      id: 'e68d71d7-b230-3cb6-038d-8e0cb0868ec0',
      username,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    };

    sessionStorage.setItem('loggedIn', JSON.stringify(loggedIn));

    return res(
      ctx.data({
        login: loggedIn
      })
    );
  }),
  graphql.mutation<LogoutMutation>('logout', (req, res, ctx) => {
    sessionStorage.clear();
    return res(ctx.data({ logout: null }));
  }),
  graphql.mutation<AddWoodPriceMutation, AddWoodPriceMutationVariables>('addWoodPrice', (req, res, ctx) => {
    const newWoodPrice: Wood = { __typename: 'Wood', id: Date.now(), ...req.variables };
    const woodPricesStr = sessionStorage.getItem('woodPrices');
    let woodPrices: Wood[] = woodPricesStr ? [...JSON.parse(woodPricesStr), newWoodPrice] : [newWoodPrice];
    sessionStorage.setItem('woodPrices', JSON.stringify(woodPrices));
    return res(
      ctx.data({
        addWoodPrice: newWoodPrice
      })
    );
  }),
  graphql.mutation<DeleteWoodPriceMutation, DeleteWoodPriceMutationVariables>('deleteWoodPrice', (req, res, ctx) => {
    const { id } = req.variables;
    const woodPricesStr = sessionStorage.getItem('woodPrices');
    let woodPrices: Wood[] = woodPricesStr ? JSON.parse(woodPricesStr) : [];
    woodPrices = woodPrices.filter((w) => w.id !== id);
    sessionStorage.setItem('woodPrices', JSON.stringify(woodPrices));
    return res(
      ctx.data({
        deleteWoodPrice: woodPrices
      })
    );
  })
];
