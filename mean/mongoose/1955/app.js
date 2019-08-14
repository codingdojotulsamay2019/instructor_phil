const express = require('express')
const app = express();

app.use(express.json());

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(8888, ()=> console.log('listening on port 8888'));