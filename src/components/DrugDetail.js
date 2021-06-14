import React from 'react';

const DrugDetail = (props) => {
  const { name, doses, time, totalNum } = props.drug;
  return (
    <div>
      <h2>{name}</h2>
      <h4>{totalNum}</h4>
      <>
        {doses ? (
          <div style={{ display: 'flex' }}>
            {doses.map((dose, index) => {
              return (
                <p key={index} style={{ padding: '1rem' }}>
                  Dose: {dose}
                </p>
              );
            })}
          </div>
        ) : (
          ''
        )}
      </>
      <>
        {time ? (
          <div style={{ display: 'flex' }}>
            {time.map((item, index) => {
              return (
                <p style={{ padding: '1rem' }} key={index}>
                  Time: {item}
                </p>
              );
            })}
          </div>
        ) : (
          ''
        )}
      </>
    </div>
  );
};

export default DrugDetail;
