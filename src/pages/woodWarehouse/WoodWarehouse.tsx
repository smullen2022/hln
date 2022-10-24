import React, { useContext, useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../components/userContext/UserContext';
import { ADD_WOOD_PRICE, DELETE_WOOD_PRICE, GET_WOOD_PRICES } from '../../constants/graphQlContants';
import { AddWoodForm } from '../../components/woodWarehouse/AddWoodForm';
import styles from './styles.module.css';
import { WoodTable } from '../../components/woodWarehouse/WoodTable';
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
      <h2>Wood Warehouse</h2>
      <p>
        Please add your wood species and associated prices as you see fit. You can sort by name or price and delete any
        species that should no longer be in the list.
      </p>
      <AddWoodForm addNewWoodItem={(newWood) => addWoodPrice({ variables: newWood })} />
      <WoodTable woodItems={woodList} onDelete={(id) => deleteWoodPrice({ variables: { id } })} />
    </div>
  );
};
