const Header = () => {
  return (
    <div
      className="header"
      style={{
        display: "flex",
        gap: 10,
        backgroundColor: "lightgray",
        padding: 10,
        fontWeight: 500,
      }}
    >
      <span style={{ cursor: "pointer" }}>Search Suggestions</span>
      <span style={{ cursor: "pointer" }}>Search Suggestions</span>
      <span style={{ cursor: "pointer" }}>Search Suggestions</span>
      <span style={{ cursor: "pointer" }}>Search Suggestions</span>
      <span style={{ cursor: "pointer" }}>Search Suggestions</span>
    </div>
  );
};

export default Header;
