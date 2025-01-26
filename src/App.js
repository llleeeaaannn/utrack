import Users from "./dataGenerator.js"
import UserTable from "./userTable.js"
import SpendSlider from "../sliders/spendSlider.js"
import React, { useState } from 'react'

function App() {

  const [users, setUsers] = useState(Users);
  const [filteredUsers, setFilteredUsers] = useState(Users);

  return (
    <div>
      <UserTable users={users} />

      <UserTable users={users} />
    </div>
  );
}

export default App;
