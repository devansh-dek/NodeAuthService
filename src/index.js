const express = require('express')
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig')
const v1ApiRoutes = require('./routes/index')


const setUpAndStartServer = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/', (req, res) => {
        return res.status(201).json({
            Message: "HELLO , WORLD!"
        })
    })
    app.use('/api', v1ApiRoutes);
    app.listen(PORT, () => {
        console.log("Starting the server at port", PORT);
    })


}
setUpAndStartServer();

