import { useEffect, useState } from "react";

const BASE_URL = "https://meme-api.com/gimme/20";

const InfiniteScroll = () => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMeme = async () => {
    try {
      setLoading(true);
      const res = await fetch(BASE_URL);
      const data = await res.json();
      setMemes((prevMemes) => [...prevMemes, ...data.memes]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.scrollY + window.innerHeight >=
      document.body.scrollHeight - 100
    ) {
      fetchMeme();
    }
  };

  useEffect(() => {
    fetchMeme();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div style={{ margin: 10 }}>
      <h2>Infinite Scroll</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {memes.map((meme, idx) => (
          <div
            key={idx}
            style={{ height: 250, width: 220, border: "1px solid black" }}
          >
            <img
              src={meme.url}
              style={{ height: "85%", width: "100%", objectFit: "cover" }}
              alt="img"
            />
            <p>{meme.author}</p>
          </div>
        ))}
      </div>
      {loading && <h3>Loading...</h3>}
    </div>
  );
};

export default InfiniteScroll;
