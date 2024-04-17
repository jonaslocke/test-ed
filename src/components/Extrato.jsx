import { useEffect } from "react";
import { useFetchData } from "../hooks/useFetchData";

export const Extrato = () => {
  const { id } = useFetchData();

  useEffect(() => {
    console.log(id);
  }, [id]);

  return <div>Extrato: {id}</div>;
};
