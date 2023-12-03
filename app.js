const express = require('express');
const router = require('./allRouters/Routing');
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 8000;
require('./DbConnect/dbConnect');

const App = express();
App.use(express.json());
App.use(cors());
App.use('/User', router)



App.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


