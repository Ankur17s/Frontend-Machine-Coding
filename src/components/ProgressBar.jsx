import { useEffect, useState } from "react";

const data = [10, 20, 30, 50, 80, 100];

const Bar = ({ value }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setAnimatedProgress(value);
  }, []);
  return (
    <div
      style={{
        width: "60%",
        height: "40px",
        border: "1px solid black",
        borderRadius: 20,
        overflow: "hidden",
        margin: 5,
      }}
    >
      <div
        style={{
          backgroundColor: "green",
          height: "100%",
          transform: `translateX(${animatedProgress - 100}%)`,
          transition: "0.5s ease-in",
        }}
      />
    </div>
  );
};

const ProgressBar = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Progress Bar</h1>
      {data.map((value) => (
        <Bar value={value} />
      ))}
    </div>
  );
};

export default ProgressBar;
