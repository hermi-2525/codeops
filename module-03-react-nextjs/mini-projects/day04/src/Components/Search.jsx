import { useEffect, useRef } from "react";

function Search() {
  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <input
      ref={searchRef}
      type="text"
      placeholder="Search dishes..."
    />
  );
}

export default Search;