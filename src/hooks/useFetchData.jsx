import { useState } from "react";

export const useFetchData = () => {
  const [id, setId] = useState(null);
  const fetchData = async (id) => {
    const api = `https://jsonplaceholder.typicode.com/todos/${id}`;
    try {
      const response = await fetch(api);

      if (!response.ok) {
        return;
      }

      const data = await response.json();

      if (!data) {
        return;
      }

      setId(data.id);

      console.log(data);

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fetchData,
    id,
  };
};
