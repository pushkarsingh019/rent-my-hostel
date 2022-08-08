import connectDB from "../../config/database";
import mongoose from "mongoose";

function createHostel(req, res){
    res.send("This is the create hostel route");
};

export default createHostel;