import mongoose from "mongoose";

const hostelSchema = new mongoose.Schema({
    name : String,
    address : String,
    distance : String,
    rating : Number,
    review : String,
    pricing : [{
        room : String,
        price : Number
    }],
    contactDetails : Number,
    features : [{featureName : String, available : Boolean}],
    youtubeVideolink : String,
    mapsLink : String
});

const Hostel  = mongoose.model(`Hostel`, hostelSchema);

export default Hostel;