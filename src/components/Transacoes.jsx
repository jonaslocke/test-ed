import { useFetchData } from "../hooks/useFetchData";

export const Transacoes = () => {
  const { fetchData } = useFetchData();
  const handleSubmitForm = async (event) => {
    event.preventDefault();

    fetchData(1);
  };

  return (
    <div>
      <h1>Transações</h1>
      <form onSubmit={handleSubmitForm}>
        <button type="submit">gera chamada</button>
      </form>
    </div>
  );
};
