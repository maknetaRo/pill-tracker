import React, { useState, useEffect } from 'react';
import DrugDetail from './DrugDetail';
import AddDrugForm from './AddDrugForm';

const DrugList = (props) => {
  const [data, setData] = useState(null);
  const [flag, setFlag] = useState(false);

  const [drug, setDrug] = useState(null);

  useEffect(() => {
    setData(props.drugs);
  }, [props.drugs]);

  return (
    <div styel={{ display: 'flex' }}>
      <div style={{ maxWidth: '500px', margin: '2rem auto' }}>
        <h2>List of medicines</h2>
        {data ? (
          <ul>
            {data.map((drug, index) => {
              return (
                <li style={{ listStyle: 'none' }} key={index}>
                  <DrugDetail drug={drug} />
                </li>
              );
            })}
          </ul>
        ) : (
          ''
        )}
      </div>
      <div>
        <button onClick={() => setFlag(true)}>Add Medicine</button>
        {flag ? <AddDrugForm /> : ''}
      </div>
    </div>
  );
};

export default DrugList;
