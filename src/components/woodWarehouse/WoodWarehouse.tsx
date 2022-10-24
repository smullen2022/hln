import React, { useContext, useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../userContext/UserContext';
import { ADD_WOOD_PRICE, DELETE_WOOD_PRICE, GET_WOOD_PRICES } from '../../constants/graphQlContants';
import { AddWoodForm } from './AddWoodForm';
import styles from './WoodWarehouse.module.css';
import { WoodTable } from './WoodTable';
import { Wood } from '../../types/graphql';

export interface IWoodWarehouseProps {}

export const WoodWarehouse: React.FC<IWoodWarehouseProps> = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { data: currentWoodList } = useQuery(GET_WOOD_PRICES);
  const [addWoodPrice, { data: addWood }] = useMutation(ADD_WOOD_PRICE);
  const [deleteWoodPrice, { data: deletedWood }] = useMutation(DELETE_WOOD_PRICE);
  const [woodList, setWoodList] = useState<Wood[]>([]);

  useEffect(() => {
    if (!user) navigate('/');
  }, [navigate, user]);

  useEffect(() => {
    if (currentWoodList) setWoodList(currentWoodList.woodPrices);
  }, [currentWoodList]);

  useEffect(() => {
    if (addWood) {
      setWoodList((state) => {
        const newState = state?.length > 0 ? [...state, addWood.addWoodPrice] : [addWood.addWoodPrice];
        return newState;
      });
    }
  }, [addWood]);

  useEffect(() => {
    if (deletedWood) {
      setWoodList(deletedWood.deleteWoodPrice);
    }
  }, [deletedWood]);

  return (
    <div className={styles.woodWarehousePage}>
      <p>
        Now that the user is logged in, present them with a form to add a species of wood to a list, with a price for
        the unit of wood of that species.
      </p>
      <div>
        <h3>Wood Warehouse</h3>
        <div>
          <span style={{ color: '#007500', fontWeight: 'bold' }}>
            Create a form to prompt for an individual wood species, and price, and provide a way to submit the new
            species and price for addition to the warehouse by using the <code>addWoodSpecies</code> mutation.
          </span>
        </div>
        <div style={{ color: '#007500', fontWeight: 'bold' }}>
          Create a listing of added wood species with their prices using the <code>woodPrices</code> query. Provide the
          ability to sort types by name and/or price. Also provide the ability to remove types from the list using the{' '}
          <code>deleteWoodPrice</code> mutation. As a bonus, preserve the sort state between page refreshes.
        </div>
      </div>
      <AddWoodForm addNewWoodItem={(newWood) => addWoodPrice({ variables: newWood })} />
      <WoodTable woodItems={woodList} onDelete={(id) => deleteWoodPrice({ variables: { id } })} />
    </div>
  );
};
