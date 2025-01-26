const GenderDropdown = (gender, setGender) => {
  return (
    <div>
      <label>Gender is set to</label>
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
  )
}

export default GenderDropdown
