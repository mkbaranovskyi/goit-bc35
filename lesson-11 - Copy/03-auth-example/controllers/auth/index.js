const { logout } = require('./logout');
const { signIn } = require('./sign-in');
const { signUp } = require('./sign-up');
const { verifyEmail } = require('./verify-email');

module.exports = {
  logout,
  signUp,
  signIn,
  verifyEmail,
}