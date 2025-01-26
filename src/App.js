import Users from "./dataGenerator.js"
import UserTable from "./userTable.js"
import React, { useState } from 'react'

function App() {

  const [users, setUsers] = useState(Users);

  return (
    <div>
      <UserTable users={users} />
    </div>
  );
}

export default App;
