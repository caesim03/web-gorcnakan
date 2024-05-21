const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/update_car_models', (req, res) => {
    const selectedModels = req.body.carModels;

    res.send({ success: true })
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
