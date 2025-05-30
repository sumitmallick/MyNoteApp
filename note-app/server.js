const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const notesAppRouter = require('./routes/notes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/notes', notesAppRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})
