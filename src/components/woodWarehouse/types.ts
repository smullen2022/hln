import { MutationAddWoodPriceArgs } from '../../types/graphql';

export type AddWood = {
  woodSpecies?: MutationAddWoodPriceArgs['woodSpecies'];
  price?: string;
};

export type SortOrder = 'asc' | 'desc';

export type OrderBy = 'price' | 'woodSpecies';
