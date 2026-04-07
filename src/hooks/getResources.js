import { useState, useEffect } from 'react';

function useResource(resourceName) {
  const [resource, setResource] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://mindx-mockup-server.vercel.app/api/resources/${resourceName}?apiKey=69a9288da99f2cbf33b34607`;
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