const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const app = express()
const PORT = 3000
const userRoute = require('./routes/user_route')
const productRoute = require('./routes/product_route')
// connection
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URL).then(()=>console.log("DB Connected ...")).catch(err=> console.log(err))

app.use(cors())
app.use(express.json())

app.use('/',productRoute)
app.use('/',userRoute)


// app.get('/',(req,res)=>{
//     res.json("Hello World")
// })

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
// const customCss = fs.readFileSync((process.cwd()+"/swagger.css"), 'utf8');
// let express to use this
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(PORT,()=>{console.log("Server is Running on 3000")})