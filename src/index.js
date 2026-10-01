// require('dotenv').config({path : './env'})

// import dns from 'dns'
// dns.setServers(['8.8.8.8', '1.1.1.1'])

import dotenv from 'dotenv'

// this give error sometime extention is important
import connectDB from './db/index.js'
import {app} from './app.js'

dotenv.config({
    path: './env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`Server is running at port ${process.env.PORT}`);  
    })
})
.catch((err) => {
    console.log("MongoDB connection failed !!! " , err);
})



/*
import express from 'express'
const app = express()

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        
        app.on("error : " , (error)=>{
            console.log("error " , error);
            throw error
        })

        app.listen(process.env.PORT , () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("error : " , error)
        throw error
    }
} )()
    */