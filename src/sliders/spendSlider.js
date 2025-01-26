const SpendSlider = ({ minSpend, setMinSpend }) => {
  return (
    <div>
      <label>You've set the Minimum Spend to {minSpend}</label>
      <input
        type="range"
        min="0"
        max="5000"
        step="100"
        value={minSpend}
        onChange={(e) => setMinSpend(Number(e.target.value))}
      />
    </div>
  );
};

export default SpendSlider;
