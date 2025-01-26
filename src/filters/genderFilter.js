// Creates Gender filter buttons. Sets passed state based on selected value.
const genderButtons = ["All", "Male", "Female"];

const GenderFilter = ({ gender, setGender }) => {
  return (
    <div>
      <h3>Filter by Gender</h3>
      {genderButtons.map(g => (
        <button
          key={g}
          onClick={() => setGender(g)}
          style={{
            backgroundColor: gender === g ? "blue" : "lightgray",
            color: gender === g ? "white" : "black",
            border: "1px solid black",
          }}
        >
          {g}
        </button>
      ))}
    </div>
  );
};

export default GenderFilter;
