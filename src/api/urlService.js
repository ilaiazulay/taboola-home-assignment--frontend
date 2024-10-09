import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api/enriched_urls';

export const getEnrichedUrls = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch enriched URLs');
  }
};
