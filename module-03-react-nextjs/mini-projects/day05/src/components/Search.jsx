import { useEffect, useRef } from "react";

export default function Search({ search, onChange }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Search dishes..."
      value={search}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}