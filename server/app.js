const express = require('express');
const app = express();
// const cors = require('cors');
const path = require('path');
const port = 5003;

// app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

require('./app/routes.js')(app);



app.listen(port, () => {
    console.log(`Sever running on locoalhost:${port}`);
})