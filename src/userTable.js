
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
          <td>{ user.id }</td>
          <td>{ user.birthday }</td>
          <td>{ user.spend }</td>
          <td>{ user.region }</td>
          <td>{ user.gender }</td>
        </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UserTable
