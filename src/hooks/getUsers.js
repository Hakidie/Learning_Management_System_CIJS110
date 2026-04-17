import { useState, useEffect } from 'react';
import { getApiUrl } from '../config/api';

function useGetUser() {
  const [resource, setResource] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = getApiUrl('users');
        const response = await fetch(url);
        const json = await response.json();

        const rawData = json.data.data;

        setResource(rawData);
      } catch (error) {
        console.error(`Error fetching users:`, error);
      }
    };

    fetchData();
  }, []);

  return resource;
}

export default useGetUser;