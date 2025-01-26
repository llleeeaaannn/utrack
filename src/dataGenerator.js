

const Users = Array.from({ length: 1000}, (id) => ({
  id: id + 1,
  birthday: Math.floor(Math.random() * 12) + 1,
  spend: Math.floor(Math.random() * 5000),
  region: ['United States', 'APAC', 'Latin America', 'Europe'][Math.floor(Math.random() * 4)],
  gender: ['Male', 'Female'][Math.floor(Math.random() * 2)]
}))
