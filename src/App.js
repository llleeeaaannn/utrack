import logo from './logo.svg';
import './App.css';

function App() {

  const [users, setUsers] = useState(Users);

  return (
    <div>
      <UserTable users={users} />
    </div>
  );
}

export default App;
