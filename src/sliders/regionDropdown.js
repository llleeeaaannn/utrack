const RegionDropdown = ({ region, setRegion }) => {
  return (
    <div>
      <label>Region is set to</label>
      <select value={region} onChange={(e) => setRegion(e.target.value)}>
        <option value="All">All</option>
        <option value="United States">United States</option>
        <option value="APAC">APAC</option>
        <option value="Europe">Europe</option>
        <option value="Latin America">Latin America</option>
      </select>
    </div>
  )
}

export default GenderDropdown
