// The file has a function that connects to the database.

import mongoose from "mongoose";

const MONGO_URL = "mongodb+srv://pushkarsingh019:Mf0tOLDoDLORWVk5@cluster0.sd4ew.mongodb.net/rent-my-hostel";

const connection = {}; // The object that shows if the apps is connected or not.

async function connectDB(){

    // If the app is already connected it does nothing.
    if(connection.isConnected){
        return
    };

    try {
        // If the app is not connected, then this code run to conect the app to the database.
        const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        }

        const db = await mongoose.connect(MONGO_URL);

        connection.isConnected = db.connections[0].readyState;
        console.log(`connected to database -> ${db.connection.host}`);
    } catch (error) {
        console.error(`Could not connect to database -> ${error}`);
        process.exit(1);
    }
};

export default connectDB;