const express = require('express');


const app = express();
app.use(express.static('./'));
app.listen(4000, () => console.log('Listening on port 4000'));