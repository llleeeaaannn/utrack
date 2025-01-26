
const UserTable = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Birthday Month</th>
          <th>Spend</th>
          <th>Region</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
        <tr>
          <td>1</td>
          <td>Jan</td>
          <td>1000</td>
          <td>Europe</td>
          <td>Male</td>
        </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UserTable
