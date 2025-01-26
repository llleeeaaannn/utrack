import Users from "./dataGenerator.js"
import UserTable from "./userTable.js"
import SpendSlider from "./sliders/spendSlider.js"
import GenderDropdown from "./sliders/genderDropdown.js"
import React, { useState, useEffect } from 'react'

function App() {

  const [minSpend, setMinSpend] = useState(0);
  const [gender, setGender] = useState('Male');
  const [users, setUsers] = useState(Users);
  const [filteredUsers, setFilteredUsers] = useState(Users);

  useEffect(() => {
    setFilteredUsers(Users.filter(user => user.spend >= minSpend));
  }, [minSpend]);

  useEffect(() => {
    setFilteredUsers(Users.filter(user => user.gender === gender));
  }, [gender]);

  return (
    <div>
      {/* <UserTable users={users} /> */}



      <SpendSlider minSpend={minSpend} setMinSpend={setMinSpend} />
      <UserTable users={filteredUsers} />
    </div>
  );
}

export default App;
