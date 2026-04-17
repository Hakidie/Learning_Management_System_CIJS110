import { useState, useEffect } from 'react';

function useGetUser() {
  const [resource, setResource] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://mindx-mockup-server.vercel.app/api/resources/users?apiKey=69a9288da99f2cbf33b34607`;
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