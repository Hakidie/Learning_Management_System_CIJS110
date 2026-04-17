import { useState, useEffect } from 'react';
import { getApiUrl } from '../config/api';

function useResource(resourceName) {
  const [resource, setResource] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = getApiUrl(resourceName);
        const response = await fetch(url);
        const json = await response.json();

        const rawData = json.data.data[0][resourceName];

        setResource(rawData);
      } catch (error) {
        console.error(`Error fetching ${resourceName}:`, error);
      }
    };

    fetchData();
  }, [resourceName]);

  return resource;
}

export default useResource;