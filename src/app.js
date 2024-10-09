import React, { useState, useEffect } from 'react';
import UrlList from './components/urlList';
import useFetch from './hooks/useFetch';
import { getEnrichedUrls } from './api/urlService';
import './styles/app.css';

function App() {
  const { data, loading, error } = useFetch(getEnrichedUrls);
  const [loadingMessage, setLoadingMessage] = useState("Loading, please wait...");

  const handleRetry = () => {
    window.location.reload();
  };

  useEffect(() => {
    const slowNetworkTimeout = setTimeout(() => {
      if (loading) {
        setLoadingMessage("This is taking longer than usual...");
      }
    }, 5000);

    if (!loading || error) {
      clearTimeout(slowNetworkTimeout);
    }

    return () => clearTimeout(slowNetworkTimeout);
  }, [loading, error]);

  if (loading) {
    return (
      <div className="loading-spinner-container">
        <div className="spinner"></div>
        <p>{loadingMessage}</p>
      </div>
    );
  }

  if (error) {
    let errorMessage = "An error occurred. Please try again later.";

    if (error.message.includes("Failed to fetch")) {
      errorMessage = "Network error: Unable to reach the server.";
    } else if (error.response && error.response.status === 500) {
      errorMessage = "Server error: The server is currently down.";
    } else if (error.response && error.response.data && error.response.data.error) {
      errorMessage = error.response.data.error;
    }

    return (
      <div className="error-message">
        <h2>{errorMessage}</h2>
        <button className="retry-button" onClick={handleRetry}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Enriched URLs by Country</h1>
      <UrlList data={data} />
    </div>
  );
}

export default App;
