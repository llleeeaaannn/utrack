import { Regions, Genders } from "./data/constants.js"

// Generates an array of 1,000 length
const Users = Array.from({ length: 1000}, ( unusedElement, id) => ({
  id: id + 1,
  birthday: Math.ceil(Math.random() * 12),
  spend: Math.floor(Math.random() * 5001),
  region: Regions[Math.floor(Math.random() * Regions.length)],
  gender: Genders[Math.floor(Math.random() * Genders.length)]
}))

export default Users
