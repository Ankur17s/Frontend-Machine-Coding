import { useEffect, useRef, useState } from "react";

const BASE_URL = "https://dummyjson.com/recipes/search?q=";

const SearchSuggestions = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [cache, setCache] = useState({});
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapper = useRef(null);

  const fetchRecipe = async () => {
    if (cache[query]) {
      setData(cache[query]);
      return;
    }
    const res = await fetch(BASE_URL + query);
    const json = await res.json();
    setData(json.recipes);
    setCache((prevCache) => ({ ...prevCache, [query]: json.recipes }));
  };

  useEffect(() => {
    let timer = setTimeout(fetchRecipe, 250);
    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapper.current && !wrapper.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    }

    window.addEventListener("mousedown", handleClickOutside);

    return () => removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <div>
      <h2>Search Suggestion</h2>

      <div style={{ width: "500px", marginTop: 10 }} ref={wrapper}>
        <input
          style={{ width: "100%", padding: 10 }}
          placeholder="search recipe..."
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
        //   onBlur={() => setShowSuggestions(false)}
        />
        {showSuggestions && data.length > 0 && (
          <ul
            style={{
              listStyleType: "none",
              border: "1px solid black",
              width: "100%",
              maxHeight: "300px",
              overflow: "auto",
            }}
          >
            {data.map((recipe) => (
              <li
                key={recipe.id}
                className="search-hover"
                style={{
                  padding: 10,
                  cursor: "pointer",
                }}
              >
                {recipe.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchSuggestions;
