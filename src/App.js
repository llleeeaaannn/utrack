import Users from "./dataGenerator.js"
import UserTable from "./userTable.js"
import SpendSlider from "./sliders/spendSlider.js"
import GenderDropdown from "./sliders/genderDropdown.js"
import RegionDropdown from "./sliders/regionDropdown.js"
import React, { useState, useEffect } from 'react'

function App() {

  const [minSpend, setMinSpend] = useState(0);
  const [gender, setGender] = useState('All');
  const [region, setRegion] = useState('All');
  const [users, setUsers] = useState(Users);
  const [filteredUsers, setFilteredUsers] = useState(Users);

  useEffect(() => {
    setFilteredUsers(Users.filter(user => user.spend >= minSpend));
  }, [minSpend]);

  useEffect(() => {
    setFilteredUsers(Users.filter(user => gender === 'All' || user.gender === gender ));
  }, [gender]);

  useEffect(() => {
    setFilteredUsers(Users.filter(user => region === 'All' || user.region === region ));
  }, [region]);

  return (
    <div>
      {/* <UserTable users={users} /> */}

      <SpendSlider minSpend={minSpend} setMinSpend={setMinSpend} />
      <GenderDropdown gender={gender} setGender={setGender} />
      <RegionDropdown region={region} setRegion={setRegion} />

      <UserTable users={filteredUsers} />
    </div>
  );
}

export default App;
