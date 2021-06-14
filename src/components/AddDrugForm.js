import React, { useState } from 'react';

const AddDrugForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: '300px', display: 'flex', flexDirection: 'column' }}
      >
        <label htmlFor="name">Name: </label>
        <input type="text" id="drug-name" name="drugName" />
        <label htmlFor="total-num">Total Number: </label>
        <input type="number" id="total-number" name="totalNum" />

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddDrugForm;
