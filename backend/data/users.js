import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'emmauokoro@yahoo.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Ralph Emmason',
    email: 'remmason@yahoo.com',
    password: bcrypt.hashSync('123456', 10),
  },

  
]

export default users
