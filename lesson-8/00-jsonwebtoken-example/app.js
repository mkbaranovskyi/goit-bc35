require('dotenv').config()
const jsonwebtoken = require('jsonwebtoken')

const { JWT_SECRET } = process.env

const payload = {
  userId: '63dd382154b63543b2252dd9'
}

const token = jsonwebtoken.sign(payload, JWT_SECRET, { expiresIn: '1h' })
console.log(token)

const decoded = jsonwebtoken.decode(token)
console.log(decoded)

new Promise((res, rej) => setTimeout(res, 2000))
  .then(() => {

    const result = jsonwebtoken.verify(token, JWT_SECRET)
    console.log(result)

  })