export default Users

const Regions = ['United States', 'APAC', 'Latin America', 'Europe']
const Genders = ['Male', 'Female']

const Users = Array.from({ length: 1000}, (id) => ({
  id: id + 1,
  birthday: Math.ceil(Math.random() * 12),
  spend: Math.floor(Math.random() * 5001),
  region: Regions[Math.floor(Math.random() * 4)],
  gender: Genders[Math.floor(Math.random() * 2)]
}))
