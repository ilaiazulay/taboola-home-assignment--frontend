import React from 'react';

const CountryGroup = ({ country, urls }) => {
  return (
    <div className="country-card">
      <h2>{country}</h2>
      <ul className="url-list">
        {urls.map((url, index) => (
          <li key={index} className="url-item">
            <div className="url-name">
              <strong>{url.name || "Unknown Name"}</strong>
            </div>
            <div className="url-details">
              <a href={url.url} target="_blank" rel="noopener noreferrer" className="url-link">
                {truncateUrl(url.url)}
              </a>
              <span> | Employees: {url.est_emp || "Not Available"}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const truncateUrl = (url) => {
  const maxLength = 30;
  if (url.length > maxLength) {
    return `${url.slice(0, maxLength)}...`;
  }
  return url;
};

export default CountryGroup;
