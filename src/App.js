import Users from "./dataGenerator.js"
import UserTable from "./userTable.js"
import SpendSlider from "./sliders/spendSlider.js"
import React, { useState, useEffect } from 'react'

function App() {

  const [minSpend, setMinSpend] = useState(0);
  const [users, setUsers] = useState(Users);
  const [filteredUsers, setFilteredUsers] = useState(Users);

  useEffect(() => {
    setFilteredUsers(Users.filter(user => user.spend >= minSpend));
  }, [minSpend]);

  return (
    <div>
      {/* <UserTable users={users} /> */}



      <SpendSlider minSpend={minSpend} setMinSpend={setMinSpend} />
      <UserTable users={filteredUsers} />
    </div>
  );
}

export default App;
