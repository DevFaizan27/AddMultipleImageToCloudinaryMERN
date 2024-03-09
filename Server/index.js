import express from 'express';
import cors from 'cors';
import { connectToMongo } from './db/database.js';
import cloudinary from 'cloudinary';
import imageRoute from './routes/uploadRoute.js'


//connecting to database
connectToMongo();

const app=express();

app.use(express.json());

cloudinary.v2.config(
    {
        //enter your cloudinary config
    cloud_name: '',
    api_key: '',
    api_secret: '',
    }
)


app.get('/',(req,res)=>{
    return res.status(200).send("Hello faizan");
})


app.use('/image',cors(),imageRoute)

app.listen(5500,()=>{
    console.log(`App Listening at port :5000`)
})