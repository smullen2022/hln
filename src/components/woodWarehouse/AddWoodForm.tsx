import React, { useState } from 'react';
import { MutationAddWoodPriceArgs } from '../../types/graphql';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './styles.module.css';
import { FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { AddWood } from './types';

interface AddWoodFormProps {
  addNewWoodItem: (addWood: MutationAddWoodPriceArgs) => void;
}

export const AddWoodForm: React.FC<AddWoodFormProps> = ({ addNewWoodItem }) => {
  const [addWood, setAddWood] = useState<AddWood>({
    price: '0.00'
  });
  const inputStyle = {
    width: '100%',
    marginRight: '2rem',
    '& .MuiInputBase-root': {
      overflow: 'hidden'
    },
    '@media (max-width:1024px)': {
      margin: '0 0 1.5rem 0'
    }
  };

  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addNewWoodItem({
      woodSpecies: addWood?.woodSpecies,
      price: parseFloat(addWood?.price as string)
    } as MutationAddWoodPriceArgs);
    setAddWood({
      price: '0.00',
      woodSpecies: ''
    });
  };

  return (
    <form onSubmit={submit}>
      <div className={styles.addWoodBody}>
        <div className={styles.addWoodFields}>
          <TextField
            id="species"
            value={addWood?.woodSpecies}
            label="Species"
            sx={inputStyle}
            onChange={(e) => setAddWood((state) => ({ ...state, woodSpecies: e.target.value }))}
          />
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
            <OutlinedInput
              id="price"
              value={addWood?.price}
              type="number"
              sx={inputStyle}
              inputProps={{
                step: '1'
              }}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
              onChange={(e) => {
                setAddWood((state) => ({ ...state, price: parseFloat(e.target.value).toFixed(2) }));
              }}
            />
          </FormControl>
        </div>
        <div className={styles.addWoodButtonWrap}>
          <Button
            type="submit"
            variant="contained"
            {...((!addWood?.price || !addWood.woodSpecies) && { disabled: true })}
          >
            Add Wood
          </Button>
        </div>
      </div>
    </form>
  );
};
