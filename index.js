import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import request from 'request-promise';
import dotenv from 'dotenv';
import cors from 'cors';
import axios from 'axios';

import yogaRoutes from './routes/yoga.js';

const app = express();

dotenv.config()
app.use(cors());
const PORT = process.env.PORT || 5000;
const apiKey = process.env.SCRAPER_APIKEY
//purpose - to scrape info and save to mongodb;

// const generateScraperUrl = (apiKey) => `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.use(express.json());
app.use(bodyParser.json({limit:'30mb', extended:true}))

app.use('/yoga', yogaRoutes);

// app.get('/',(req,res) => {
//     res.send('YOGA API');
// });


// //GET Product Details
// // /products/:productId?api_key=
// app.get('/poses', async (req,res) => {
//     const { api_key } = req.query;

//     try {
//         const {data}= await axios.get(`https://www.ekhartyoga.com/wp-json/ey/v1/resources/8921`);
//         console.log(data)
//         res.json(data);
//     } catch (error) {
//         res.json(error);
//     }
    
// });

// //GET Product Reviews
// app.get('/products/:productId/reviews', async (req,res) => {
//     const { productId } = req.params;
//     const { api_key} = req.query;
//     try {
//         const response = await request(`${generateScraperUrl(api_key)}&url=https://www.amazon.com/product-reviews/${productId}`);

//         res.json(JSON.parse(response));
//     } catch (error) {
//         res.json(error);
//     }
// })

// //GET Product Offers
// app.get('/products/:productId/offers', async (req,res) => {
//     const { productId } = req.params;
//     const { api_key} = req.query;

//     try {
//         const response = await request(`${generateScraperUrl(api_key)}&url=https://www.amazon.com/gp/offer-listing/${productId}`)

//         res.json(JSON.parse(response));
//     } catch (error) {
//         res.json(error);
//     }
// });

// //GET Search Results
// app.get('/search/:searchQuery', async (req,res) => {
//     const { searchQuery } = req.params;
//     const { api_key} = req.query;

//     try {
//         const response = await request(`${generateScraperUrl(api_key)}&url=https://www.amazon.com/s?k=${searchQuery}`)

//         res.json(JSON.parse(response));
//     } catch (error) {
//         res.json(error);
//     }
// });


mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology:true })
    .then(()=>app.listen(PORT,()=>console.log(`Server is running on PORT: ${PORT}`)))
    .catch((error)=>console.log(error));