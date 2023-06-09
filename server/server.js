const express = require('express');
const cors = require('cors');
const app = express();
const userRouter = require('./src/router/userRouter')
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');

dotenv.config({path:'./env'});

const { PORT, DB_URL } = process.env;
 
app.use(express.json());
app.use(cors());
app.use('/app',userRouter)
mongoose.connect(DB_URL).then(()=> {
    console.log('DB is connected successfully')
}).catch(error => {
    console.log(error.message)
});

app.get('/health-check', (req,res) => {
    res.send({
        message: "Application version: 1.0"
    });
});

const path = require("path");
__dirname = path.resolve();

// render deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT || 8080, ()=> {
    console.log(`Server is running ${PORT}`);
});