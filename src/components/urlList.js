import React from 'react';
import CountryGroup from './countryGroup';

const UrlList = ({ data }) => {
  if (!data || Object.keys(data).length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div className="url-list">
      {Object.entries(data).map(([country, urls]) => (
        <CountryGroup key={country} country={country} urls={urls} />
      ))}
    </div>
  );
};

export default UrlList;
