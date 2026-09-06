import { useFetch } from "../useFetch";

export default function FetchOne() {
  const { data, loading, error } = useFetch("/dishes.json");

  if (loading) return <p>Loading component one...</p>;
  if (error) return <p>{error}</p>;

  return <p>Component One: {data.length} dishes loaded</p>;
}