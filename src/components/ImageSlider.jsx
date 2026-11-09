import { useEffect, useState } from "react";

const images = [
  "https://plus.unsplash.com/premium_photo-1674682034730-95dbc3cce1c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FscGFwZXJzfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1673448760651-7e1e6fd79e40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2FscGFwZXJzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1714236422987-91f90254f0c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2FscGFwZXJzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1648006916092-9abc41e56b7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdhbHBhcGVyc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1673448760764-9f34f6902515?dpr=2&w=306&auto=format&fit=crop&q=60&crop=entropy&cs=tinysrgb&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8d2FscGFwZXJzfGVufDB8MHx8fDE3MjAxMjY3NjZ8MQ&ixlib=rb-4.0.3",
];

const ImageSlider = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleNext = () => {
    setActiveIdx((prevIdx) => (prevIdx + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIdx((prevIdx) =>
      prevIdx - 1 < 0 ? images.length - 1 : prevIdx - 1,
    );
  };

  useEffect(() => {
    let interval = setInterval(() => {
      handleNext();
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Image Slider</h2>

      <div style={{ display: "flex", alignItems: "center" }}>
        <button style={{ padding: 10, cursor: "pointer" }} onClick={handlePrev}>
          {"<"}{" "}
        </button>
        {images.map(
          (img, idx) =>
            activeIdx === idx && (
              <img
                style={{ objectFit: "cover" }}
                height={300}
                width={300}
                key={idx}
                src={img}
                alt="img"
              />
            ),
        )}
        <button style={{ padding: 10, cursor: "pointer" }} onClick={handleNext}>
          {">"}{" "}
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
