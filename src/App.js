import Users from "./dataGenerator.js"
import UserTable from "./UserTable"

function App() {

  const [users, setUsers] = useState(Users);

  return (
    <div>
      <UserTable users={users} />
    </div>
  );
}

export default App;
