const express = require('express');
const app = express();
const conn = require('./config/db');
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override')
const playerRouter = require('./routes/players');

// EJS View Engine
app.set('view engine', 'ejs');
app.use(expressLayouts);

//post data send by body
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

conn.connect((err)=>{
    if(err) throw err;
    console.log("Db is connected successfully: ", conn.threadId);
});

// with route
app.use('/api', playerRouter);

// without route
app.get('/api', (req, res, next)=>{
    res.status(200).json({
        "Message": "Success"
    });
});

app.listen(5000, ()=> console.log("Server is running on port : "+5000));