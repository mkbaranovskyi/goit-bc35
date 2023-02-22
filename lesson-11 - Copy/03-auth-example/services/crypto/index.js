const crypto = require('crypto')

const secret = 'fasdlkjdsf'

const createHash = async (input) => {
  const hash = crypto
    .createHash('sha512', secret)
    .update(input)
    .digest('hex')

    return hash;
}

module.exports = {
  createHash,
}