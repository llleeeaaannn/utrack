import { Regions } from "../data/constants.js"

// Creates a Region dropdwon with an option for each value in the Regions array. Sets passed state based on selection.
const RegionDropdown = ({ region, setRegion }) => {
  return (
    <div>
      <label>Region is set to</label>
      <select value={region} onChange={(e) => setRegion(e.target.value)}>
        <option value="All">All</option>
        { Regions.map((region) => (
          <option value={region}>{ region }</option>
        ))}
      </select>
    </div>
  )
}

export default RegionDropdown
