import Users from "./dataGenerator.js"
import UserTable from "./userTable.js"
import MinSpendSlider from "./filters/minSpendSlider.js"
import GenderFilter from "./filters/genderFilter.js"
import RegionDropdown from "./filters/regionFilter.js"
import ResponsiveChart from "./chart.js"
import React, { useState, useEffect } from 'react'

function App() {

  const [minSpend, setMinSpend] = useState(0);
  const [gender, setGender] = useState('All');
  const [region, setRegion] = useState('All');
  const [users, setUsers] = useState(Users);
  const [filteredUsers, setFilteredUsers] = useState(Users);

  useEffect(() => {
    function filterBySpend(user) {
      return user.spend >= minSpend
    }

    function filterByGender(user) {
      return gender === "All" || user.gender === gender
    }

    function filterByRegion(user) {
      return region === "All" || user.region === region
    }

    const filtered = Users
      .filter(filterBySpend)
      .filter(filterByGender)
      .filter(filterByRegion)

    setFilteredUsers(filtered)
  }, [minSpend, gender, region])

  return (
    <div>
      <MinSpendSlider minSpend={minSpend} setMinSpend={setMinSpend} />
      <GenderFilter gender={gender} setGender={setGender} />
      <RegionDropdown region={region} setRegion={setRegion} />

      <ResponsiveChart users={filteredUsers} />

      <UserTable users={filteredUsers} />
    </div>
  );
}

export default App;
