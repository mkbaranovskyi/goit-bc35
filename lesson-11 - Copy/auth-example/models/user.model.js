const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
  },
  passwordHash: {
    type: String,
    required: true,
    trim: true,
  },
  sessionKey: {
    type: String,
    default: null,
    trim: true,
  },
}, {
  versionKey: false,
  timestamps: {
    createdAt: true,
    updatedAt: false,
  },
})

userSchema.index({ email: 1 })

const UserModel = mongoose.model('users', userSchema)

module.exports = {
  UserModel,
}
