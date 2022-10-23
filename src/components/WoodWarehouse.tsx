import React from 'react';

export interface IWoodWarehouseProps {}

export const WoodWarehouse: React.FC<IWoodWarehouseProps> = () => {
  // After implementing the login functionality determine if the user is logged in via the 'user'
  // query and set the user variable here to cause the instructions for the next step to be displayed.
  const user = undefined;

  return user ? (
    <div>
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
    </div>
  ) : null;
};
