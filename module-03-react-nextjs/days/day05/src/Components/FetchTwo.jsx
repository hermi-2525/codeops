import { useFetch } from "../useFetch";

export default function FetchTwo() {
  const { data, loading, error } = useFetch("/dishes.json");

  if (loading) return <p>Loading component two...</p>;
  if (error) return <p>{error}</p>;

  return <p>Component Two: {data.length} dishes loaded</p>;
}