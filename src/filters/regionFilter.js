// Creates a Region filter with a button for each value in the Regions array. Sets passed state based on selection.
const regions = ["All", "United States", "Europe", "APAC", "Latin America"];

const RegionFilter = ({ region, setRegion }) => {
  return (
    <div>
      <h3>Filter by Region</h3>
      {regions.map(r => (
        <button
          key={r}
          onClick={() => setRegion(r)}
          style={{
              backgroundColor: region === r ? "blue" : "lightgray",
              color: region === r ? "white" : "black",
              border: "1px solid black",
              padding: "10px",
              margin: "5px"
          }}
        >
          {r}
        </button>
      ))}
    </div>
  );
};

export default RegionFilter;
