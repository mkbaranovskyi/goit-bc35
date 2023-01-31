const dotenv = require('dotenv')
const mongoose = require('mongoose');
dotenv.config();

const { MONGO_CONNECTION_STRING: mongoConnectionString } = process.env;

mongoose.connect(mongoConnectionString)
  .then(() => console.log('Connected to the database'))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
