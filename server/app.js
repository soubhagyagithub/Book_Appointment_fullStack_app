const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user');
const cors = require('cors');



const sequelize = require('./util/database');

const app = express();
app.use(cors());

app.use(bodyParser.json({extended: false}))
app.use(userRouter)


sequelize.sync()
.then(result => {
    // console.log(result);
    app.listen(3000, () =>{
        console.log('server is listiening on port 3000');
    })   
})
.catch(err => {
    console.log(err);
})