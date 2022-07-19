import mongoose from 'mongoose';

const yogaPoseSchema = new mongoose.Schema({
    sanskrit: {
        type:String,
    },
    name: {
        type:String,
    },
    imageSrc: {
        type:String,
    },
    content: {
        type:String,
    },
    _id: {
        type:String,
    }
})


const YogaPose = mongoose.model('YogaPose', yogaPoseSchema);

export default YogaPose;