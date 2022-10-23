export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  addWoodPrice: Wood;
  deleteWoodPrice?: Maybe<Array<Wood>>;
  login: User;
  logout?: Maybe<Scalars['Boolean']>;
};

export type MutationAddWoodPriceArgs = {
  price: Scalars['Float'];
  woodSpecies: Scalars['String'];
};

export type MutationDeleteWoodPriceArgs = {
  id: Scalars['Int'];
};

export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<User>;
  woodPrices?: Maybe<Array<Wood>>;
};

export type User = {
  __typename?: 'User';
  firstName: Scalars['String'];
  id: Scalars['String'];
  lastName: Scalars['String'];
  username: Scalars['String'];
};

export type Wood = {
  __typename?: 'Wood';
  id: Scalars['Int'];
  price: Scalars['Float'];
  woodSpecies: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login: { __typename?: 'User'; id: string; username: string; firstName: string; lastName: string };
};

export type LogoutMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutMutation = { __typename?: 'Mutation'; logout?: boolean | null };

export type AddWoodPriceMutationVariables = Exact<{
  woodSpecies: Scalars['String'];
  price: Scalars['Float'];
}>;

export type AddWoodPriceMutation = {
  __typename?: 'Mutation';
  addWoodPrice: { __typename?: 'Wood'; id: number; woodSpecies: string; price: number };
};

export type DeleteWoodPriceMutationVariables = Exact<{
  id: Scalars['Int'];
}>;

export type DeleteWoodPriceMutation = {
  __typename?: 'Mutation';
  deleteWoodPrice?: Array<{ __typename?: 'Wood'; id: number; woodSpecies: string; price: number }> | null;
};

export type UserQueryVariables = Exact<{ [key: string]: never }>;

export type UserQuery = {
  __typename?: 'Query';
  user?: { __typename?: 'User'; id: string; username: string; firstName: string; lastName: string } | null;
};

export type WoodPricesQueryVariables = Exact<{ [key: string]: never }>;

export type WoodPricesQuery = {
  __typename?: 'Query';
  woodPrices?: Array<{ __typename: 'Wood'; id: number; woodSpecies: string; price: number }> | null;
};

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {}
};
export default result;
