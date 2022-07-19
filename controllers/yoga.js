import mongoose from 'mongoose';
import axios from 'axios';

import YogaPose from '../models/yogapose.js';

export const getYogaPosesFromSource = async (req,res) => {
    try {
        const {data} = await axios.get(`https://www.ekhartyoga.com/wp-json/ey/v1/resources/8922`);
        res.json(data);
    } catch (error) {
        res.json(error);
    }
}

export const saveYogaPoseToDb = async (req,res) => {
    try {
        const {data} = await axios.get('http://localhost:5000/yoga/load')
        for (let i = 0; i < data.totalactive; i++) {
            if (data.data[i]) {
                console.log('hi')
                const existingPose = await YogaPose.findById(data.data[i].id); 
                    if (!existingPose) {
                        console.log('bye')
                        const newPose = new YogaPose({_id:data.data[i].id, name:data.data[i].title, imageSrc:data.data[i].imageSrc, sanskrit:data.data[i].sanskrit})
                        await newPose.save();
                    }
                
            }
        }
        res.json(data);
    } catch(error) {
        res.json(error);
    }
}

export const getPoseInfo = async (req,res) => {
    const { query } = req.query
    try {
        const name = new RegExp(query, 'i');

        const poses = await YogaPose.find({$or:[{name}, {sanskrit:name}]});

        res.json(poses);
    } catch(error) {
        res.json(error);
    }
}